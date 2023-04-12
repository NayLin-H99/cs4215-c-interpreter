import {describe, expect, jest, test} from '@jest/globals';
import parse_and_compile from '../src/compiler/compiler';
import { eval_instr, init_vm, instruction } from '../src/evaluator/evaluator';
import { arr, char, int, ptr } from "../src/compiler/typesystem"


const glb = {
    printer: (s:string) => {}
}

const test_vm = (instrs: instruction[]) => {
    init_vm(glb.printer);
    const result = eval_instr(instrs);
    return result; 
}


// quick helper function to generate basic code 
// decl_int_var_with_value("a", 10) means int a = 10;
const decl_int_var_with_value = (name:string, value:number) => [
    {tag: "DECL", var: { name, ty: int }},
    {tag: "LDC", value},
    {tag: "ASSIGN"},
    {tag: "POP"},
]

describe("evaluator", () =>{
    test("var block scoping", () => {
        /**
         * int a = 10;
         * {
         *  int b = 10;
         *  a = 12;
         * }
         * int b = 11;
         * a - b;
         */
        let var_blk_scope = [
            ...decl_int_var_with_value("a", 10),
            {tag:"ENTER_BLK"},
            ...decl_int_var_with_value("b", 10),
            {tag: "LDS", name: "a"},
            {tag: "LDC", value: 12},
            {tag: "ASSIGN"},
            {tag: "POP"},
            {tag:"EXIT_BLK"},
            ...decl_int_var_with_value("b", 11),
            {tag: "LDS", name: "a"},
            {tag: "LDS", name: "b"},
            {tag: "BINOP", op: "-"},
            {tag: "DONE"}
        ]

        expect(test_vm(var_blk_scope)).toBe(1)
    })

})