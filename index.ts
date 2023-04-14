import { eval_instr, init_vm, instruction } from "./src/evaluator/evaluator"
import parse_and_compile from "./src/compiler/compiler"


export function interpretClite (code:string, is_init: boolean, printer:Function | undefined) :[number|undefined, instruction[]] {
    if(is_init) {
        if (printer) {
            init_vm(printer)
        } else {
            init_vm(console.log)
        }
    }
    const instrs = parse_and_compile(code);
    

    return [eval_instr(instrs), instrs]
}