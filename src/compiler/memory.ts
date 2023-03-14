import { BP, imm, ind, instruction, OP, operand, R0, SP } from "../vm/datastructures";
import { ir_instruction, ir_operand } from "../vm/ir";
import { ty, get_ty_size } from "./typesystem";
import align from "./util"

type dcl = {
    name: string;   // name of declaration
    ty: ty          // type of declaration
    offset: number; // offset in memory
}

type frame = dcl[]; // dcl entries in the current frame

// env is a stack of frames
export type env = {
    frames: frame[];
    offset: number;
}

type rts = env[];
let rts : env[] = []

let env : env = {
    frames: [],
    offset: 0
}

export function reset_memory_env() {
    rts = []
    env = {
        frames: [],
        offset: 0
    }
}

export const print_env = () => {
    console.log("env:")
    console.dir(env, {depth:null})
}



export function compile_dcl(name:string, ty: ty) : instruction[] {
    declare_variable(name, ty)
    const size = align(get_ty_size(ty), 8)

    return [{operation: OP.SUB, operands:[SP, SP, imm(size)]}]
}

// assignment of 1 operand value to another
export function compile_assign(name:string) : instruction[] {
    const dst = get_variable_operand(name)
    const ty = get_variable(name)?.ty
    if (ty === undefined) throw Error("writing to undeclared variable");
    const size = get_ty_size(ty)

    return [
        {operation: OP.POP, operands: [R0]},
        {operation: OP.MOV, operands:[imm(size), dst, imm(8), R0]} // todo: mov correct size
    ]
}

export function get_variable(name: string) : dcl | undefined {
    for (let frame of env.frames) {
        const found = frame.find(dcl => dcl.name === name);
        if (found) return found
    }
    // return global_frame.find(dcl => dcl.name === name);
    return undefined;
}

export function get_ty_info(name: string) : ty | undefined {
    return get_variable(name)?.ty;
}

export function get_variable_operand(name: string) : operand {
    const offset = get_variable(name)?.offset;
    if (offset === undefined) throw Error("Accessing variable that don't exist");
    return ind(BP, imm(-offset)) // [BP - offset]
}


function declare_variable(name: string, ty: ty) {
    if (get_variable(name)) throw Error ("redefinition of " + name);

    let cur_frame = env.frames[env.frames.length - 1];
    let offset = env.offset
    if (cur_frame === undefined) {
        env.frames.push([{
            name, ty, offset
        }])
        env.offset += align(get_ty_size(ty), 8)
        return 
    }

    const dcl = {
        name,
        ty,
        offset,
    }
    cur_frame.push(dcl)
    env.offset += align(get_ty_size(ty), 8)
}

export function enter_block() {
    env.frames.push([])
}

export function exit_block() {
    const frame = env.frames.pop()
    // recycle stack slot
    // if (frame) env.offset = frame[0].offset
}

export function enter_function() {
    rts.push(env)
    env = {
        frames: [],
        offset: 0
    }
}

export function exit_function() {
    const restored_env = rts.pop();
    if (restored_env === undefined) throw Error("exiting a function without entering")
    env = restored_env
}
