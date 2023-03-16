import { enter_block, exit_block, rvalue, address_of, assign_variable, declare_variable, deref, get_var_addr, init_memory, lvalue, operand, OS, read_word, get_var_value } from "./memory"

const apply_binop : Record<string, Function> = {
    // ================= ARITHMETIC =================
    "+" : (o1:operand, o2:operand) => opr_to_value(o1) + opr_to_value(o2),
    "*" : (o1:operand, o2:operand) => opr_to_value(o1) * opr_to_value(o2),
    "/" : (o1:operand, o2:operand) => opr_to_value(o1) / opr_to_value(o2),
    "-" : (o1:operand, o2:operand) => opr_to_value(o1) - opr_to_value(o2),
    "%" : (o1:operand, o2:operand) => opr_to_value(o1) % opr_to_value(o2),
    // ================= LOGIC =================
    "==" : (o1:operand, o2:operand) => opr_to_value(o1) == opr_to_value(o2) ? 1 : 0,
    "!=" : (o1:operand, o2:operand) => opr_to_value(o1) != opr_to_value(o2) ? 1 : 0,
    ">" : (o1:operand, o2:operand) => opr_to_value(o1) > opr_to_value(o2) ? 1 : 0,
    ">=" : (o1:operand, o2:operand) => opr_to_value(o1) >= opr_to_value(o2) ? 1 : 0,
    "<" : (o1:operand, o2:operand) => opr_to_value(o1) < opr_to_value(o2) ? 1 : 0,
    "<=" : (o1:operand, o2:operand) => opr_to_value(o1) <= opr_to_value(o2) ? 1 : 0,
}

const pop = (stack:operand[]) : operand =>  {
    const result = stack.pop();
    if (result === undefined) throw Error("empty stack")
    return result
}

const microcode : Record<string, Function> =  {
    // PUSH : (instr:any) => OS.push({
    //     tag: "rvalue",
    //     value: instr.value
    // }),
    POP : (instr:any) => OS.pop(),
    LDC : (instr:any) => {
        OS.push(rvalue(instr.value))
    },
    LDS : (instr:any) => {
        OS.push(lvalue(get_var_addr(instr.name)))
    },

    // load the value of a symbolic instead of symbol onto stack
    // useful for postfix increments
    // i++ => LDV i; LDS i; COPY; LDC 1; BINOP +; ASSIGN; POP;
    // if first LDV is LDS, then i will be incremented value rather than preincremented.
    LDV : (instr:any) => {
        OS.push(rvalue(get_var_value(instr.name)))
    },

    DECL: (instr:any) => {
        const {name, ty} = instr.var;
        const addr = declare_variable(name, ty)
        OS.push(lvalue(addr))
    },

    ASSIGN: (instr:any) => {
        const val_op = pop(OS);
        const var_op = pop(OS);
        assign_variable(var_op, val_op);
        OS.push(var_op)
    },

    // make another copy of what's top of the stack
    // very useful for self assignments for cases where lhs is not id
    // e1 += e2 ==>  compile(e1); copy; compile(e2); binop +; assign
    COPY: (instr:any) => {
        const t = pop(OS)
        OS.push(t)
        OS.push(t)
    },

    BINOP: (instr:any) => {
        // o1 (op) o2 ==> push o1; push o2; binop op;
        // [ o2 ]
        // [ o1 ]
        // pop in reverse order for non-commutative ops
        const o2 = pop(OS)
        const o1= pop(OS)
        const op = instr.op
        const result = apply_binop[op](o1, o2)
        // default to non-float operations.
        OS.push(rvalue(instr.isFloat ? result : parseInt(result)))
    },

    // Branches use relative addressing so REPL can work
    BR: (instr:any) => {
        PC--; // reset the PC to current instruction. 
        const {true_branch, false_branch} = instr
        if (true_branch && false_branch)
        {
            PC += opr_to_value(pop(OS)) ?  true_branch : false_branch
        } else {
            PC += instr.jmp
        }
    },

    ENTER_BLK: (instr:any) => enter_block(),
    EXIT_BLK: (instr:any) => exit_block(),

    // pushes the address of stack top object
    ADDR: (instr:any) => {
        // if previous instruction was *, do nothing
        // specification c11 6.5.3.2.3
        const opr = pop(OS)
        if (opr?.tag !== "lvalue") throw Error("trying to access address of rvalue")
        OS.push(address_of(opr))
    },
    // pushes the value of what the current address points at
    DEREF: (instr:any) => {
        // if next instruction is & , do nothing
        // specification c11 6.5.3.2.3
        const opr = pop(OS)
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

export function run_vm(instrs:any[], debug:boolean = false) {
    
    let instr = instrs[PC]
    while (instr.tag != "DONE") {
        instr = instrs[PC]
        PC++;
        microcode[instr.tag](instr)
        if (debug) {
            console.log(instr)
            print_os()
        }
    }
    const result = OS.pop();
    if (debug) print_os();
    return result === undefined ? 0 : opr_to_value(result)
}

export function test_vm(instrs:any[], expected:number) {
    init_vm(instrs)
    const result = run_vm(instrs)
    if (result === expected) {
        console.log("Test Success")
        return
    }
    throw Error("Test Failed, expected " + expected + " Got " + result)
}
