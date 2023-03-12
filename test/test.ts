import parse_and_compile from "../src/compiler/compiler"

parse_and_compile("int a = 1;");
parse_and_compile("int a=1, b=2;");
parse_and_compile("int a; int a = 1; int b=a;");