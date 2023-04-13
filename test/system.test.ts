import {describe, expect, jest, test} from '@jest/globals';
import parse_and_compile from '../src/compiler/compiler';
import { eval_instr, init_vm, instruction } from '../src/evaluator/evaluator';
import * as fs from 'fs';

const glb = {
    printer: (s:string) => {}
}

const test_vm = (instrs: instruction[]) => {
    init_vm(glb.printer);
    const result = eval_instr(instrs);
    return result; 
}

// to check if correct output is printed
jest.spyOn(glb, "printer").mockImplementation(() => {});

describe("basic statements", ()=> {
    test("print var", () => {
        let code = parse_and_compile("int a = 5; print(a);")
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "5")
    });
    test("print constant", () => {
        let code = parse_and_compile("print(6);")
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "6")
    })

    test("chars are small ints", () => {
        let code = parse_and_compile(`
            char a = 'H';
            print (a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "72")
    })

    test("float operations", () => {
        let code = parse_and_compile(`
            double a = 1.5;
            double b = 3.0;
            print (a * b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "4.5")
    })

    test("integer mod and division", () => {
        let code = parse_and_compile(`
            int a = 5;
            int b = 2;
            print (a / b);
            print (a % b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "2")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "1")
    })

    test("Binary logic operations", () => {
        let code = parse_and_compile(`
            print(1 == 2); // 0
            print(1 != 2); // 1
            print(1 <= 2); // 1
            print(1 < 2); // 1
            print(1 > 2); // 0
            print(1 >= 2); // 0
            print(1 && 1); // 1
            print(1 && 0); // 0
            print(1 || 0); // 1
            print(-1 || 0); // 1 cos negative is true
        `)
        test_vm(code)
        let results = [0,1,1,1,0,0,1,0,1,1].map(x => JSON.stringify(x))
        for (let i=0; i<results.length; i++) {
            expect(glb.printer).toHaveBeenNthCalledWith(i+1, results[i])
        }
    })

    test("Binary bitwise operations", () => {
        let code = parse_and_compile(`
            print (1 << 5);
            print ((1 << 5) >> 4);
            print (1 & 0);
            print (1 & 1);
            print (1 | 0);
            print (1 | 1);
            print (12345 ^ 54321);
        `)
        test_vm(code)
        let results = [
            1 << 5,
            (1 << 5) >> 4,
            1 & 0,
            1 & 1,
            1 | 0,
            1 | 1,
            12345 ^ 54321
        ].map(x => JSON.stringify(x))
        for (let i=0; i<results.length; i++) {
            expect(glb.printer).toHaveBeenNthCalledWith(i+1, results[i])
        }
    })

    test("Unary non pointer operations", () => {
        let code = parse_and_compile(`
            print (!123);
            print (~123);
            print (-123);
            print (+123);
        `)
        test_vm(code)
        let results = [
            0,
            -124,
            -123,
            123
        ].map(x => JSON.stringify(x))
        for (let i=0; i<results.length; i++) {
            expect(glb.printer).toHaveBeenNthCalledWith(i+1, results[i])
        }
    })
    
    test("basic assignment", () => {
        let code = [
            ...parse_and_compile("int a = 10; int b = 3 + a * 2 + 7;"),
            {tag: "LDS", name: "b"},
            {tag: "DONE"}
        ]
        expect(test_vm(code)).toBe(30);
    });

    test("assignment expression", () => {
        let code = parse_and_compile(`
            int a, b;
            a = b = 10;
            print(a);
            print(b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "10")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "10")
    });

    test("Pointer unops", () => {
        let code = parse_and_compile(`
            int a = 10;
            int *b = &a;
            *b = 20;
            print (a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "20")
    });

    test("address dereference operator should cancel each other", () => {
        let code = parse_and_compile(`
            int a = &*123456789;
            print (a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "123456789")
    });



    test("single if statement", () => {
        let code = parse_and_compile(`
            if (1 == 1) print(1);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    });

    test("if else true statement", () => {
        let code = parse_and_compile(`
            if (1 == 1) {
                print (1);
            } else {
                print (2);
            };
        `)
        test_vm(code)
        expect(glb.printer).toBeCalledTimes(1);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    });
    test("if else false statement", () => {
        let code = parse_and_compile(`
            if (1 != 1) {
                print (1);
            } else {
                print (2);
            };
        `)
        test_vm(code)
        expect(glb.printer).toBeCalledTimes(1);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "2")
    });

    test("if else false no brace statement", () => {
        let code = parse_and_compile(`
            if (1 != 1) print (1);
            else print (2);
            print (3);
        `)
        test_vm(code)
        expect(glb.printer).toBeCalledTimes(2);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "2")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "3")
    });

    test("if else if else statement", () => {
        let code = parse_and_compile(`
            if (1 != 1) print (1);
            else if (1 == 1) print(2);
            else print (3);
        `)
        test_vm(code)
        expect(glb.printer).toBeCalledTimes(1);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "2")
    });
})

describe("loops", () => {
    test("while loop", () => {
        let code = parse_and_compile(`
            int a = 0; while (a < 5) a += 1;
            print (a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "5")
    })
    test("for loop", () => {
        let code = parse_and_compile(`
            int a = 0;
            for (int i=0; i<3; i+=1) {
                a += i;
            }
            print (a);
            // reset to 0
            a = 0;
            int b = 5;
            for (; a < 3; a += 1) {
                b += 1;
            }
            print(b);

            a = 0;
            b = 69;
            for (; a < 3;) {
                b += 1;
                a += 1;
            }
            print(b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "3")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "8")
        expect(glb.printer).toHaveBeenNthCalledWith(3, "72")
    })

    test("nested loops", () => {
        let code = parse_and_compile(`
            int a = 0; 
            for (int i = 0; i < 3; i += 1) {
                for (int j = 0; j < 6; j += 1) {  
                    a += 1;
                } 
            }
            print (a);
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "18")
    })

    test("variable shadowing in loop", () => {
        let code = parse_and_compile(`
            int i=0;
            int b=0;
            for (int i=0; i<5; i += 1) {
                int i = 1;
                b += i;
            }
            print (b);
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "5")


    })

    test("variable shadowing in loop 2", () => {
        let code = parse_and_compile(`
            int i=5;
            int b=0;
            for (int i=0; i<5; i += 1) {
                b += i;
            }
            print (b);
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "10");
    })
    
    test("break statements", () => {
        let code = parse_and_compile(`
            int i = 5;
            for (; i > 0; i -= 1) {
                break;
            }
            print(i);

            int a = 0;
            for (int i = 10; i > 0; i -= 1) {
                a += 1;
                if (a > 3) break;
            }
            print(a);
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "5");
        expect(glb.printer).toHaveBeenNthCalledWith(2, "4");
    })

    test("break statements 2", () => {
        let code = parse_and_compile(`
            int a = 0;
            while(1) {
                a += 1;
                if (a > 3) break;
            }
            print(a);
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "4");
    })

    test("continue statement", () => {
        let code = parse_and_compile(`
            int a = 0;
            int b = 0;
            while(a < 3) {
                a += 1;
                continue;
                b += 1;
            }
            print (a);
            print (b);
        `)
        test_vm(code);

        expect(glb.printer).toHaveBeenNthCalledWith(1, "3");
        expect(glb.printer).toHaveBeenNthCalledWith(2, "0");
    })

    test("continue statement 2", () => {
        let code = parse_and_compile(`
            int a = 0;
            int b = 1;
            for (int i = 0; i < 3; i += 1) {
                if (a >= 0) {
                    if (b == 1) {
                        a += 1;
                        continue;
                    }
                }
                b += 1;
            }
            print(a);
            print(b);
        `)
        test_vm(code);

        expect(glb.printer).toHaveBeenNthCalledWith(1, "3");
        expect(glb.printer).toHaveBeenNthCalledWith(2, "1");
    })
})

describe("functions", () => {
    test("basic addition function", () => {
        let code = parse_and_compile(`
            int add(int a, int b) {
                int sum = 0;
                sum = b + a;
                return sum;
            }
            print(add(5, 6));
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "11")
    }),

    test("recursive function", () => {
        let code = parse_and_compile(`
            int fac(int n) {
                if (n == 1) return 1;
                return n * fac(n - 1);
            }
            print (fac(4));
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "24")
    })

    test("mutual recursive function", () => {
        let code = parse_and_compile(`
            int f1(int a) {
                if (a == 1) return a;
                return f2(a-1);
            }
            int f2 (int b) {
                if (b==1) return b;
                return f1(b-1);
            }
            print (f2(3));
        `)
        test_vm(code);
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    })


    test("void function", () => {
        let code = parse_and_compile(`
            int a = 0;
            void modify(int n) {
                a = n;
                return;
            }
            modify(10);
            print(a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "10")
    })

})

describe("dynamic memory", () => {
    test("malloc read write", () => {
        let code = parse_and_compile(`
            int *a = malloc(8);
            *a = 15;
            print(*a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "15")
    })

    test("malloc read write contiguous", () => {
        let code = parse_and_compile(`
            int *a = malloc(8 * 3);
            *a = 5;
            *(a+2) = 7;
            *(a+1) = 6;
            print(*a + *(a+1) + *(a+2));
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "18")
    })

    test("malloc free malloc reuse memory", () => {
        let code = parse_and_compile(`
            int *a = malloc(24);
            free(a);
            int *b = malloc(24);
            print (a == b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    })

    test("malloc fibo fast", () => {
        let code = parse_and_compile(`
            int fibo(int n) {
                if (n < 2) return 1;
                int *a = malloc(8 * n);
                *(a) = 1;
                *(a+1) = 1;
                int i = 0;
                for (i=2; i<n; i += 1) {
                    *(a+i) = *(a+i-1) + *(a+i-2);
                }
                return *(a + n - 1);
            }
            print(fibo(3));
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "2")
    })
})

describe("memory test", () => {
    test("pointer comparison", () => {
        let code = parse_and_compile(`
        int *a = malloc(24);
        int *b = a;
        print(a == b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    })

    test("double pointer dereference", () => {
        let code = parse_and_compile(`
            int a = 10; 
            int *b = &a;
            int **c = &b;
            **c = 21;
            print(a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "21")
    });

    test("pointer addition", () => {
        let code = parse_and_compile(`
            int *a = 0;
            print (a + 1);
            print (1 + a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "8")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "8")
    })

    test("pointer minus", () => {
        let code = parse_and_compile(`
            int *a = 16;
            print (a - 1);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "8")
    })

    test("pointer pointer minus", () => {
        let code = parse_and_compile(`
            int *a = 16;
            int *a2 = 8;
            print (a - a2);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    })

    test("memory representations", () => {
        let code = [
            ...parse_and_compile(`
                int a = 0;
                // implicit conversion
                char *b = &a; 
                for (int i=0; i<6; i+=1) {
                    *(b+i) = 1;
                }
            `),
            {tag: "LDS", name: "a"},
            {tag: "DONE"}
        ]
        expect(test_vm(code)).toBe(0x0000010101010101)
    })
})

describe("arrays", () => {
    test("basic array", () => {
        let code = parse_and_compile(`
            int a[5];
            a[0] = 42;
            print(a[0]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "42")
    })

    test("array with pointer access", () => {
        let code = parse_and_compile(`
            int a[5]; 
            a[0] = 43; 
            int b = a[0]; 
            int *c = a; 
            print(*c);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "43")
    })

    test("array dereference", () => {
        let code = parse_and_compile(`
            int a[5];
            *a = 51;
            print(a[0]);
            print (*a);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "51")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "51")
    })

    test("2d array dereference", () => {
        let code = parse_and_compile(`
            int a[3][2];
            *a[1] = 5; //a[1][0] == 5
            print(a[1][0]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "5")
    })

    test("array indirect modification", () => {
        let code = parse_and_compile(`
            int a[5];
            int *ap = &a[4];
            *ap = 41;
            print (a[4]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "41")
    })

    test("address of array", () => {
        let code = parse_and_compile(`
            int a[5];
            *a = 123;
            int *b = &a;
            print(*b);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "123")
    })

    test("memory aliasing of array", () => {
        let code = parse_and_compile(`
            int a[5];
            *a = 125;
            int *b = a;
            int c = *b;
            print(c);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "125")
    })

    test("2 dimensional array set get", () => {
        let code = parse_and_compile(`
            int a[6][5];
            a[1][2] = 42;
            print(a[1][2]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "42")
    })

    test("2 dimensional array loop set get", () => {
        let code = parse_and_compile(`
            int a[3][3];
            for (int i = 0; i < 3; i += 1) {
                for (int j = 0; j < 3; j += 1) {
                    a[i][j] = i + j;
                }
            }
            int sum = 0;
            for (int i = 0; i < 3; i += 1) {
                for (int j = 0; j < 3; j += 1) {
                    sum += a[i][j];
                }
            }
            print(a[1][1]);
            print(sum);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "2")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "18")
    })

    test("init list 1d", () => {
        let code = parse_and_compile(`
            int a[] = {1, 2, 3};
            print(a[0]);
            print(a[1]);
            print(a[2]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "2")
        expect(glb.printer).toHaveBeenNthCalledWith(3, "3")
    })

    test("init list 2d", () => {
        let code = parse_and_compile(`
            int a[][] = {{1, 2, 3}, {4, 5, 6}};
            print(a[0][0]);
            print(a[0][1]);
            print(a[0][2]);
            print(a[1][0]);
            print(a[1][1]);
            print(a[1][2]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "2")
        expect(glb.printer).toHaveBeenNthCalledWith(3, "3")
        expect(glb.printer).toHaveBeenNthCalledWith(4, "4")
        expect(glb.printer).toHaveBeenNthCalledWith(5, "5")
        expect(glb.printer).toHaveBeenNthCalledWith(6, "6")
    })
})

describe("char strings", () => {
    test("char array init list", () => {
        let code = parse_and_compile(`
            char s[] = {72, 72, 72, 00};
            print_str(s);
        `);
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "HHH")
    })

    test("char pointer string", () => {
        let code = parse_and_compile(`
            char *s = "hello";
            print_str(s);
        `);
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "hello")
    })

    test("char pointer string interning", () => {
        let code = parse_and_compile(`
            char *s = "hello";
            char *s2 = "hello";
            print(s == s2);
        `);
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "1")
    })

    test("local char string modification", () => {
        let code = parse_and_compile(`
            char s[6] = "hello";
            s[0] = 'H';
            print_str(s);
        `);
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "Hello")
    })

    test("string init list", () => {
        let code = parse_and_compile(`
            char s[][6] = {"hello", "world"};
            print_str(s[0]);
            print_str(s[1]);
        `);
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "hello")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "world")
    })

})



function get_str_from_file_name(file_name: string) : string {
    // Example file path to test files:
    return fs.readFileSync('./test/test_files/' + file_name, 'utf8')
}

describe("system test", () => {
    test("matrix multiplications without functions", () => {
        let code = [
            ...parse_and_compile(get_str_from_file_name('matmulnofunc.c')),
            {tag: "LDS", name: "a"},
            {tag: "DONE"}
        ]
        expect(test_vm(code)).toBe(1)
    })

    test("matrix multiplications with functions", () => {
        let code = [
            ...parse_and_compile(get_str_from_file_name('matmul.c')),
            {tag: "LDS", name: "a"},
            {tag: "DONE"}
        ]
        expect(test_vm(code)).toBe(4)
    })

    test("function with 2d array params", () => {
        let code = parse_and_compile(`

            void modify(int arr[2][3], int i, int j, int v) {
                arr[i][j] = v;
                return;
            }

            void modify2(int i, int j, int v, int arr[2][3]) {
                arr[i][j] = v;
                return;
            }
            int arr[2][3];
            modify(arr, 1, 2, 42);
            print(arr[1][2]);

            modify2(1,2,41,arr);
            print(arr[1][2]);
        `)
        test_vm(code)
        expect(glb.printer).toHaveBeenNthCalledWith(1, "42")
        expect(glb.printer).toHaveBeenNthCalledWith(2, "41")
    })
})