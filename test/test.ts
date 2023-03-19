import parse_and_compile from "../src/compiler/compiler"
import { test_vm } from "../src/evaluator/evaluator";

let basic_assignment = [
    ...parse_and_compile("int a = 10; int b = 3 + a * 2 + 7;"),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]

test_vm(basic_assignment, 30);


let basic_assignment_statement = [
    ...parse_and_compile("int a = 10; a = 20 + a;"),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(basic_assignment_statement, 30);

let basic_unop_statement = [
    ...parse_and_compile("int a = 10; int *b = &a; *b = 20; "),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(basic_unop_statement, 20);


let basic_ptr_statement = [
    ...parse_and_compile("int a = 10; int *b = &a; int **c = &b;  **c = 21; "),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(basic_ptr_statement, 21);

let if_statement = [
    ...parse_and_compile("int a = 0; if (1 == 1) a = 2;"), 
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(if_statement, 2);

let if_else_statement = [
    ...parse_and_compile("int a = 0; if (1 != 1) a = 2; else a = 69;"), 
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(if_else_statement, 69);

let while_statement = [
    ...parse_and_compile("int a = 0; while (a < 5) a += 1;"), 
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(while_statement, 5)

let for_statement = [
    ...parse_and_compile("int a = 0; for (int i = 0; i < 3; i += 1) { a += i; }"),
    {tag: "LDS", name: "a"},
    {tag: "DONE"}
]
test_vm(for_statement, 3)

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
test_vm(nested_for_stmt, 18)

let for_while_stmt = [
    ...parse_and_compile(`
        int a = 0, b = 69;
        for (; a < 3; a += 1) {
            b += 1;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm(for_while_stmt, 72)

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
test_vm(for_while_stmt2, 72)


let for_while_stmt3 = [
    ...parse_and_compile(`
        int a = 0, b = 69;
        for (b = 42; a += 1, a < 6;) {
            b += 1;
        }`),
    {tag: "LDS", name: "b"},
    {tag: "DONE"}
]
test_vm(for_while_stmt3, 47)