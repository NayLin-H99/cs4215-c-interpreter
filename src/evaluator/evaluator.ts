import { allocate, get_var, enter_block, exit_block, rvalue, address_of, assign_variable, declare_variable, deref, init_memory, lvalue, operand, OS, read_as, get_var_value, declare_function, get_fdecl, enter_function, binds, exit_function, pop_env, free_mem } from "./memory"
import { int, ty, get_ty_size, tvoid, ptr } from "../compiler/typesystem"

export type instruction = {tag:string} & {[key in string]: any} 


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

let stdout_buf : string = ""

// allow usage of external printer
const create_builtin = (printer:Function) : Record<string, [Function, number, ty]> => ({
    malloc: [allocate, 1, ptr(tvoid)],
    print: [(x:any) => {
        const s = JSON.stringify(x)
        stdout_buf +=  s + '\n'
        printer(s)
    }, 1, tvoid],

    // simulate doing nothing. or else need to implement allocator logic
    free: [free_mem, 1, tvoid] 
})

let builtin = create_builtin(console.log)

const microcode : Record<string, Function> =  {
    // PUSH : (instr:any) => OS.push({
    //     tag: "rvalue",
    //     value: instr.value
    // }),
    POP : (instr:any) => OS.pop(),

    // POPS n frames from environemnt, used for loop exits
    POP_ENV: (instr:any) => {
        const {n} = instr
        if (n) pop_env(n)
    },

    CAST: (instr:any) => {
        let o = pop(OS)
        o.ty = instr.ty
        OS.push(o)
    },

    LDC : (instr:any) => {
        OS.push(rvalue(instr.value, int))
    },
    LDS : (instr:any) => {
        const v = get_var(instr.name)
        // if (v.ty.typename === "arr") {
        //     OS.push(rvalue(v.address, ptr(v.ty.ty)))
        // } else {
            OS.push(lvalue(v.address, v.ty))
        // }
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

    // Declaration of Function
    // {tag:"FUNCTION", ...}
    // {tag:"BR", jmp: END_OF_FUNCTION}
    // {tag:"ENTER_BLK"}
    // ...FUNCTION_BODY
    // {tag:"EXIT_BLK"}
    FUNCTION: (instr:any) => {
        const {fname, rty, params, param_ty} = instr
        const fn_addr = PC + 2
        declare_function(rty, fname, params, param_ty, fn_addr)
    },

    // Calling non-void function return value through top of stack after CALL.
    // Calling void function should not have value on top of stack
    // void f(){}; int i = f(); This should be caught in typesystem, but it is Undefined Behaviour in current VM.
    CALL: (instr:any) => {
        const {fname} = instr
        if (fname in builtin) {
            const [fn, n_args, rty] = builtin[fname]
            let args : any[] = []
            for (let i=0; i<n_args; i++) {
                args.push(opr_to_value(pop(OS)))
            }
            OS.push(rvalue(fn(...args), rty))
            return
        }

        // not built in
        const fdecl = get_fdecl(fname)
        // save environment context
        enter_function(PC)
        fdecl.params.forEach((p,i) => {
            let val_op = pop(OS)
            // decay val_op as arr is used as expression
            if (val_op.ty.typename === "arr") {
                val_op = rvalue(val_op.value, ptr(val_op.ty.ty))
            }

            const v = opr_to_value(val_op)

            const ty = fdecl.param_ty[i]
            binds(p, 
                ty.typename === "arr" ? ptr(ty.ty) : ty,  // decay array function param to pointer
                v)
        })
        PC = fdecl.address
    },
    
    RET: (instr:any) => {
        if (!instr.is_void) {
            const ret_val = pop(OS)
            // return value of function should be rvalue only
            OS.push(rvalue(opr_to_value(ret_val), ret_val.ty))
        }
        PC = exit_function()
    },

    ASSIGN: (instr:any) => {
        let val_op = pop(OS);

        // decay val_op as arr is used as expression
        if (val_op.ty.typename === "arr") {
            val_op = rvalue(val_op.value, ptr(val_op.ty.ty))
        }

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

        const LOGIC_OP = ["==", "!=", ">=", ">", "<=", "<", "&&", "||"]

        // if operand is array, decay them to qualified pointers
        if (o1.ty.typename === "arr") o1 = rvalue(o1.value, ptr(o1.ty.ty))
        if (o2.ty.typename === "arr") o2 = rvalue(o2.value, ptr(o2.ty.ty))


        if ((is_ptr(o1.ty) || is_ptr(o2.ty)) && !LOGIC_OP.includes(op)) {
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
        let o = pop(OS)
        const op = instr.op

        // C std 6.3.2.1.3
        // Except when it is the operand of the sizeof operator or the unary & operator, or is a
        // string literal used to initialize an array, an expression that has type ‘‘array of type’’ is
        // converted to an expression with type ‘‘pointer to type’’ that points to the initial element of
        // the array object and is not an lvalue. 
        if (o.ty.typename === "arr" && op != "&") o = rvalue(o.value, ptr(o.ty.ty))
        
        const result = apply_unop[op](o)
        OS.push(result)
    },

    // Branches use relative addressing so REPL can work
    BR: (instr:any) => {
        PC--; // reset the PC to current instruction. 
        const {true_branch, false_branch} = instr
        if (true_branch && false_branch)
        {
            PC += is_true(opr_to_value(pop(OS))) ?  true_branch : false_branch
        } else {
            PC += instr.jmp
        }
    },

    ENTER_BLK: (instr:any) => enter_block(),
    EXIT_BLK: (instr:any) => exit_block(),
    DONE: (instr:any) => {}
}


let PC = 0;

export function init_vm(printer: Function) {
    init_memory()
    stdout_buf = ""
    running_code = []
    PC = 0
    builtin = create_builtin(printer)
}

const opr_to_value = (opr: operand) => 
    opr.tag === "lvalue" ? read_as(opr.ty)(opr.value) : opr.value

function print_os() {
    const os_val_str = (x:operand) => 
        x.tag === "lvalue" ? `${x.value} => ${opr_to_value(x)}` : 
        is_ptr(x.ty) ? `${opr_to_value(x)} =>` : opr_to_value(x)

    console.log(OS.map(os_val_str))
}

export function test_vm(name: string, instrs:any[], expected:number|undefined, expected_std: string | undefined = undefined) {
    init_vm(console.log)
    const result = eval_instr(instrs) 
    if (result === expected) {
        if (expected_std && stdout_buf !== expected_std) {
            throw Error(`${name} Failed, expected ${expected_std} Got ${stdout_buf}`)
        }
        console.log(`${name} : Success`)
        return
    }
    throw Error(`${name} Failed, expected ${expected} Got ${result}`)
}


// TEST REPL Loop
export function test_repl(name:string, instrss : any[][], expected: any[]) {
    init_vm(console.log)
    let results : any[] = []
    for (let instrs of instrss) {
        results.push(eval_instr(instrs))
    }
    // Assuming expected and results are the same length
    for (let i=0; i<expected.length; i++) {
        if (results[i] !== expected[i]) {
            throw Error(`${name} Expected ${expected} Got ${results}`)
        }
    }

    console.log(`${name} : Success`)
}



let running_code : any[] = []

export function eval_instr(instrs : any[]) {
    running_code.push(...instrs)
    
    while (running_code[PC] && running_code[PC].tag !== "DONE") {
        const instr = running_code[PC]
        PC++;
        microcode[instr.tag](instr)
        // console.log(PC, instr)
        // print_os()
    }
    return OS.length > 0 ? opr_to_value(OS[OS.length-1]) : undefined
}