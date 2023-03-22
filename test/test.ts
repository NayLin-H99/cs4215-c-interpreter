import { parse } from "path";
import parse_and_compile from "../src/compiler/compiler"
import { test_vm } from "../src/evaluator/evaluator";

let basic_assignment = [
    ...parse_and_compile("int a = 10; int b = 3 + a * 2 + 7;"),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]

test_vm("basic_assignment", basic_assignment, 30);


let basic_assignment_statement = [
    ...parse_and_compile("int a = 10; a = 20 + a;"),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("basic_assignment_statement", basic_assignment_statement, 30);

let basic_unop_statement = [
    ...parse_and_compile("int a = 10; int *b = &a; *b = 20; "),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("basic_unop_statement", basic_unop_statement, 20);


let basic_ptr_statement = [
    ...parse_and_compile("int a = 10; int *b = &a; int **c = &b;  **c = 21; "),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("basic_ptr_statement", basic_ptr_statement, 21);

let if_statement = [
    ...parse_and_compile("int a = 0; if (1 == 1) a = 2;"), 
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("if_statement", if_statement, 2);

let if_else_statement = [
    ...parse_and_compile("int a = 0; if (1 != 1) a = 2; else a = 69;"), 
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("if_else_statement", if_else_statement, 69);

let while_statement = [
    ...parse_and_compile("int a = 0; while (a < 5) a += 1;"), 
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("while_statement", while_statement, 5)

let for_statement = [
    ...parse_and_compile("int a = 0; for (int i = 0; i < 3; i += 1) { a += i; }"),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("for_statement", for_statement, 3)

let nested_for_stmt = [
    ...parse_and_compile(`
        int a = 0; 
        for (int i = 0; i < 3; i += 1) {
            for (int j = 0; j < 6; j += 1) {  
                a += 1;
            } 
        }`),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("nested_for_stmt", nested_for_stmt, 18)

let for_while_stmt = [
    ...parse_and_compile(`
        int a = 0, b = 69;
        for (; a < 3; a += 1) {
            b += 1;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm("for_while_stmt", for_while_stmt, 72)

let for_while_stmt2 = [
    ...parse_and_compile(`
        int a = 0, b = 69;
        for (; a < 3;) {
            b += 1;
            a += 1;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm("for_while_stmt2", for_while_stmt2, 72)


let for_while_stmt3 = [
    ...parse_and_compile(`
        int a = 0, b = 69;
        for (b = 42; a += 1, a < 6;) {
            b += 1;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm("for_while_stmt3", for_while_stmt3, 47)

let for_while_stmt4 = [
    ...parse_and_compile(`
        int i=0;
        int b=0;
        for (int i=0; i<5; i += 1) {
            int i = 1;
            b += i;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm("for_while_stmt4", for_while_stmt4, 5)


let for_while_stmt5 = [
    ...parse_and_compile(`
        int i=5;
        int b=0;
        for (int i=0; i<5; i += 1) {
            b += i;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm("for_while_stmt5", for_while_stmt5, 10)

let break_stmt = [
    ...parse_and_compile(`
        int i = 5;
        for (; i > 0; i -= 1) {
            break;
        }`),
    {tag: "LDS", name: "i"},
    {tag: "DONE"}
]
console.log(break_stmt)
test_vm("break_stmt", break_stmt, 5)


let break_stmt1 = [
    ...parse_and_compile(`
        int a = 0;
        for (int i = 5; i > 0; i -= 1) {
            a += 1;
            if (a > 3) break;
        }`),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("break_stmt1", break_stmt1, 4)

let break_stmt2 = [
    ...parse_and_compile(`
        int a = 0;
        while(1) {
            a += 1;
            if (a > 3) break;
        }`),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("break_stmt2", break_stmt2, 4)

let continue_stmt = [
    ...parse_and_compile(`
        int a = 0;
        int b = 0;
        while(a < 3) {
            a += 1;
            continue;
            b += 1;
        }`),
    // {tag: "LDS", name: "a"},            // check a
    {tag: "LDS", name: "b"},            // check b
    {tag: "DONE"}
]
// test_vm("continue_stmt", continue_stmt, 3)  // check a
test_vm("continue_stmt", continue_stmt, 0)  // check b

let continue_stmt1 = [
    ...parse_and_compile(`
        int a = 0;
        int b = 0;
        for (int i = 0; i < 3; i += 1) {
            a += 1;
            continue;
            b += 1;
        }`),
    // {tag: "LDS", name: "a"},            // check a
    {tag: "LDS", name: "b"},            // check b
    {tag: "DONE"}
]
// test_vm("continue_stmt1", continue_stmt1, 3) // check a
test_vm("continue_stmt1", continue_stmt1, 0) // check b

let func_add_stmt = [
    ...parse_and_compile(`
    int add(int a, int b) {
        int sum = 0;
        sum = b + a;
        return sum;
    }
    int a = add(5, 6);
    `),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("func_add_stmt", func_add_stmt, 11)

let func_recurse_stmt = [
    ...parse_and_compile(`
    int fac(int n) {
        if (n == 1) return 1;
        return n * fac(n-1);
    }
    int a = fac(4);
    `),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("func_recurse_stmt", func_recurse_stmt, 24)

let func_recurse_stmt2 = [
    ...parse_and_compile(`
    int f1(int a) {
        if (a == 1) return a;
        return f2(a-1);
    }
    int f2 (int b) {
        if (b==1) return b;
        return f1(b-1);
    }
    int a = f2(3);
    `),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm("func_recurse_stmt2", func_recurse_stmt2, 1)
