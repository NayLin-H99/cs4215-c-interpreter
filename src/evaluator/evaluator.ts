import { int, ptr } from "../compiler/typesystem"
import { address_of, assign_variable, declare_variable, deref, get_var_addr, init_memory, operand, OS, read_word } from "./memory"


let running_code = []

const microcode : Record<string, Function> =  {
    // PUSH : (instr:any) => OS.push({
    //     tag: "rvalue",
    //     value: instr.value
    // }),
    POP : (instr:any) => OS.pop(),
    LDC : (instr:any) => {
        OS.push({
            tag: "rvalue",
            value: instr.value
        })
    },
    LDS : (instr:any) => {
        OS.push({
            tag: "lvalue",
            value: get_var_addr(instr.name)
        })
    },

    DECL: (instr:any) => {
        const {name, ty} = instr.var;
        const addr = declare_variable(name, ty)
        OS.push({
            tag: "lvalue",
            value: addr
        })
    },

    ASSIGN: (instr:any) => {
        const val_op = OS.pop();
        const var_op = OS.pop();
        if (!val_op || !var_op) throw Error("popped empty stack")
        assign_variable(var_op, val_op);
        OS.push(var_op)
    },

    // pushes the address of stack top object
    ADDR: (instr:any) => {
        // if previous instruction was *, do nothing
        // specification c11 6.5.3.2.3
        const opr = OS.pop()
        if (opr?.tag !== "lvalue") throw Error("trying to access address of rvalue")
        OS.push(address_of(opr))
    },
    // pushes the value of what the current address points at
    DEREF: (instr:any) => {
        // if next instruction is & , do nothing
        // specification c11 6.5.3.2.3
        const opr = OS.pop();
        if (opr === undefined) throw Error("empty stack")
        OS.push(deref(opr))
    },

    DONE: (instr:any) => {}
}


let PC = 0;

function init_vm(instrs:any[]) {
    init_memory();
    PC = 0;
}

const opr_to_value = (opr: operand) => 
    opr.tag === "lvalue" ? read_word(opr.value) : opr.value

function print_os() {
    console.log(OS.map(opr_to_value))
}

function run_vm(instrs:any[]) {
    init_vm(instrs)
    let instr = instrs[PC]
    while (instr.tag != "DONE") {
        instr = instrs[PC]
        
        PC++;
        microcode[instr.tag](instr)
        console.log(instr)
        print_os()
    }
    const result = OS.pop();
    print_os()
    return result === undefined ? 0 : opr_to_value(result)
}

let tc = [
    // int v1 = 10;
    {tag: "DECL", var: { name: "v1", ty: int }},
    {tag: "LDC", value: 10},
    {tag: "ASSIGN"},
    {tag: "POP"},

    // int v2 = 20
    {tag: "DECL", var: { name: "v2", ty: int }},
    {tag: "LDC", value: 20},
    {tag: "ASSIGN"},
    {tag: "POP"},
    
    // int *ap = &v1;
    {tag: "DECL", var: { name: "ap", ty: ptr(int) }},
    {tag: "LDS", name: "v1"},
    {tag: "ADDR"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    // int **app = &ap;
    {tag: "DECL", var: { name: "app", ty: ptr(ptr(int)) }},
    {tag: "LDS", name: "ap"},
    {tag: "ADDR"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    // int c = **app
    {tag: "DECL", var: { name: "c", ty: ptr(ptr(int)) }},
    {tag: "LDS", name: "app"},
    {tag: "DEREF"},
    {tag: "DEREF"},
    {tag: "ASSIGN"},
    {tag: "POP"},


    // ap = &v2;
    {tag: "LDS", name: "ap"},
    {tag: "LDS", name: "v2"},
    {tag: "ADDR"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    {tag: "LDS", name: "app"},
    {tag: "DEREF"},
    {tag: "DEREF"},

    {tag: "DONE"}
]

console.log(run_vm(tc))



