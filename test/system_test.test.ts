import {describe, expect, jest, test} from '@jest/globals';
import parse_and_compile from '../src/compiler/compiler';
import { eval_instr, init_vm, instruction } from '../src/evaluator/evaluator';


const glb = {
    printer: (s:string) => {}
}

const test_vm = (instrs: instruction[]) => {
    init_vm(glb.printer);
    const result = eval_instr(instrs);
    return result; 
}

describe("basic_functionalities", ()=> {
    test("assignment", () => {
        let basic_assignment = [
            ...parse_and_compile("int a = 10; int b = 3 + a * 2 + 7;"),
            {tag: "LDS", name: "b"},
            {tag: "DONE"}
        ]
        const result = test_vm(basic_assignment)
        expect(result).toBe(30);
    });

    test("print var", () => {
        jest.spyOn(glb, "printer").mockImplementation(() => {});
        let printing_var = [
            ...parse_and_compile("int a = 5; print(a);")
        ]
        const result = test_vm(printing_var)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "5")
    });
    test("print constant", () => {
        jest.spyOn(glb, "printer").mockImplementation(() => {});
        let printing_var = [
            ...parse_and_compile("print(6);")
        ]
        const result = test_vm(printing_var)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "6")
    })
})

