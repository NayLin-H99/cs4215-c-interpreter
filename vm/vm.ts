/*
This file contains the core logic of the VM. Should only export run_vm function
*/

import {
    OP, operand, imm, REGISTER, register, ind, instruction,
    R0, R1, R2, R3, PC, BP, SP, RA
} from './datastructures'

const op_to_string = (op : OP) => op.toLowerCase()

const imm_to_string = (imm : imm) => imm.immediate.toString()
const register_to_string = (r : register) => 
    r.reg === REGISTER.R0 ? "R0" : 
    r.reg === REGISTER.R1 ? "R1" : 
    r.reg === REGISTER.R2 ? "R2" : 
    r.reg === REGISTER.R3 ? "R3" : 
    r.reg === REGISTER.PC ? "PC" : 
    r.reg === REGISTER.BP ? "BP" : 
    r.reg === REGISTER.SP ? "SP" : 
    r.reg === REGISTER.RA ? "RA" : "UNSUPPORTED REGISTER"

const ind_to_string = (ind : ind) => 
    `[${register_to_string(ind.reg)} + ${imm_to_string(ind.displacement)}]`

const operand_to_string = (operand : operand) => 
    operand.tag === "imm" ? imm_to_string(operand) : 
    operand.tag === "reg" ? register_to_string(operand) :
    operand.tag === "ind" ? ind_to_string(operand) : "UNSUPPORTED OPERAND"

export const instruction_to_string = (instr : instruction) =>
    op_to_string(instr.operation) + " " + instr.operands.map(operand_to_string).join(",")


const REGISTER_COUNT = 8

const WORD_SIZE = 8

const TEXT_SIZE = 100
const HEAP_SIZE = 1000
const STACK_SIZE = 1000


// .text .heap .stack same size (might want to custom it later)
// for now .text lives outside of memory
const MEMORY_SIZE = TEXT_SIZE + HEAP_SIZE + STACK_SIZE
const MEMORY_BOTTOM = MEMORY_SIZE - 1
const STACK_TOP = MEMORY_BOTTOM - STACK_SIZE

type machine = {
    registers : BigInt64Array
    memory: ArrayBuffer
    builtins: object
}

let machine : machine = {
    registers : new BigInt64Array(REGISTER_COUNT).fill(0n),
    memory: new ArrayBuffer(MEMORY_SIZE * WORD_SIZE),
    builtins : {}
}

function read_word(address: bigint | number) {
    const view = new DataView(machine.memory)
    return view.getBigInt64(Number(address))
}

function write_word(address: bigint | number, value: bigint | number) {
    const view = new DataView(machine.memory)
    view.setBigInt64(Number(address), BigInt(value))
}

const get_address_type = (address: bigint | number) => 
    address < 0 ? "invalid" :
    address < TEXT_SIZE * WORD_SIZE ? "text" :
    address < (TEXT_SIZE + HEAP_SIZE) * WORD_SIZE ? "heap" :
    address < (TEXT_SIZE + HEAP_SIZE + STACK_SIZE) * WORD_SIZE ? "stack" : "invalid"

function get_operand_value(operand : operand) : bigint {
    switch (operand.tag) {
        case "imm": return operand.immediate
        case "reg": return machine.registers[operand.reg]
        case "ind": return read_word(get_operand_value(operand.reg) + get_operand_value(operand.displacement))
    }
}

function set_operand_value(operand : operand, value : bigint) : void {
    switch(operand.tag) {
        case "imm": throw Error("Immediates has no memory storage")
        case "reg": machine.registers[operand.reg] = value; break;
        case "ind": write_word(get_operand_value(operand.reg) + get_operand_value(operand.displacement), value); break;
    }
}

function initialize_machine(instrs: instruction[]) { 
    if (instrs.length > TEXT_SIZE) {
        throw Error("Instruction size larger than allocated text size")
    }

    // map instrs to text segment
    instrs.forEach((_, idx) => {
        write_word(idx*8, idx)
    })

    set_operand_value(SP, BigInt(MEMORY_BOTTOM * 8))
    set_operand_value(BP, BigInt(MEMORY_BOTTOM * 8))
}

type binop_fn_ty = (a:bigint, b:bigint) => bigint

function apply_binop(fn : binop_fn_ty, instr : instruction) {
    const dst_op = instr.operands[0]
    const op1 = instr.operands[1]
    const op2 = instr.operands[2]
    const value = fn(get_operand_value(op1), get_operand_value(op2))
    set_operand_value(dst_op, value)
}

let microcode : {[key in OP] : (instr : instruction)=>void} = {
    ADD: instr => {
        const fn = (a : bigint, b : bigint) => a + b
        apply_binop(fn, instr)
    },
    SUB: instr => {
        const fn = (a : bigint, b : bigint) => a - b
        apply_binop(fn, instr)
    },
    MULT: instr => {
        const fn = (a : bigint, b : bigint) => a * b
        apply_binop(fn, instr)
    },
    DIV: instr => {
        const fn = (a : bigint, b : bigint) => a / b
        apply_binop(fn, instr)
    },
    MOD: instr => {
        const fn = (a : bigint, b : bigint) => a % b
        apply_binop(fn, instr)
    },
    GT: instr => {
        const fn = (a : bigint, b : bigint) => a > b ? 1n : 0n
        apply_binop(fn, instr)
    },
    GE: instr => {
        const fn = (a : bigint, b : bigint)  => a >= b ? 1n : 0n
        apply_binop(fn, instr)
    },
    LE: instr => {
        const fn = (a : bigint, b : bigint)  => a <= b ? 1n : 0n
        apply_binop(fn, instr)
    },
    LT: instr => {
        const fn = (a : bigint, b : bigint)  => a < b ? 1n : 0n
        apply_binop(fn, instr)
    },
    NE: instr => {
        const fn = (a : bigint, b : bigint)  => a !== b ? 1n : 0n
        apply_binop(fn, instr)
    },

    EQ: instr => {
        const fn = (a : bigint, b : bigint)  => a === b ? 1n : 0n
        apply_binop(fn, instr)
    },

    PUSH: instr => {
        if (get_address_type(get_operand_value(SP)) !== "stack") {
            throw Error("Reached stack top " + get_operand_value(SP))
        }
        const value = get_operand_value(instr.operands[0])
        set_operand_value(ind(SP, imm(0n)), value)
        machine.registers[REGISTER.SP] -= 8n
    },
    POP: instr => {
        machine.registers[REGISTER.SP] += 8n
        if (get_address_type(get_operand_value(SP)) !== "stack") {
            throw Error("Reached stack bottom " + get_operand_value(SP))
        }
        const v = get_operand_value(ind(SP, imm(0n)))
        set_operand_value(instr.operands[0], v)
    },
    MOV: instr => {
        const dst_op = instr.operands[0]
        const src_op = instr.operands[1]
        set_operand_value(dst_op, get_operand_value(src_op))
    },
    BR: instr => {
        if (instr.operands.length > 1) {
            // conditional branching
            const is_true =  get_operand_value(instr.operands[0]) === 1n
            if (is_true) {
                set_operand_value(PC, get_operand_value(instr.operands[1]))
            } else {
                set_operand_value(PC, get_operand_value(instr.operands[2]))
            }
        } else if (instr.operands.length === 1) {
            // unconditional branch
            set_operand_value(PC, get_operand_value(instr.operands[0]))
        }
    },
    DONE: instr => {},
}

let instrs = [
    {operation: OP.MOV, operands: [R0, imm(0n)]},
    {operation: OP.MOV, operands: [R1, imm(0n)]},
    {operation: OP.LT, operands: [R2, R1, imm(100n)]},
    {operation: OP.BR, operands: [R2, imm(32n), imm(56n)]},
    {operation: OP.ADD, operands: [R1, R1, imm(1n)]},
    {operation: OP.ADD, operands: [R0, R1, R0]},
    {operation: OP.BR, operands: [imm(16n)]},
    {operation: OP.PUSH, operands: [imm(11n)]},
    {operation: OP.PUSH, operands: [imm(12n)]},
    {operation: OP.PUSH, operands: [imm(13n)]},
    {operation: OP.POP, operands: [R3]},
    {operation: OP.DONE, operands: []},
]

export const run_vm = (instrs : instruction[]) => {
    instrs.forEach((x, i) => {
        console.log(`${i * 8} : ${instruction_to_string(x)}`)
    })
    initialize_machine(instrs);
    let op = instrs[Number(get_operand_value(PC) / 8n)]
    while(op.operation !== OP.DONE) {
        op = instrs[Number(machine.registers[REGISTER.PC]) / 8];
        machine.registers[REGISTER.PC] += 8n
        // console.log(instruction_to_string(op))
        microcode[op.operation](op)
    }
}


function print_machine() {
    console.log(machine.registers)
    const view = new DataView(machine.memory)
    for (let i=0; i<MEMORY_SIZE;i++){
        if (view.getBigInt64(i*8) != 0n)
            console.log(i*8 + ":" + view.getBigInt64(i * 8))
    }
}

run_vm(instrs)
print_machine()


