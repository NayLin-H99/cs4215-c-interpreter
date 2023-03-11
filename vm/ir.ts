/**
 * The backend representation to make it easier for compiler
 */


import {instruction, OP, operand, imm, R0, R1} from './datastructures'
import {instruction_to_string} from './vm'

// extended operands.
// NOTE: label operands should only be used for BR and CALL instructions
export type ir_operand = operand | {tag:"label", name:string}
export type ir_instruction = { operation: OP, operands: ir_operand[]}

const code_to_instructions = (code:Record<string, ir_instruction[]>) => {
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

let instructions = code_to_instructions({
    main: [
        {operation: OP.CALL, operands:[{tag:"label", name:"f1"}]},
    ],
    f1: [
        {operation: OP.PUSH, operands:[R1]},
        {operation: OP.BR, operands: [R0, {tag:"label", name:"main"}, {tag:"label", name:"f2"}]},
        {operation: OP.CALL, operands:[{tag:"label", name:"f2"}]},
        {operation: OP.CALL, operands:[imm(13)]},
        {operation: OP.CALL, operands:[R1]},
        {operation: OP.PUSH, operands:[R1]}
    ],
    f2: [
        {operation: OP.SUB, operands:[R1]}
    ]
})

// instructions.map(instruction_to_string).forEach(x => console.log(x))

