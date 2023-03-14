/*
This file contains the core logic of the VM. Should only export run_vm function
*/

import { write } from 'fs'
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
    registers : BigUint64Array
    memory: ArrayBuffer
    builtins: object
}

let machine : machine = {
    registers : new BigUint64Array(REGISTER_COUNT).fill(0n),
    memory: new ArrayBuffer(MEMORY_SIZE * WORD_SIZE),
    builtins : {}
}

function read_memory(address: bigint | number, size: bigint = 8n) {
    const view = new DataView(machine.memory)
    return BigInt(size === 1n ? view.getUint8(Number(address)) : 
        size === 2n ? view.getUint16(Number(address), true) : 
        view.getBigUint64(Number(address), true))
}

function read_word(address: bigint | number) {
    return BigInt(read_memory(address))
}

function write_memory(address: bigint | number, value: bigint, size: bigint = 8n) {
    const mask = 
        size === 1n ? 0xffn :
        size === 2n ? 0xffffn : -1n;
    
    const view = new DataView(machine.memory)

    if (size === 8n) {
        view.setBigUint64(Number(address), value, true)
    } else if (size === 1n) {
        view.setUint8(Number(address), Number(value & mask))
    } else if (size === 2n) {
        view.setUint16(Number(address), Number(value & mask), true)
    } else {
        throw Error("unsupported write size")
    }
}

function write_word(address: bigint | number, value: bigint | number) {
    write_memory(address, BigInt(value))
}


const get_address_type = (address: bigint | number) => 
    address < 0 ? "invalid" :
    address < TEXT_SIZE * WORD_SIZE ? "text" :
    address < (TEXT_SIZE + HEAP_SIZE) * WORD_SIZE ? "heap" :
    address < (TEXT_SIZE + HEAP_SIZE + STACK_SIZE) * WORD_SIZE ? "stack" : "invalid"

function get_operand_value(operand : operand, size : bigint = 8n) : bigint {
    const mask = 
        size === 1n ? 0xffn :
        size === 2n ? 0xffffn : -1n;
    
    switch (operand.tag) {
        case "imm": return operand.immediate & mask
        case "reg": return machine.registers[operand.reg] & mask
        case "ind": return read_memory(get_operand_value(operand.reg) + get_operand_value(operand.displacement), size)
    }
}

const $ = get_operand_value

function set_operand_value(operand : operand, value : bigint, size : bigint = 8n) : void {
    const mask = 
        size === 1n ? 0xffn :
        size === 2n ? 0xffffn : -1n;
        
    switch(operand.tag) {
        case "imm": throw Error("Immediates has no memory storage")
        case "reg": machine.registers[operand.reg] = (machine.registers[operand.reg] & ~mask) | (value & mask); break;
        case "ind": write_memory($(operand.reg) + $(operand.displacement), value & mask, size); break;
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
    const value = fn($(op1), $(op2))
    set_operand_value(dst_op, value)
}

function vm_push(opr: operand) {
    if (get_address_type($(SP)) !== "stack") {
        throw Error("Reached stack top " + $(SP))
    }
    set_operand_value(ind(SP, imm(0n)), $(opr))
    machine.registers[REGISTER.SP] -= 8n
}

function vm_pop(opr: operand) {
    machine.registers[REGISTER.SP] += 8n
    if (get_address_type($(SP)) !== "stack") {
        throw Error("Reached stack bottom " + $(SP))
    }
    const v = $(ind(SP, imm(0n)))
    set_operand_value(opr, v)
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

    PUSH: instr => vm_push(instr.operands[0]),
    POP: instr => vm_pop(instr.operands[0]),
    MOV: instr => {
        // specified size of read
        if (instr.operands.length === 4) {
            const dst_size = $(instr.operands[0])
            const dst_op = instr.operands[1]
            const src_size = $(instr.operands[2])
            const src_op = instr.operands[3]
            set_operand_value(dst_op, $(src_op, src_size), dst_size)
        } else {
            const dst_op = instr.operands[0]
            const src_op = instr.operands[1]
            set_operand_value(dst_op, $(src_op))
        }
    },
    BR: instr => {
        if (instr.operands.length > 1) {
            // conditional branching
            const is_true =  $(instr.operands[0]) > 0n
            if (is_true) {
                set_operand_value(PC, $(instr.operands[1]))
            } else {
                set_operand_value(PC, $(instr.operands[2]))
            }
        } else if (instr.operands.length === 1) {
            // unconditional branch
            set_operand_value(PC, $(instr.operands[0]))
        }
    },
    BRR: instr => {
        set_operand_value(PC, $(PC) - 8n) // a hack to reset the pre-incremented value in machine
        if (instr.operands.length > 1) {
            const is_true = $(instr.operands[0]) > 0n 
            const offset = is_true ? $(instr.operands[1]) : $(instr.operands[2])
            set_operand_value(PC, $(PC) + offset)
        } else if (instr.operands.length === 1) {
            set_operand_value(PC, $(PC) + $(instr.operands[0]))
        }
    },
    CALL : instr => {
        const fn_address = $(instr.operands[0])
        vm_push(PC)
        vm_push(BP)
        set_operand_value(BP, $(SP))
        set_operand_value(PC, fn_address)
    },
    RET : instr => {
        set_operand_value(SP, $(BP))
        vm_pop(BP)
        vm_pop(PC)
    },
    DONE: instr => {},
}

let sum_of_100 = [
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
    {operation: OP.DONE, operands: [imm(0)]},
]

let sum_of_100_relative = [
    {operation: OP.MOV, operands: [R0, imm(0n)]},
    {operation: OP.MOV, operands: [R1, imm(0n)]},
    {operation: OP.LT, operands: [R2, R1, imm(100n)]},
    {operation: OP.BRR, operands: [R2, imm(8n), imm(32n)]},
    {operation: OP.ADD, operands: [R1, R1, imm(1n)]},
    {operation: OP.ADD, operands: [R0, R1, R0]},
    {operation: OP.BRR, operands: [imm(-32n)]},
    {operation: OP.PUSH, operands: [imm(11n)]},
    {operation: OP.PUSH, operands: [imm(12n)]},
    {operation: OP.PUSH, operands: [imm(13n)]},
    {operation: OP.POP, operands: [R3]},
    {operation: OP.DONE, operands: [imm(0)]},
]

export const run_vm = (instrs : instruction[], debug:boolean = false) => {
    instrs.forEach((x, i) => {
        console.log(`${i * 8} : ${instruction_to_string(x)}`)
    })
    initialize_machine(instrs);
    let op = instrs[Number($(PC) / 8n)]
    while(op.operation !== OP.DONE) {
        op = instrs[Number(machine.registers[REGISTER.PC]) / 8];
        machine.registers[REGISTER.PC] += 8n
        // console.log(instruction_to_string(op))
        microcode[op.operation](op)
    }
    // the first operand of DONE operation is the return value of the vm
    if(debug) print_machine();
    return ($(op.operands[0]))
}


function print_machine() {
    console.log("Registers:")
    for (let reg of machine.registers) {
        console.log(reg.toString(16))
    }
    const view = new DataView(machine.memory)
    console.log("memory:")
    for (let i=0; i<MEMORY_SIZE;i++){
        if (view.getBigUint64(i*8, true) != 0n)
            console.log(i*8 + ":" + view.getBigUint64(i * 8, true).toString(16))
    }
}



// let bit_fun_testcase = [
//     {operation: OP.MOV, operands: [R0, imm(0xdeadbeefcafebaben)]},
//     {operation: OP.MOV, operands: [imm(8), R1, imm(1), R0]},
//     {operation: OP.ADD, operands: [R1, R1, imm(1)]},
//     {operation: OP.MOV, operands: [imm(2), R0, imm(1), R1]},
//     {operation: OP.PUSH, operands: [R0]},
//     {operation: OP.MOV, operands: [imm(1), ind(BP, imm(0)), imm(1), imm(0x41)]},
//     {operation: OP.MOV, operands: [imm(1), ind(BP, imm(1)), imm(1), imm(0x41)]},
//     {operation: OP.MOV, operands: [imm(1), ind(BP, imm(2)), imm(1), imm(0x41)]},
//     {operation: OP.MOV, operands: [imm(1), ind(BP, imm(3)), imm(1), imm(0x41)]},
//     {operation: OP.MOV, operands: [imm(1), ind(BP, imm(4)), imm(1), imm(0x41)]},
//     {operation: OP.MOV, operands: [imm(1), ind(BP, imm(5)), imm(1), imm(0x41)]},
//     {operation: OP.MOV, operands: [imm(2), R3, imm(8), ind(BP, imm(0))]},
//     {operation: OP.DONE, operands: [R0]},
// ]

// run_vm(bit_fun_testcase)
// print_machine()


