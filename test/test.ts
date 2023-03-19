import parse_and_compile from "../src/compiler/compiler"
import { run_vm } from "../src/evaluator/evaluator";

let instrs = [
    ...parse_and_compile("int a = 10; int *b = 3 + a * 2 + 7;"),
    {tag: "DONE"}
]

console.log(run_vm(instrs, true))

// run_vm(instr, true)

// console.log(instr.map(instruction_to_string).join("\n"))

// parse_and_compile("int a=1, b=2;");
// parse_and_compile("int a; int a = 1; int b=a;");