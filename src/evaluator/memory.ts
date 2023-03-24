import {get_ty_size, tvoid, ty, ptr} from "../compiler/typesystem"

// MEMORY MODEL
const HEAP_SIZE = 1000000 * 8

const LITTLE_ENDIAN = true;

export let HEAP = new ArrayBuffer(HEAP_SIZE)
const HEAP_VIEW = new DataView(HEAP)

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

export let OS : operand[] = []

export function init_memory() {
    free = 0
    OS = []
    HEAP = new ArrayBuffer(HEAP_SIZE)
    env = [[]]
    fctx = {}
}

// correctness at byte level can only be guaranteed for 32 bits
// due to difference in numerical representations between C and JS number
function read_word(address : number) {
    return HEAP_VIEW.getFloat64(address, LITTLE_ENDIAN)
}

function write_word(address:number, value:number) {
    HEAP_VIEW.setFloat64(address, value, LITTLE_ENDIAN)
}

function read_byte(address:number) {
    return HEAP_VIEW.getUint8(address)
}

function write_byte(address:number, value:number) {
    HEAP_VIEW.setUint8(address, value)
}

export const read_as = (ty: ty) => (address:number) => 
    ty.typename === "char" ? HEAP_VIEW.getUint8(address) :
    ty.typename === "float" || ty.typename === "double" ? HEAP_VIEW.getFloat64(address) :
    // everything else are 8 bytes
    Number(HEAP_VIEW.getBigInt64(address, LITTLE_ENDIAN))

const write_as = (ty: ty) => (address:number, v:number) => 
    ty.typename === "char" ? HEAP_VIEW.setUint8(address, v) :
    ty.typename === "float" || ty.typename === "double" ? HEAP_VIEW.setFloat64(address, v) :
    // everything else are 8 bytes
    Number(HEAP_VIEW.setBigInt64(address, BigInt(v), LITTLE_ENDIAN))

// allocate n bytes
export function allocate(bytes:number) {
    const addr = free
    free += bytes
    return addr
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
    const dcl : dcl = {name, ty, address:free}
    cur_frame.push(dcl)
    
    free += get_ty_size(ty);
    return dcl.address
}

export function get_var_addr(name:string) {
    return get_var(name).address
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
    if (opr.ty.typename !== "pointer" && opr.tag === "rvalue") throw Error("Can only deref pointers");

    let value : number = 
        opr.tag === "lvalue" ? read_as(opr.ty)(opr.value) : opr.value
    
    const ty = 
        opr.ty.typename === "pointer" ? opr.ty.type :  // if *ty, deref to ty
        opr.ty.typename === "arr" ? opr.ty.ty : opr.ty // if ty[], deref to ty
        
    return lvalue(value, ty)
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
    RTS.push([env, ret_addr])
    // frame_0 : global frame. frame_1 : param frame
    env = [env[0], []]
}

export function binds(name:string, ty: ty, value:number) {
    const cur_frame = env[env.length-1];
    if(cur_frame.find(x => x.name === name)) throw Error("Redeclaration of variable " + name)
    const dcl : dcl = {name, ty, address:free}
    write_as(dcl.ty)(dcl.address, value)
    cur_frame.push(dcl)
    
    free += get_ty_size(ty);
}

// ON RETURN
export function exit_function() : number {
    const [e, p] = RTS.pop()
    env = e
    return p
}