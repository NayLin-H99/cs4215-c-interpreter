
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
    immediate: number
}

function imm(n : number) : imm {
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

const imm_to_string = (imm : imm) => JSON.stringify(imm.immediate)
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

/* FLAGS */
const ZF = 0;
const OF = 1;
const SF = 2;

type machine = {
    registers : number[]
    memory: number[]
    flags: number[]
    builtins: object
}

let machine : machine = {
    registers : new Array(REGISTER_COUNT).fill(0),
    memory: new Array(MEMORY_SIZE).fill(0),
    flags: new Array(3).fill(0),
    builtins : {}
}

function get_operand_value(operand : operand) : number {
    switch (operand.tag) {
        case "imm": return operand.immediate
        case "reg": return machine.registers[operand.reg]
        case "ind": return machine.memory[get_operand_value(operand.reg) + get_operand_value(operand.displacement)]
    }
}

function set_operand_value(operand : operand, value : number) : void {
    switch(operand.tag) {
        case "imm": throw Error("Immediates has no memory storage")
        case "reg": machine.registers[operand.reg] = value; break;
        case "ind": machine.memory[get_operand_value(operand.reg) + get_operand_value(operand.displacement)] = value; break;
    }
}

function get_reg(reg : register) : number {
    return get_operand_value(reg)
}

function initialize_machine() { 
    machine.registers[REGISTER.SP] = MEMORY_BOTTOM
    machine.registers[REGISTER.BP] = MEMORY_BOTTOM
}

let microcode : {[key in OP] : (instr : instruction)=>void} = {
    ADD: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        set_operand_value(dst_op, get_operand_value(op1) + get_operand_value(op2))
    },
    GT: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        const value = get_operand_value(op1) > get_operand_value(op2) ? 1 : 0
        set_operand_value(dst_op, value)
    },
    GE: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        const value = get_operand_value(op1) >= get_operand_value(op2) ? 1 : 0
        set_operand_value(dst_op, value)
    },
    LE: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        const value = get_operand_value(op1) <= get_operand_value(op2) ? 1 : 0
        set_operand_value(dst_op, value)
    },
    LT: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        const value = get_operand_value(op1) < get_operand_value(op2) ? 1 : 0
        set_operand_value(dst_op, value)
    },
    NE: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        const value = get_operand_value(op1) != get_operand_value(op2) ? 1 : 0
        set_operand_value(dst_op, value)
    },

    EQ: instr => {
        const dst_op = instr.operands[0]
        const op1 = instr.operands[1]
        const op2 = instr.operands[2]
        const value = get_operand_value(op1) == get_operand_value(op2) ? 1 : 0
        set_operand_value(dst_op, value)
    },

    PUSH: instr => {
        if (get_reg(SP) <= STACK_TOP) {
            throw Error("Reached stack top")
        }
        machine.memory[get_reg(SP)] = get_operand_value(instr.operands[0])
        machine.registers[REGISTER.SP]--
    },
    POP: instr => {
        machine.registers[REGISTER.SP]++
        if (get_reg(SP) > MEMORY_BOTTOM) {
            throw Error("Reached stack bottom")
        }
        const v = machine.memory[get_reg(SP)]
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
            const is_true =  get_operand_value(instr.operands[0]) === 1
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
    {operation: OP.MOV, operands: [R0, imm(0)]},
    {operation: OP.MOV, operands: [R1, imm(0)]},
    {operation: OP.LT, operands: [R2, R1, imm(100)]},
    {operation: OP.BR, operands: [R2, imm(4), imm(7)]},
    {operation: OP.ADD, operands: [R1, R1, imm(1)]},
    {operation: OP.ADD, operands: [R0, R1, R0]},
    {operation: OP.BR, operands: [imm(2)]},
    {operation: OP.DONE, operands: []},
]

const run = () => {
    let op = instrs[get_reg(PC)]
    while(op.operation !== OP.DONE) {
        // console.log(instruction_to_string(op))
        microcode[op.operation](op)
        op = instrs[machine.registers[REGISTER.PC]++];
    }
}


instrs.forEach((x, i) => {
    console.log(`${i} : ${instruction_to_string(x)}`)
})
run()
console.log(machine)