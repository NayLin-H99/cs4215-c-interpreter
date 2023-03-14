import {env, compile_dcl, compile_assign, enter_block, exit_block, enter_function, exit_function, reset_memory_env, get_variable_operand, print_env} from "../src/compiler/memory"
import { char, int } from "../src/compiler/typesystem"
import { imm, ind, instruction, OP, operand, R0, R1, R2 } from "../src/vm/datastructures"
import { instruction_to_string, run_vm } from "../src/vm/vm"


reset_memory_env()

let insn : instruction[] = [];


const LDC = (n : number) : instruction[] => [{operation: OP.PUSH, operands:[imm(n)]}]
const LDS = (s : string) : instruction[] => [{operation: OP.PUSH, operands:[get_variable_operand(s)]}]

const LD = (t : number | string) : instruction[] => typeof t === "string" ? LDS(t) : LDC(t)

const binop = (op : OP, o1 : number | string, o2: number | string) => [
    ...LD(o1),
    ...LD(o2),
    {operation: OP.POP, operands:[R1]},
    {operation: OP.POP, operands:[R2]},
    {operation: op, operands:[R0, R1, R2]},
    {operation: OP.PUSH, operands:[R0]}
]

/**
 * {
 *      char init = 11;
 *      {
 *          int a;
 *          int b = a;
 *          init = 12;
 *      }
 *      char a = 10;
 *      int b = a + init;
 * 
 *      return b;
 * }
 */
enter_function()
    insn = insn.concat(compile_dcl("init", char))
    insn = insn.concat(LD(1))
    insn = insn.concat(compile_assign("init"))
    
    enter_block()
    // int a;
    insn = insn.concat(compile_dcl("a", int))
    // int b = a;
    insn = insn.concat(compile_dcl("b", int))
    insn = insn.concat(LD("a"))
    insn = insn.concat(compile_assign("b"))
    // init = 12
    insn = insn.concat(LD(15))
    insn = insn.concat(compile_assign("init"))
    exit_block()

    // int a = 10
    insn = insn.concat(compile_dcl("a", char))
    insn = insn.concat(LD(10))
    insn = insn.concat(compile_assign("a"))

    // int b = a + init
    insn = insn.concat(compile_dcl("b", int))
    insn = insn.concat(binop(OP.ADD, "a", "init"))
    insn = insn.concat(compile_assign("b"))

    insn = insn.concat([
        ...LD("b"),
        {operation: OP.POP, operands:[R0]},
        {operation: OP.DONE, operands:[R0]},
    ])

exit_function()

console.log(run_vm(insn))
