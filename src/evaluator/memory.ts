import {get_ty_size, tvoid, ty, ptr} from "../compiler/typesystem"

// MEMORY MODEL


const HEAP_SIZE = 1000000 * 8

const LITTLE_ENDIAN = true;

export let HEAP = new ArrayBuffer(HEAP_SIZE)
const HEAP_VIEW = new DataView(HEAP)

type lvalue = {
    tag: "lvalue",
    value: number, // address to the designated object
}
type rvalue = {
    tag: "rvalue",
    value: number // just numbers, can be address when used as *rvalue.value
}

export type operand = lvalue | rvalue


// void *free
let free : number

export let OS : operand[] = []

export function init_memory() {
    free = 0
    OS = []
    HEAP = new ArrayBuffer(HEAP_SIZE)
}

export function read_word(address : number) {
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

// ENVIRONMENTS 

type dcl = {
    name: string;   // name of declaration
    ty: ty          // type of declaration
    address: number; // address in heap
}

type frame = dcl[]
let env : frame[] = [[]]

// for fast lookups
let addr_ctxt : Record<number, dcl> = {}
let var_ctxt: Record<string, dcl> = {}

export function declare_variable(name:string, ty:ty) : number {
    if (var_ctxt[name] !== undefined) throw Error("Redeclaration of variable " + name)
    const cur_frame = env[env.length-1];
    const dcl : dcl = {name, ty, address:free}
    cur_frame.push(dcl)
    
    addr_ctxt[free] = dcl
    var_ctxt[name] = dcl

    free += get_ty_size(ty);
    return dcl.address
}

export function get_var_addr(name:string) {
    return var_ctxt[name].address
}

export function assign_variable(var_op:operand, val_opr: operand) {
    const address = var_op.value;
    const value : number = 
        val_opr.tag === "lvalue" ? read_word(val_opr.value) : val_opr.value
    // assume 8 byte sizes for now
    write_word(address, value)
}

// address of operand : &
export function address_of(opr: lvalue) : rvalue {
    return {
        tag: "rvalue",
        value: opr.value
    }
}

// indirection : *
export function deref(opr: operand) : lvalue {
    // assume rvalue is a valid ptr, if not UB
    let value : number = 
        opr.tag === "lvalue" ? read_word(opr.value) : opr.value
    return {
        tag: "lvalue",
        value: value
    }
}

function enter_block() {
    env.push([])
}
function exit_block() {
    env.pop()?.forEach(v => {
        delete addr_ctxt[v.address]
        delete var_ctxt[v.name]
    })
}
