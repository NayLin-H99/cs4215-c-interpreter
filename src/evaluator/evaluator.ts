import { get_var, enter_block, exit_block, rvalue, address_of, assign_variable, declare_variable, deref, get_var_addr, init_memory, lvalue, operand, OS, read_word, get_var_value } from "./memory"
import { int, ty, get_ty_size } from "../compiler/typesystem"


// the only truth
const is_true = (n : number) => n > 0

const is_ptr = (ty : ty) => ty.typename === "pointer"

const apply_binop : Record<string, Function> = {
    // ================= ARITHMETIC =================
    "+" : (o1:operand, o2:operand) => opr_to_value(o1) + opr_to_value(o2),
    "*" : (o1:operand, o2:operand) => opr_to_value(o1) * opr_to_value(o2),
    "/" : (o1:operand, o2:operand) => opr_to_value(o1) / opr_to_value(o2),
    "-" : (o1:operand, o2:operand) => opr_to_value(o1) - opr_to_value(o2),
    "%" : (o1:operand, o2:operand) => opr_to_value(o1) % opr_to_value(o2),
    // ================= BITWISE =================
    ">>" : (o1:operand, o2:operand) => opr_to_value(o1) >> opr_to_value(o2),
    "<<" : (o1:operand, o2:operand) => opr_to_value(o1) << opr_to_value(o2),
    "&" : (o1:operand, o2:operand) => opr_to_value(o1) & opr_to_value(o2),
    "|" : (o1:operand, o2:operand) => opr_to_value(o1) | opr_to_value(o2),
    "^" : (o1:operand, o2:operand) => opr_to_value(o1) ^ opr_to_value(o2),

    // ================= LOGIC =================
    "==" : (o1:operand, o2:operand) => opr_to_value(o1) == opr_to_value(o2) ? 1 : 0,
    "!=" : (o1:operand, o2:operand) => opr_to_value(o1) != opr_to_value(o2) ? 1 : 0,
    ">" : (o1:operand, o2:operand) => opr_to_value(o1) > opr_to_value(o2) ? 1 : 0,
    ">=" : (o1:operand, o2:operand) => opr_to_value(o1) >= opr_to_value(o2) ? 1 : 0,
    "<" : (o1:operand, o2:operand) => opr_to_value(o1) < opr_to_value(o2) ? 1 : 0,
    "<=" : (o1:operand, o2:operand) => opr_to_value(o1) <= opr_to_value(o2) ? 1 : 0,
    "&&" : (o1:operand, o2:operand) => is_true(opr_to_value(o1)) && is_true(opr_to_value(o2)) ? 1 : 0,
    "||" : (o1:operand, o2:operand) => is_true(opr_to_value(o1)) || is_true(opr_to_value(o2)) ? 1 : 0,
}

const apply_unop : Record<string, Function> = { 
    "&" : (o1: operand) => {
        if (o1?.tag !== "lvalue") throw Error("trying to access address of rvalue")
        return address_of(o1)
    },
    "*" : deref,
    "!" : (o1: operand) => rvalue(!is_true(opr_to_value(o1)) ? 1 : 0, o1.ty),
    "~" : (o1: operand) => rvalue(~opr_to_value(o1), o1.ty),
    "-" : (o1: operand) => rvalue(opr_to_value(o1) * -1, o1.ty),
    "+" : (o1: operand) => rvalue(opr_to_value(o1), o1.ty),
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
        OS.push(rvalue(instr.value, int))
    },
    LDS : (instr:any) => {
        const v = get_var(instr.name)
        OS.push(lvalue(v.address, v.ty))
    },

    // load the value of a symbolic instead of symbol onto stack
    // useful for postfix increments
    // i++ => LDV i; LDS i; COPY; LDC 1; BINOP +; ASSIGN; POP;
    // if first LDV is LDS, then i will be incremented value rather than preincremented.
    LDV : (instr:any) => {
        const v = get_var(instr.name)
        OS.push(rvalue(get_var_value(instr.name), v.ty))
    },

    DECL: (instr:any) => {
        const {name, ty} = instr.var;
        const addr = declare_variable(name, ty)
        OS.push(lvalue(addr, ty))
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
        let o2 = pop(OS)
        let o1= pop(OS)
        const op = instr.op
        if (is_ptr(o1.ty) || is_ptr(o2.ty)) {
            // POINTER ARITHMETICS

            // Pointers can only add or minus
            if (op !== "-" && op !== "+") throw Error("Invalid binop for pointers")

            // If it's minus, first operand must be pointer
            if (op === "-" && !is_ptr(o1.ty)) throw Error("Invalid type of operand 1, expected ptr")

            
            // Handle PLUS
            if (op === "+" && !is_ptr(o2.ty) && o1.ty.typename === "pointer") {
                const v = opr_to_value(o1) + opr_to_value(o2) * get_ty_size(o1.ty.type)
                OS.push(rvalue(v, o1.ty))
                return;
            } else if (op === "+" && !is_ptr(o1.ty) && o2.ty.typename === "pointer") {
                const v = opr_to_value(o2) + opr_to_value(o1) * get_ty_size(o2.ty.type)
                OS.push(rvalue(v, o2.ty))
                return;
            } else if (op === "+") {
                throw Error("Invalid binop : adding 2 pointers")
            }

            // Can assume first operand is a pointer
            // If 2nd operand is a pointer, return diff
            
            if (op === "-" && is_ptr(o2.ty) ) {
                const v1 = opr_to_value(o1);
                const v2 = opr_to_value(o2);
                // Improvement (typesafety) : check if o1 and o2 has same type
                // just to make typescript happy so i can access type in o1
                if (o1.ty.typename !== "pointer") throw Error("should not happen")
                const size = get_ty_size(o1.ty.type)
                OS.push(rvalue(Math.floor((v1-v2)/size), int))
                return;
            } else {
                const size = get_ty_size(o1.ty)
                const v = opr_to_value(o1) - opr_to_value(o2) * size
                OS.push(rvalue(v, o1.ty))
                return;
            }
        }

        
        const result = apply_binop[op](o1, o2)
        // default to non-float operations.
        // use o1 for typing for now. TODO: FIX THIS
        OS.push(rvalue(instr.isFloat ? result : parseInt(result), o1.ty))
    },

    UNOP: (instr:any) => {
        const o = pop(OS)
        const op = instr.op
        const result = apply_unop[op](o)
        OS.push(result)
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
