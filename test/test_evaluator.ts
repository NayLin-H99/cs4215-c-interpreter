import { int, ptr } from "../src/compiler/typesystem"
import { test_vm } from "../src/evaluator/evaluator"


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
test_vm(postfix_increment, 10)

/**
 * int a = 10;
 * {
 *  int b = 10;
 *  a = 12;
 * }
 * int b = 11;
 * a + b;
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
    {tag: "BINOP", op: "+"},
    {tag: "DONE", op: "+"}
]
test_vm(var_blk_scope, 23)

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

test_vm(pointer_addressing, 20)


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
test_vm(branch_conditions, 20)

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
    {tag: "BR", true_branch: 1, false_branch: 17},
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
    {tag: "BR", jmp: -18},
    {tag: "EXIT_BLK"},
    
    {tag:"LDV", name:"sum"},
    {tag:"DONE"}
]
test_vm(sum_to_10, 45)
