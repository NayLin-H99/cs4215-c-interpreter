"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OP = exports.ind = exports.imm = exports.register = exports.REGISTER = void 0;
var REGISTER;
(function (REGISTER) {
    REGISTER[REGISTER["R0"] = 0] = "R0";
    REGISTER[REGISTER["R1"] = 1] = "R1";
    REGISTER[REGISTER["R2"] = 2] = "R2";
    REGISTER[REGISTER["R3"] = 3] = "R3";
    REGISTER[REGISTER["PC"] = 4] = "PC";
    REGISTER[REGISTER["BP"] = 5] = "BP";
    REGISTER[REGISTER["SP"] = 6] = "SP";
    REGISTER[REGISTER["RA"] = 7] = "RA";
})(REGISTER = exports.REGISTER || (exports.REGISTER = {}));
function register(reg) {
    return {
        tag: "reg",
        reg: reg
    };
}
exports.register = register;
function imm(n) {
    return {
        tag: "imm",
        immediate: n
    };
}
exports.imm = imm;
function ind(reg, displacement) {
    return {
        tag: "ind",
        reg: reg,
        displacement: displacement,
    };
}
exports.ind = ind;
var OP;
(function (OP) {
    OP["ADD"] = "ADD";
    OP["GT"] = "GT";
    OP["GE"] = "GE";
    OP["LT"] = "LT";
    OP["LE"] = "LE";
    OP["EQ"] = "EQ";
    OP["NE"] = "NE";
    OP["MOV"] = "MOV";
    OP["BR"] = "BR";
    OP["PUSH"] = "PUSH";
    OP["POP"] = "POP";
    OP["DONE"] = "DONE";
})(OP = exports.OP || (exports.OP = {}));
const op_to_string = (op) => op.toLowerCase();
const imm_to_string = (imm) => imm.immediate.toString();
const register_to_string = (r) => r.reg === REGISTER.R0 ? "R0" :
    r.reg === REGISTER.R1 ? "R1" :
        r.reg === REGISTER.R2 ? "R2" :
            r.reg === REGISTER.R3 ? "R3" :
                r.reg === REGISTER.PC ? "PC" :
                    r.reg === REGISTER.BP ? "BP" :
                        r.reg === REGISTER.SP ? "SP" :
                            r.reg === REGISTER.RA ? "RA" : "UNSUPPORTED REGISTER";
const ind_to_string = (ind) => `[${register_to_string(ind.reg)} + ${imm_to_string(ind.displacement)}]`;
const operand_to_string = (operand) => operand.tag === "imm" ? imm_to_string(operand) :
    operand.tag === "reg" ? register_to_string(operand) :
        operand.tag === "ind" ? ind_to_string(operand) : "UNSUPPORTED OPERAND";
const instruction_to_string = (instr) => op_to_string(instr.operation) + " " + instr.operands.map(operand_to_string).join(",");
const REGISTER_COUNT = 8;
const R0 = register(REGISTER.R0);
const R1 = register(REGISTER.R1);
const R2 = register(REGISTER.R2);
const R3 = register(REGISTER.R3);
const PC = register(REGISTER.PC);
const BP = register(REGISTER.BP);
const SP = register(REGISTER.SP);
const RA = register(REGISTER.RA);
const WORD_SIZE = 8;
const SEGMENT_SIZE = 10;
const MEMORY_SIZE = SEGMENT_SIZE * 3;
const MEMORY_BOTTOM = MEMORY_SIZE - 1;
const STACK_TOP = MEMORY_BOTTOM - SEGMENT_SIZE;
let machine = {
    registers: new BigInt64Array(REGISTER_COUNT).fill(0n),
    memory: new ArrayBuffer(MEMORY_SIZE * WORD_SIZE),
    builtins: {}
};
function read_word(address) {
    const view = new DataView(machine.memory);
    return view.getBigInt64(Number(address));
}
function write_word(address, value) {
    const view = new DataView(machine.memory);
    view.setBigInt64(Number(address), value);
}
function get_operand_value(operand) {
    switch (operand.tag) {
        case "imm": return operand.immediate;
        case "reg": return machine.registers[operand.reg];
        case "ind": return read_word(get_operand_value(operand.reg) + get_operand_value(operand.displacement));
    }
}
function set_operand_value(operand, value) {
    switch (operand.tag) {
        case "imm": throw Error("Immediates has no memory storage");
        case "reg":
            machine.registers[operand.reg] = value;
            break;
        case "ind":
            write_word(get_operand_value(operand.reg) + get_operand_value(operand.displacement), value);
            break;
    }
}
function initialize_machine() {
    set_operand_value(SP, BigInt(MEMORY_BOTTOM * 8));
    set_operand_value(BP, BigInt(MEMORY_BOTTOM * 8));
}
function apply_binop(fn, instr) {
    const dst_op = instr.operands[0];
    const op1 = instr.operands[1];
    const op2 = instr.operands[2];
    const value = fn(get_operand_value(op1), get_operand_value(op2));
    set_operand_value(dst_op, value);
}
let microcode = {
    ADD: instr => {
        const fn = (a, b) => a + b;
        apply_binop(fn, instr);
    },
    GT: instr => {
        const fn = (a, b) => a > b ? 1n : 0n;
        apply_binop(fn, instr);
    },
    GE: instr => {
        const fn = (a, b) => a >= b ? 1n : 0n;
        apply_binop(fn, instr);
    },
    LE: instr => {
        const fn = (a, b) => a <= b ? 1n : 0n;
        apply_binop(fn, instr);
    },
    LT: instr => {
        const fn = (a, b) => a < b ? 1n : 0n;
        apply_binop(fn, instr);
    },
    NE: instr => {
        const fn = (a, b) => a !== b ? 1n : 0n;
        apply_binop(fn, instr);
    },
    EQ: instr => {
        const fn = (a, b) => a === b ? 1n : 0n;
        apply_binop(fn, instr);
    },
    PUSH: instr => {
        if (get_operand_value(SP) <= STACK_TOP * 8) {
            throw Error("Reached stack top");
        }
        const value = get_operand_value(instr.operands[0]);
        set_operand_value(ind(SP, imm(0n)), value);
        machine.registers[REGISTER.SP] -= 8n;
    },
    POP: instr => {
        machine.registers[REGISTER.SP] += 8n;
        if (get_operand_value(SP) > MEMORY_BOTTOM * 8) {
            throw Error("Reached stack bottom");
        }
        const v = get_operand_value(ind(SP, imm(0n)));
        set_operand_value(instr.operands[0], v);
    },
    MOV: instr => {
        const dst_op = instr.operands[0];
        const src_op = instr.operands[1];
        set_operand_value(dst_op, get_operand_value(src_op));
    },
    BR: instr => {
        if (instr.operands.length > 1) {
            const is_true = get_operand_value(instr.operands[0]) === 1n;
            if (is_true) {
                set_operand_value(PC, get_operand_value(instr.operands[1]));
            }
            else {
                set_operand_value(PC, get_operand_value(instr.operands[2]));
            }
        }
        else if (instr.operands.length === 1) {
            set_operand_value(PC, get_operand_value(instr.operands[0]));
        }
    },
    DONE: instr => { },
};
initialize_machine();
let instrs = [
    { operation: OP.MOV, operands: [R0, imm(0n)] },
    { operation: OP.MOV, operands: [R1, imm(0n)] },
    { operation: OP.LT, operands: [R2, R1, imm(100n)] },
    { operation: OP.BR, operands: [R2, imm(4n), imm(7n)] },
    { operation: OP.ADD, operands: [R1, R1, imm(1n)] },
    { operation: OP.ADD, operands: [R0, R1, R0] },
    { operation: OP.BR, operands: [imm(2n)] },
    { operation: OP.PUSH, operands: [imm(11n)] },
    { operation: OP.PUSH, operands: [imm(12n)] },
    { operation: OP.PUSH, operands: [imm(13n)] },
    { operation: OP.POP, operands: [R3] },
    { operation: OP.DONE, operands: [] },
];
const run = () => {
    let op = instrs[Number(get_operand_value(PC))];
    while (op.operation !== OP.DONE) {
        microcode[op.operation](op);
        op = instrs[Number(machine.registers[REGISTER.PC]++)];
    }
};
function print_machine() {
    console.log(machine.registers);
    const view = new DataView(machine.memory);
    for (let i = 0; i < MEMORY_SIZE; i++) {
        console.log(i * 8 + ":" + view.getBigInt64(i * 8));
    }
}
instrs.forEach((x, i) => {
    console.log(`${i} : ${instruction_to_string(x)}`);
});
run();
print_machine();
//# sourceMappingURL=vm.js.map