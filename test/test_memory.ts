import {env, declare_variable, enter_block, exit_block, enter_function, exit_function, get_variable} from "../src/compiler/memory"
import { int } from "../src/compiler/typesystem"

let env : env = {
    frames: [],
    offset: 0
}

const prefix_fn = (msg:string, fn:any) => 
    (...args: any[]) => {
        console.log(msg)
        return fn(...args)
    }

const p_enter_block = prefix_fn("=============entered block=============", enter_block)
const p_exit_block = prefix_fn("=============exited block=============", exit_block)
const p_enter_function = prefix_fn("=============entered function=============", enter_function)
const p_exit_function = prefix_fn("=============exited function=============", exit_function)

const print = (e:any) => {
    console.log("env:")
    console.dir(e, {depth:null})
}

env = enter_function(env)
    env = declare_variable(env, "a", int)
    env = declare_variable(env, "b", int)
    print(env)
    env = p_enter_block(env)
    env = declare_variable(env, "blk_c", int)
    env = declare_variable(env, "blk_d", int)
    print(env)
    env = p_exit_block(env)
    print(env)
    env = p_enter_function(env)
    print(env)
        env = declare_variable(env, "fn_a", int)
        env = declare_variable(env, "fn_b", int)
        env = declare_variable(env, "fn_c", int)
    print(env)
    env = p_exit_function()
    print(env)
env = exit_function()