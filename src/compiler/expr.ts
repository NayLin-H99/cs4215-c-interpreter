import { get_variable } from './memory'
import { is_rule, get_text } from './compiler'
import { get_ty_size } from './typesystem'
import { instruction, OP, operand, ind, imm, R0, R1, R2, R3, PC, BP, SP, RA } from '../vm/datastructures'


export function handle_assignmentExpression(root: any) {
    let instrs: instruction[] = []
    // conditionalExpression | Identifier assignmentOperator assignmentExpression | DigitSequence // for
    // compile(root.children[0])
    if (root.childCount >= 2) {
        if (get_text(root.children[1]) !== "=") throw Error ("assignment op not supported yet. TODO")
        // Identifier assignmentOperator assignmentExpression
        const lhs = get_variable(get_text(root.children[0]));
        if (lhs === undefined) throw Error("variable not defined");
        handle_assignmentExpression(root.children[2]);
        instrs.push(
            {operation: OP.POP, operands: [R0]},
            {operation: OP.MOV, operands: [imm(get_ty_size(lhs.ty)), ind(BP, imm(-lhs.offset)), imm(8), R0]},
            {operation: OP.PUSH, operands: [R0]},
        )
    } else {
        // conditionalExpression | DigitSequence
        if (!is_rule(root.children[0])) throw Error("Expanded to DigitSequence")
        handle_conditionalExpression(root.children[0])
    }
    return instrs;
}

function handle_conditionalExpression(root: any) {

}