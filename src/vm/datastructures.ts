/*
This file contains all the exportable datastructures for vm
*/

export enum REGISTER { 
    R0,
    R1,
    R2,
    R3,
    PC, // instruction pointer
    BP, // Stack base 
    SP, // Stack top
    RA, // Return value
}

export type register = { 
    tag: "reg"
    reg: REGISTER
}

export function register(reg : REGISTER) : register {
    return {
        tag: "reg",
        reg: reg
    }
}

export type imm = {
    tag: "imm"
    immediate: bigint
}

export function imm(n : bigint | number) : imm {
    return {
        tag: "imm",
        immediate: BigInt(n)
    }
}

export type ind = {
    tag: "ind"
    reg: register
    displacement: imm
    size: number
}

export function ind(reg: register, displacement : imm, size: number = 8) : ind {
    return {
        tag: "ind",
        reg: reg,
        displacement: displacement,
        size,
    }
}

export type operand = register | imm | ind


export enum OP {
    /* BINOP */
    ADD = "ADD",
    SUB = "SUB",
    MULT = "MULT",
    DIV = "DIV",
    MOD = "MOD",
    GT = "GT",
    GE = "GE",
    LT = "LT",
    LE = "LE",
    EQ = "EQ",
    NE = "NE",

    /* CONTROL FLOW */
    MOV = 'MOV',
    BR = 'BR',          // branch absolute. br r0, 8, 16 ==> if(r0) goto 8 else goto 16. br 8 ==> goto 8
    BRR = 'BRR',        // branch relative. brr r0, 8, 16 ==> if(r0) goto pc+8 else goto pc+16. brr 16 ==> goto pc+16
    PUSH = 'PUSH',
    POP = 'POP',

    CALL = 'CALL',
    RET  = 'RET',
    DONE = 'DONE'
}

export type instruction = {
    operation: OP
    operands: operand[]
}

export const
    R0 = register(REGISTER.R0),
    R1 = register(REGISTER.R1),
    R2 = register(REGISTER.R2),
    R3 = register(REGISTER.R3), 
    PC = register(REGISTER.PC), 
    BP = register(REGISTER.BP), 
    SP = register(REGISTER.SP), 
    RA = register(REGISTER.RA);