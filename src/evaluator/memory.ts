import { write } from "fs"
import {get_ty_size, ty, ptr, int, char, arr} from "../compiler/typesystem"

// MEMORY MODEL
const HEAP_SIZE = 1000000 * 8
const STACK_SIZE = 1000000 * 8
const TEXT_SIZE = 1000000 * 8
// HEAP | STACK
const MEM_SIZE = HEAP_SIZE + STACK_SIZE + TEXT_SIZE

const READ_PERM = 1;
const WRITE_PERM = 1;

const PERMISSIONS = {
    HEAP: READ_PERM | WRITE_PERM,
    STACK: READ_PERM | WRITE_PERM,
    TEXT: READ_PERM 
}

const LITTLE_ENDIAN = true;

export let MEM = new ArrayBuffer(MEM_SIZE)


const HEAP_VIEW = new DataView(MEM)

type lvalue = {
    tag: "lvalue",
    value: number, // address to the designated object
    ty: ty,
}
type rvalue = {
    tag: "rvalue",
    value: number // just numbers, can be address when used as *rvalue.value
    ty: ty,
}
export const
    lvalue = (value:number, ty: ty) : lvalue => ({tag:"lvalue", value, ty}),
    rvalue = (value:number, ty: ty) : rvalue => ({tag:"rvalue", value, ty})


export type operand = lvalue | rvalue


type fdecl = {
    rty: ty,
    params: string[]
    param_ty: ty[]
    address: number // PC value
}
let fctx : Record<string, fdecl> = {}


// void *free
let free : number
let sp : number

export let OS : operand[] = []

export function init_memory() {
    free = 0
    sp = MEM_SIZE - 0x20
    OS = []
    MEM = new ArrayBuffer(MEM_SIZE)
    env = [[]]
    fctx = {}
    free_chunks = []
    string_memo.clear()
    string_free = HEAP_SIZE + STACK_SIZE
}


const get_segment = (address: number) => 
    address < HEAP_SIZE ? "HEAP" :
    address < HEAP_SIZE + STACK_SIZE ? "STACK" :
    "TEXT"

const get_perm = (address: number) => PERMISSIONS[get_segment(address)]


// all memory are readable until mprotect / mmap is implemented
export const read_as = (ty: ty) => (address:number) => 
    ty.typename === "char" ? HEAP_VIEW.getUint8(address) :
    ty.typename === "float" || ty.typename === "double" ? HEAP_VIEW.getFloat64(address) :
    // everything else are 8 bytes
    Number(HEAP_VIEW.getBigInt64(address, LITTLE_ENDIAN))

// correctness at byte level can only be guaranteed for 32 bits
// due to difference in numerical representations between C and JS number
const write_as = (ty: ty) => (address:number, v:number) => {  
    if (!(get_perm(address) & WRITE_PERM)) throw Error("Unwritable memory in " + get_segment(address));
    
    return ty.typename === "char" ? HEAP_VIEW.setUint8(address, v) :
        ty.typename === "float" || ty.typename === "double" ? HEAP_VIEW.setFloat64(address, v) :
        // everything else are 8 bytes
        Number(HEAP_VIEW.setBigInt64(address, BigInt(v), LITTLE_ENDIAN))
}


export const memcpy = (dst:number, src:number, size: number) => {
    for (let i=0; i<size; i++) {
        const byte = read_as(char)(src + i);
        write_as(char)(dst+i, byte)
    }
}

let free_chunks : [number, number][] = []

// allocate n bytes
export function allocate(bytes:number) {
    let first_fit = free_chunks.find(([_, size]) => size >= bytes)
    if (first_fit) {
        // remove chunk from free chunks
        free_chunks = free_chunks.filter(x => x !== first_fit)
        return first_fit[0]
    }

    // did not find a valid chunk
    const addr = free + 8;
    // [size | ....rest of memory ], addr point right after size header
    write_as(int)(addr-8, bytes)
    free += bytes + 8;
    return addr
}

export function free_mem(addr:number) {
    const size = read_as(int)(addr - 8)
    free_chunks.push([addr, size])
}

// STRINGS 

let string_memo = new Map<string, number>();
let string_free = HEAP_SIZE+STACK_SIZE

// creates a string in text segment
export function make_string(s:string) : operand{
    const addr = string_memo.get(s);
    if (addr) return lvalue(addr, arr(char, s.length)) 

    const ret = string_free;
    for (let i = 0; i<s.length; i++) {
        write_as(char)(string_free+i, s.charCodeAt(i))
    }
    // null terminator
    write_as(char)(string_free + s.length, 0)
    string_free += s.length + 1
    string_memo.set(s, ret)
    return lvalue(ret, arr(char, s.length))
}

// ENVIRONMENTS 

type dcl = {
    name: string;   // name of declaration
    ty: ty          // type of declaration
    address: number; // address in heap
}

type frame = dcl[]
let env : frame[] = [[]]


export function declare_function(rty:ty, name:string, params: string[], param_ty: ty[], address: number) {
    if (fctx[name] !== undefined) throw Error("Function was already defined");
    fctx[name] = {rty, params, param_ty, address}
}

export function get_fdecl(name: string) {
    return fctx[name]
}

export function declare_variable(name:string, ty:ty) : number {
    const cur_frame = env[env.length-1];
    if(cur_frame.find(x => x.name === name)) throw Error("Redeclaration of variable " + name)
    sp -= get_ty_size(ty);

    // console.log(name, sp)
    const dcl : dcl = {name, ty, address:sp}
    cur_frame.push(dcl)
    
    // if (ty.typename === "arr") { 
    //     free += 8; 
    //     // if array, first index is for storing array variable address.
    //     write_as(int)(dcl.address, dcl.address+8)
    // }

    return dcl.address
}

export function get_var_value(name:string) {
    // TODO: add return value depending on type info
    const v = get_var(name)
    return read_as(v.ty)(v.address)
}

export function get_var(name:string) {
    for (let i=env.length-1; i >= 0; i--) {
        const cur_frame = env[i]
        const found = cur_frame.find(x => x.name === name)
        if (found) return found
    }
    throw Error(`Variable ${name} not declared`)
}

export function assign_variable(var_op:operand, val_opr: operand) {
    const address = var_op.value;

    // requires memcpy for bulk memory movement for strings
    if (var_op.ty.typename === "arr" && var_op.ty.ty === char) {
        if (!var_op.ty.n_elems) {
            throw Error("Invalid array size")
        }
        memcpy(address, val_opr.value, var_op.ty.n_elems);
        return
    }

    // normal case
    const value : number = 
        val_opr.tag === "lvalue" ? read_as(val_opr.ty)(val_opr.value) : val_opr.value
    
    write_as(var_op.ty)(address, value)
}

// address of operand : &
export function address_of(opr: lvalue) : rvalue {
    return rvalue(opr.value, ptr(opr.ty));
}

// indirection : *
export function deref(opr: operand) : lvalue {
    // assume rvalue is a valid ptr, if not UB
    if (opr.ty.typename !== "pointer") throw Error("Can only deref pointers");

    let value : number = 
        opr.tag === "lvalue" ? read_as(opr.ty)(opr.value) : opr.value
    
    return lvalue(value, opr.ty.type)
}

export function enter_block() {
    env.push([])
}
export function exit_block() {
    env.pop();
}
export function pop_env(n : number) {
    for(let i=0; i<n; i++) {
        env.pop();
    }
}


let RTS : any[] = []

// ON CALL
export function enter_function(ret_addr: number) {
    // save context
    RTS.push([env, ret_addr, sp])
    // frame_0 : global frame. frame_1 : param frame
    env = [env[0], []]
}

export function binds(name:string, ty: ty, value:number) {
    const addr = declare_variable(name, ty);
    write_as(ty)(addr, value)
}

// ON RETURN
export function exit_function() : number {
    const [e, p, s] = RTS.pop()
    env = e
    sp = s
    return p
}