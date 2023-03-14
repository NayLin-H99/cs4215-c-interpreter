import { BP, imm, ind } from "../vm/datastructures";
import { ir_operand } from "../vm/ir";
import { ty, get_ty_size } from "./typesystem";
import align from "./util"

type dcl = {
    name: string;
    ty: ty
    offset: number;
}

type frame = dcl[];

// stack of frames
export type env = {
    frames: frame[];
    offset: number;
}

type rts = env[];
let rts : env[] = []

export function get_variable(env: env, name: string) : number | undefined {
    for (let frame of env.frames) {
        const found = frame.find(dcl => dcl.name === name);
        if (found) return found.offset
    }
    return undefined
}

export function get_variable_operand(env:env, name:string) : ir_operand {
    const offset = get_variable(env, name);
    if (offset === undefined) throw Error("Accessing variable that don't exist");
    return ind(BP, imm(offset))
}


export function declare_variable(env : env, name: string, ty: ty) {
    if (get_variable(env, name)) throw Error ("redefinition of " + name);

    let cur_frame = env.frames[env.frames.length - 1];
    let offset = env.offset
    if (cur_frame === undefined) {
        env.frames.push([{
            name, ty, offset
        }])
        env.offset += align(get_ty_size(ty), 8)
        return env;
    }

    const dcl = {
        name,
        ty,
        offset,
    }
    cur_frame.push(dcl)
    env.offset += align(get_ty_size(ty), 8)
    return env;
}

export function enter_block(env: env) {
    env.frames.push([])
    return env;
}

export function exit_block(env: env) {
    const frame = env.frames.pop()
    // recycle stack slot
    if (frame) env.offset = frame[0].offset
    return env;
}

export function enter_function(env: env) : env {
    rts.push(env)
    return {frames:[], offset:0};
}

export function exit_function() : env {
    const env = rts.pop()
    if (env === undefined) throw Error("exiting a function without entering")
    else return env;
}
