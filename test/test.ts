import parse_and_compile from "../src/compiler/compiler"
import { OP, R0 } from "../src/vm/datastructures";
import { instruction_to_string, run_vm } from "../src/vm/vm";

let instr = parse_and_compile("int a = 256; a = 0; char b = a; char c = b + 1;");

instr = instr.concat([
    {operation: OP.DONE, operands: [R0]}
])
run_vm(instr, true)

// console.log(instr.map(instruction_to_string).join("\n"))

// parse_and_compile("int a=1, b=2;");
// parse_and_compile("int a; int a = 1; int b=a;");