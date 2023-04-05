import exp from "constants"
import { char, int, ptr } from "../src/compiler/typesystem"
import { eval_instr, test_repl, test_vm } from "../src/evaluator/evaluator"


// quick helper function to genegrate basic code 
// decl_int_var_with_value("a", 10) means int a = 10;
const decl_int_var_with_value = (name:string, value:number) => [
    {tag: "DECL", var: { name, ty: int }},
    {tag: "LDC", value},
    {tag: "ASSIGN"},
    {tag: "POP"},
]




/**
 * int i = 10;
 * int a = 0;
 * a = i++;
 */
let postfix_increment = [
    ...decl_int_var_with_value("i", 10),
    ...decl_int_var_with_value("a", 0),

    // a = i++;
    {tag: "LDS", name: "a"},
    {tag:"LDV", name:"i"},
    {tag:"LDS", name:"i"},
    {tag:"COPY"},
    {tag:"LDC", value: 1},
    {tag:"BINOP", op: "+"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag:"ASSIGN"},

    {tag:"DONE"},
]
test_vm("postfix_increment", postfix_increment, 10)

/**
 * int a = 10;
 * {
 *  int b = 10;
 *  a = 12;
 * }
 * int b = 11;
 * a - b;
 */
let var_blk_scope = [
    ...decl_int_var_with_value("a", 10),
    {tag:"ENTER_BLK"},
    ...decl_int_var_with_value("b", 10),
    {tag: "LDS", name: "a"},
    {tag: "LDC", value: 12},
    {tag: "ASSIGN"},
    {tag: "POP"},
    {tag:"EXIT_BLK"},
    ...decl_int_var_with_value("b", 11),
    {tag: "LDS", name: "a"},
    {tag: "LDS", name: "b"},
    {tag: "BINOP", op: "-"},
    {tag: "DONE"}
]
test_vm("var_blk_scope", var_blk_scope, 1)


/**
 * int a = 10;
 * int b = 10;
 * {
 *    int b = 12;
 *    a = a + b;
 * }
 * a;
 */
let var_blk_shadowing_scope  = [
    ...decl_int_var_with_value("a", 10),
    ...decl_int_var_with_value("b", 10),
    {tag: "ENTER_BLK"},
    ...decl_int_var_with_value("b", 12),
    {tag: "LDS", name:"a"},
    {tag: "LDS", name:"a"},
    {tag: "LDS", name:"b"},
    {tag: "BINOP", op: "+"},
    {tag: "ASSIGN"},
    {tag: "POP"},
    {tag: "EXIT_BLK"},
    {tag: "LDS", name:"a"},
    {tag: "DONE"}
]
test_vm("var_blk_shadowing_scope", var_blk_shadowing_scope, 22)

let var_blk_shadowing_scope_2  = [
    ...decl_int_var_with_value("a", 10),
    ...decl_int_var_with_value("b", 10),
    {tag: "ENTER_BLK"},
    ...decl_int_var_with_value("b", 12),
    {tag: "LDS", name:"a"},
    {tag: "LDS", name:"a"},
    {tag: "LDS", name:"b"},
    {tag: "BINOP", op: "+"},
    {tag: "ASSIGN"},
    {tag: "POP"},
    {tag: "EXIT_BLK"},
    {tag: "LDS", name:"b"},
    {tag: "DONE"}
]
test_vm("var_blk_shadowing_scope_2", var_blk_shadowing_scope_2, 10)

/**
 * int a = 10;
 * {
 *  int b = 10;
 *  a = 12;
 * }
 * int b = 11;
 * a - b;
 */



/**
 * int a = 10;
 * int b = 5;
 * {
 *   b = 1;
 *  
 * }
    a+b;
 */
let var_blk_scope2 = [
    ...decl_int_var_with_value("a", 10),
    ...decl_int_var_with_value("b", 5),
    {tag:"ENTER_BLK"},
    {tag: "LDS", name: "b"},
    {tag: "LDC", value: 1},
    {tag: "ASSIGN"},
    {tag: "POP"},
    {tag:"EXIT_BLK"},
    {tag: "LDS", name: "a"},
    {tag: "LDS", name: "b"},
    {tag: "BINOP", op: "+"},
    {tag: "DONE"}
]
test_vm("var_blk_scope2", var_blk_scope2, 11)

/**
 * int a = 5;
 * {
 *    int a = 10;
 *      { 
 *        int a = 11;   
 *      } // do not compile this
 * } // do not compile this
 * pop_env(2)
 * a;
 */
let multi_level_scope_exit = [
    ...decl_int_var_with_value("a", 5),
    {tag: "ENTER_BLK"},
    ...decl_int_var_with_value("a", 10),
    {tag: "ENTER_BLK"},
    ...decl_int_var_with_value("a", 11),
    {tag: "POP_ENV", n: 2},
    {tag: "LDS", name: "a"}
]
test_vm("multi_level_scope_exit", multi_level_scope_exit, 5)


let pointer_addressing = [
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
    {tag: "UNOP", op: "&"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    // int **app = &ap;
    {tag: "DECL", var: { name: "app", ty: ptr(ptr(int)) }},
    {tag: "LDS", name: "ap"},
    {tag: "UNOP", op: "&"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    // int c = **app
    {tag: "DECL", var: { name: "c", ty: ptr(ptr(int)) }},
    {tag: "LDS", name: "app"},
    {tag: "UNOP", op: "*"},
    {tag: "UNOP", op: "*"},
    {tag: "ASSIGN"},
    {tag: "POP"},


    // ap = &v2;
    {tag: "LDS", name: "ap"},
    {tag: "LDS", name: "v2"},
    {tag: "UNOP", op: "&"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    {tag: "LDS", name: "app"},
    {tag: "UNOP", op: "*"},
    {tag: "UNOP", op: "*"},

    {tag: "DONE"}
]

test_vm("pointer_addressing", pointer_addressing, 20)


/**
 * int a = 10;
 * int b = 20;
 * if (b > a * 2) {
 *  b = a;
 * } else {
 *  a = b;
 * }
 * a;
 */
let branch_conditions = [
    // int a = 10;
    ...decl_int_var_with_value("a", 10),
    // int b = 20;
    ...decl_int_var_with_value("b", 20),

    // if (b > a * 2)
    // predicate
    {tag:"LDS", name: "b"},
    {tag:"LDS", name: "a"},
    {tag:"LDC", value: 2},
    {tag:"BINOP", op: "*"},
    {tag:"BINOP", op: ">"},
    // comparison
    {tag:"BR", true_branch: 1, false_branch: 7},
    // then b = a;
    {tag: "ENTER_BLK"},
    {tag:"LDS", name: "b"},
    {tag:"LDS", name: "a"},
    {tag: "ASSIGN"},
    {tag: "POP"},
    {tag: "EXIT_BLK"},
    // else a = b;
    {tag: "ENTER_BLK"},
    {tag:"LDS", name: "a"},
    {tag:"LDS", name: "b"},
    {tag: "ASSIGN"},
    {tag: "POP"},
    {tag: "EXIT_BLK"},

    {tag:"LDS", name: "a"},
    {tag:"DONE"},
]
test_vm("branch_conditions", branch_conditions, 20)

/**
 * int i = 0;
 * int sum = 0;
 * while (i < 10) {
 *      sum += i;
 *      i++;
 * }
 * sum;
 */
let sum_to_10 = [
    ...decl_int_var_with_value("i", 0),
    ...decl_int_var_with_value("sum", 0),

    {tag:"LDS", name:"i"},
    {tag:"LDC", value: 10},
    {tag:"BINOP", op: "<"},
    {tag: "BR", true_branch: 1, false_branch: 18},
    {tag: "POP"},
    {tag: "ENTER_BLK"},
    // sum += i
    {tag:"LDS", name:"sum"},
    {tag:"COPY"},
    {tag:"LDS", name:"i"},
    {tag:"BINOP", op: "+"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    // i++
    {tag:"LDV", name:"i"},
    {tag:"LDS", name:"i"},
    {tag:"COPY"},
    {tag:"LDC", value: 1},
    {tag:"BINOP", op: "+"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "BR", jmp: -19},
    {tag: "EXIT_BLK"},
    
    {tag:"LDV", name:"sum"},
    {tag:"DONE"}
]
test_vm("sum_to_10", sum_to_10, 45)


/**
 * int *a = 0;
 * a + 1;
 */
let pointer_arithmetic_1 = [
    {tag: "DECL", var: { name:"a", ty: ptr(int) }},
    {tag:"LDC", value: 8},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "LDS", name: "a"},
    {tag:"LDC", value: 1},
    {tag:"BINOP", op: "+"},
    {tag: "DONE"}
]
test_vm("pointer_arithmetic_1", pointer_arithmetic_1, 16)

/**
 * int *a = 0;
 * 1 + a;
 */
let pointer_arithmetic_1_mirror = [
    {tag: "DECL", var: { name:"a", ty: ptr(int) }},
    {tag:"LDC", value: 8},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag:"LDC", value: 1},
    {tag: "LDS", name: "a"},
    {tag:"BINOP", op: "+"},
    {tag: "DONE"}
]
test_vm("pointer_arithmetic_1_mirror", pointer_arithmetic_1_mirror, 16)

/**
 * int *a = 8;
 * a - 1;
 */
let pointer_arithmetic_2 = [
    {tag: "DECL", var: { name:"a", ty: ptr(int) }},
    {tag:"LDC", value: 8},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "LDS", name: "a"},
    {tag:"LDC", value: 1},
    {tag:"BINOP", op: "-"},
    {tag: "DONE"}
]
test_vm("pointer_arithmetic_2", pointer_arithmetic_2, 0)


/**
 * int *a = 8;
 * int *b = 16;
 * b - a;
 */
let pointer_arithmetic_3 = [
    {tag: "DECL", var: { name:"a", ty: ptr(int) }},
    {tag:"LDC", value: 8},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "DECL", var: { name:"b", ty: ptr(int) }},
    {tag:"LDC", value: 16},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "LDS", name: "b"},
    {tag: "LDS", name: "a"},
    {tag:"BINOP", op: "-"},
    {tag: "DONE"}
]
test_vm("pointer_arithmetic_3", pointer_arithmetic_3, 1)


const basic_repl = [
    decl_int_var_with_value("a", 1),
    decl_int_var_with_value("b", 10),
    [
        {tag: "LDS", name: "b"},
        {tag: "LDS", name: "a"},
        {tag:"BINOP", op: "-"},
    ],
]
test_repl("basic_repl", basic_repl, [undefined,undefined,9])

/**
 * int add(int a, int b) {
 *      int sum = 0;
 *      sum = b + a;
 *      return sum;
 * }
 * add(5, 6);
 */
const function_add = [
    {tag: "FUNCTION", fname: "add", rty: int, params: ["a", "b"], param_ty: [int, int]},
    {tag: "BR", jmp: 15},
    {tag: "ENTER_BLK"},
    ...decl_int_var_with_value("sum", 0), // 4 instrs
    {tag: "LDS", name: "sum"},
    {tag: "LDS", name: "b"},
    {tag: "LDS", name: "a"},
    {tag:"BINOP", op: "+"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "LDS", name: "sum"},
    {tag: "RET"},
    {tag: "EXIT_BLK"},
    {tag: "LDC", value: 5},
    {tag: "LDC", value: 6},
    {tag: "CALL", fname: "add"}
]
test_vm("function_add", function_add, 11)


/* Test scoping invovling function
 * int a = 4;
 * int b = 5;
 * int c = 6;
 * int add(int a, int b) {
 *      int sum = 0;
 *      sum = b + a + c;
 *      return sum;
 * }
 * add(6, b);
 */
const function_add_2 = [
    ...decl_int_var_with_value("a", 4), // 4 instrs
    ...decl_int_var_with_value("b", 5), // 4 instrs
    ...decl_int_var_with_value("c", 6), // 4 instrs
    {tag: "FUNCTION", fname: "add", rty: int, params: ["a", "b"], param_ty: [int, int]},
    {tag: "BR", jmp: 17},
    {tag: "ENTER_BLK"},
    ...decl_int_var_with_value("sum", 0), // 4 instrs
    {tag: "LDS", name: "sum"},
    {tag: "LDS", name: "b"},
    {tag: "LDS", name: "a"},
    {tag:"BINOP", op: "+"},
    {tag: "LDS", name: "c"},
    {tag:"BINOP", op: "+"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag: "LDS", name: "sum"},
    {tag: "RET"},
    {tag: "EXIT_BLK"},
    {tag: "LDC", value: 6},
    {tag: "LDS", name: "b"},
    {tag: "CALL", fname: "add"}
]
test_vm("function_add_2", function_add_2, 17)


/** Test Recursion
 * 
 * int fac(int n) {
 *      if (n == 1) return 1;
 *      return n * fac(n-1);
 * }
 * fac(4);
 * fac(5);
 */
const function_fac = [
    {tag: "FUNCTION", fname: "fac", rty: int, params: ["n"], param_ty: [int]},
    {tag: "BR", jmp: 18},
    {tag: "ENTER_BLK"},
    {tag: "LDS", name: "n"},
    {tag: "LDC", value: 1},
    {tag: "BINOP", op: "=="},
    {tag: "BR", true_branch: 1 , false_branch: 5},
    {tag: "ENTER_BLK"},
    {tag: "LDC", value: 1},
    {tag: "RET"},
    {tag: "EXIT_BLK"},
    // n * ...
    {tag: "LDS", name: "n"},
    // fac(n-1)
    {tag: "LDS", name: "n"},
    {tag: "LDC", value: 1},
    {tag: "BINOP", op: "-"},
    {tag: "CALL", fname: "fac"},
    {tag: "BINOP", op: "*"},
    {tag: "RET"},
    {tag: "EXIT_BLK"},
    {tag: "LDC", value: 4},
    {tag: "CALL", fname: "fac"},
    {tag: "LDC", value: 5},
    {tag: "CALL", fname: "fac"}
]

test_vm("function_fac", function_fac, 120)


/**
 * int a[5];
 * a[0] = 42;
 * int b = a[0];
 * int *c = a;
 * *c;
 */
const arr_1d = [
    // int a[5]
    {tag: "DECL", var: { name:"a", ty: {typename: "arr", ty: int, n_elems: 5} }},
    {tag: "POP"},
    // a[0] == *(a+0)
    {tag: "LDS", name: "a"},
    {tag: "LDC", value: 0},
    {tag: "BINOP", op: "+"},
    {tag: "UNOP", op: "*"},
    {tag: "LDC", value: 42},
    {tag: "ASSIGN"},
    {tag: "POP"},

    // int b = ...
    {tag: "DECL", var: {name:"b", ty: int}},

    // a[0] == *(a+0)
    {tag: "LDS", name:"a"},
    {tag: "LDC", value: 0},
    {tag: "BINOP", op: "+"},
    {tag: "UNOP", op: "*"},

    // int b = a[0]
    {tag: "ASSIGN"},
    {tag: "POP"},

    {tag: "DECL", var: {name:"c", ty: ptr(int)}},
    {tag: "LDS", name:"a"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    {tag: "LDS", name:"c"},
    {tag: "UNOP", op: "*"},
]

test_vm("arr_1d", arr_1d, 42)

/**
 * int a[5];
 * int *ap = &a[4];
 * *(ap-1) = 41;
 * int b = a[3];
 */
const arr_indirect_modification = [
    // int a[5];
    {tag: "DECL", var: { name:"a", ty: {typename: "arr", ty: int, n_elems: 5} }},
    {tag: "POP"},

    // int *ap = &a[4];
    {tag: "DECL", var: { name:"ap", ty: ptr(int) }},
    {tag: "LDS", name: "a"},
    {tag: "LDC", value: 4},
    {tag: "BINOP", op: "+"},
    {tag: "UNOP", op: "*"},
    {tag: "UNOP", op: "&"},
    {tag: "ASSIGN"},
    {tag: "POP"},
    
    // *(ap-1) = 41
    {tag: "LDS", name: "ap"},
    {tag: "LDC", value: 1},
    {tag: "BINOP", op: "-"},
    {tag: "UNOP", op: "*"},
    {tag: "LDC", value: 41},
    {tag: "ASSIGN"},
    {tag: "POP"},
    
    // int b = a[3];
    {tag: "DECL", var: { name:"b", ty: int }},
    {tag: "LDS", name: "a"},
    {tag: "LDC", value: 3},
    {tag: "BINOP", op: "+"},
    {tag: "UNOP", op: "*"},
    {tag: "ASSIGN"},
    {tag: "POP"},

    {tag: "LDS", name: "b"},
]
test_vm("arr_indirect_modification", arr_indirect_modification, 41)

// char *s = "hello";
// print_str(s);
const string_printing = [
    {tag:"DECL", var: {name:"s", ty: ptr(char)}},
    {tag:"LDSTR", str:"hello"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag:"LDS", name: "s"},
    {tag:"CALL", fname:"print_str"},
    {tag:"POP"},
]
test_vm("string_printing", string_printing, undefined, "hello\n");

// char *s = "hello";
// char *s2 = "hello";
// s == s2;
const string_interning = [
    {tag:"DECL", var: {name:"s", ty: ptr(char)}},
    {tag:"LDSTR", str:"hello"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag:"DECL", var: {name:"s2", ty: ptr(char)}},
    {tag:"LDSTR", str:"hello"},
    {tag:"ASSIGN"},
    {tag:"POP"},
    {tag:"LDS", name: "s"},
    {tag:"LDS", name: "s2"},
    {tag:"BINOP", op: "=="},
]
test_vm("string_interning", string_interning, 1);

