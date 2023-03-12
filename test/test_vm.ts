

import {OP, imm, ind, R0, R1, R2, R3} from '../src/vm/datastructures';
import { code_to_instructions, n_arg_pos, lbl } from '../src/vm/ir'
import { run_vm } from '../src/vm/vm'

/**
 * int sum_of_n(int n) {
 *    int i = 0;
 *    int sum = 0;
 *    while(i < n) {
 *      sum += i++;
 *    }
 *    return sum;
 * }
 * int main() {
 *    return sum_of_n(100);
 * }
 */
let instructions = code_to_instructions({
    main: [
        {operation: OP.PUSH, operands:[imm(100)]},
        {operation: OP.CALL, operands:[{tag:"label", name:"fn_sum_of_n"}]},
        {operation: OP.POP, operands:[R1]}, // pop away the argument used previously
        {operation: OP.DONE, operands:[R0]}
    ],
    fn_sum_of_n: [
        {operation: OP.MOV, operands: [R1, imm(0n)]},
    ],

    fn_sum_of_n_while: [
        // R2 = R1 < arg1
        {operation: OP.LT, operands: [R2, R1, n_arg_pos(0)]},
        // if (r2) goto fn_sum_of_n_while_blk 
        // else goto fn_sum_of_n_while_end
        {operation: OP.BR, operands: [R2, lbl("fn_sum_of_n_while_blk"), lbl("fn_sum_of_n_while_end")]},
    ],
    fn_sum_of_n_while_blk: [
        {operation: OP.ADD, operands: [R1, R1, imm(1n)]},
        {operation: OP.ADD, operands: [R0, R1, R0]},
        {operation: OP.BR, operands: [lbl("fn_sum_of_n_while")]},
    ],
    fn_sum_of_n_while_end: [
        {operation: OP.PUSH, operands: [imm(11n)]},
        {operation: OP.PUSH, operands: [imm(12n)]},
        {operation: OP.PUSH, operands: [imm(13n)]},
        {operation: OP.POP, operands: [R3]},
        {operation: OP.RET, operands: []},
    ],
})


console.log(run_vm(instructions))