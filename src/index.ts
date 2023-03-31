import { eval_instr, init_vm } from "./evaluator/evaluator"
import parse_and_compile from "./compiler/compiler"


export default function interpretClite (code:string, is_init: boolean) {
    if(is_init) init_vm();
    return eval_instr(parse_and_compile(code))
}