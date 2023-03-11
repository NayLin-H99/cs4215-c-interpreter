/**
 * The backend representation to make it easier for compiler
 */


import {instruction, OP, operand, imm, ind, BP} from './datastructures'

// extended operands.
// NOTE: label operands should only be used for BR and CALL instructions
export type ir_operand = operand | {tag:"label", name:string}
export type ir_instruction = { operation: OP, operands: ir_operand[]}

export function lbl(name:string) : ir_operand {
    return {
        tag: "label",
        name: name
    }
}

export const code_to_instructions = (code:Record<string, ir_instruction[]>) => {
    let label_mapping : Record<string, number> = {}
    let instruction : ir_instruction[] = []
    let current_pc = 0
    Object.entries(code).forEach(k => {
        label_mapping[k[0]] = current_pc;
        current_pc += k[1].length * 8
    })
    // console.log(label_mapping)

    const ir_operand_to_operand = (opr:ir_operand) : operand => {
        if (opr.tag === "label") return imm(label_mapping[opr.name])
        else return opr
    }

    return Object.values(code).flat().map(instr => {
        let new_instr : instruction = {
            operation: instr.operation,
            operands: instr.operands.map(ir_operand_to_operand)
        }
        return new_instr;
    })
}

// returns the nth (0-indexed) arg position relative to BP in a function call
export const n_arg_pos = (n:number) : operand => ind(BP, imm((n+3) * 8))
