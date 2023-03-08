export declare enum REGISTER {
    R0 = 0,
    R1 = 1,
    R2 = 2,
    R3 = 3,
    PC = 4,
    BP = 5,
    SP = 6,
    RA = 7
}
export type register = {
    tag: "reg";
    reg: REGISTER;
};
export declare function register(reg: REGISTER): register;
export type imm = {
    tag: "imm";
    immediate: bigint;
};
export declare function imm(n: bigint): imm;
export type ind = {
    tag: "ind";
    reg: register;
    displacement: imm;
};
export declare function ind(reg: register, displacement: imm): ind;
export type operand = register | imm | ind;
export declare enum OP {
    ADD = "ADD",
    GT = "GT",
    GE = "GE",
    LT = "LT",
    LE = "LE",
    EQ = "EQ",
    NE = "NE",
    MOV = "MOV",
    BR = "BR",
    PUSH = "PUSH",
    POP = "POP",
    DONE = "DONE"
}
export type instruction = {
    operation: OP;
    operands: operand[];
};
