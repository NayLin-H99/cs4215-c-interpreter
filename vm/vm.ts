
enum REGISTER { 
    R0,
    R1,
    R2,
    R3,
    PC, // instruction pointer
    BP, // Stack base 
    SP, // Stack top
    RA, // Return value
}

type register = { 
    tag: "reg"
    reg: REGISTER
}

function register(reg : REGISTER) : register {
    return {
        tag: "reg",
        reg: reg
    }
}

type imm = {
    tag: "imm"
    immediate: bigint
}

function imm(n : bigint) : imm {
    return {
        tag: "imm",
        immediate: n
    }
}

type ind = {
    tag: "ind"
    reg: register
    displacement: imm
}

function ind(reg: register, displacement : imm) : ind {
    return {
        tag: "ind",
        reg: reg,
        displacement: displacement,
    }
}

type operand = register | imm | ind


enum OP {
    /* BINOP */
    ADD = "ADD",
    GT = "GT",
    GE = "GE",
    LT = "LT",
    LE = "LE",
    EQ = "EQ",
    NE = "NE",

    /* CONTROL FLOW */
    MOV = 'MOV',
    BR = 'BR',
    PUSH = 'PUSH',
    POP = 'POP',
    DONE = 'DONE'
}

type instruction = {
    operation: OP
    operands: operand[]
}

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

const instruction_to_string = (instr : instruction) =>
    op_to_string(instr.operation) + " " + instr.operands.map(operand_to_string).join(",")


const REGISTER_COUNT = 8
const R0 = register(REGISTER.R0)
const R1 = register(REGISTER.R1)
const R2 = register(REGISTER.R2)
const R3 = register(REGISTER.R3)
const PC = register(REGISTER.PC)
const BP = register(REGISTER.BP)
const SP = register(REGISTER.SP)
const RA = register(REGISTER.RA)

const WORD_SIZE = 8

const SEGMENT_SIZE = 10
// .text .heap .stack same size (might want to custom it later)
// for now .text lives outside of memory
const MEMORY_SIZE = SEGMENT_SIZE * 3
const MEMORY_BOTTOM = MEMORY_SIZE
const STACK_TOP = MEMORY_BOTTOM - SEGMENT_SIZE

type machine = {
    registers : BigInt64Array
    memory: BigInt64Array
    builtins: object
}

let machine : machine = {
    registers : new BigInt64Array(REGISTER_COUNT).fill(0n),
    memory: new BigInt64Array(MEMORY_SIZE).fill(0n),
    builtins : {}
}

function get_operand_value(operand : operand) : bigint {
    switch (operand.tag) {
        case "imm": return operand.immediate
        case "reg": return machine.registers[operand.reg]
        case "ind": return machine.memory[Number(get_operand_value(operand.reg) + get_operand_value(operand.displacement))]
    }
}

function set_operand_value(operand : operand, value : bigint) : void {
    switch(operand.tag) {
        case "imm": throw Error("Immediates has no memory storage")
        case "reg": machine.registers[operand.reg] = value; break;
        case "ind": machine.memory[Number(get_operand_value(operand.reg) + get_operand_value(operand.displacement))] = value; break;
    }
}

function initialize_machine() { 
    set_operand_value(SP, BigInt(MEMORY_BOTTOM))
    set_operand_value(BP, BigInt(MEMORY_BOTTOM))
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
        if (get_operand_value(SP) <= STACK_TOP) {
            throw Error("Reached stack top")
        }
        const value = get_operand_value(instr.operands[0])
        set_operand_value(ind(SP, imm(0n)), value)
        machine.registers[REGISTER.SP]--
    },
    POP: instr => {
        machine.registers[REGISTER.SP]++
        if (get_operand_value(SP) > MEMORY_BOTTOM) {
            throw Error("Reached stack bottom")
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

initialize_machine();

let instrs = [
    {operation: OP.MOV, operands: [R0, imm(0n)]},
    {operation: OP.MOV, operands: [R1, imm(0n)]},
    {operation: OP.LT, operands: [R2, R1, imm(100n)]},
    {operation: OP.BR, operands: [R2, imm(4n), imm(7n)]},
    {operation: OP.ADD, operands: [R1, R1, imm(1n)]},
    {operation: OP.ADD, operands: [R0, R1, R0]},
    {operation: OP.BR, operands: [imm(2n)]},
    {operation: OP.DONE, operands: []},
]

const run = () => {
    let op = instrs[Number(get_operand_value(PC))]
    while(op.operation !== OP.DONE) {
        // console.log(instruction_to_string(op))
        microcode[op.operation](op)
        op = instrs[Number(machine.registers[REGISTER.PC]++)];
    }
}


instrs.forEach((x, i) => {
    console.log(`${i} : ${instruction_to_string(x)}`)
})
run()
console.log(machine)

const view = new DataView(machine.registers)
console.log(view.getBigInt64(0))

