import {
    ANTLRErrorListener, CharStreams, CommonToken, 
    CommonTokenStream, RecognitionException, Recognizer, 
    Token
} from "antlr4ts";
import { CLexer } from './generated/CLexer'
import { CParser } from './generated/CParser'
import * as fs from 'fs';
import { instruction, OP, operand, ind, imm, R0, R1, R2, R3, PC, BP, SP, RA } from '../vm/vm'

// const file_path: string = './test/test_files/expression.c';
// const inputStream = CharStreams.fromString(fs.readFileSync(file_path, 'utf8'));
// const inputStream = CharStreams.fromString("int c = a + b;");
const inputStream = CharStreams.fromString("int a = 1 + 2;");
const lexer = new CLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CParser(tokenStream);
const tree = parser.compilationUnit()
// console.log(tree)
const get_rule_name = (ctx:any) =>
    CParser.ruleNames[ctx.ruleIndex]

const is_rule = (node:any) => 
    get_rule_name(node) !== undefined

const print_tree = (root : any, depth : number) => {
    if (!root) return;
    if (is_rule(root)) {
        console.log("-".repeat(depth * 2) + get_rule_name(root))
        const rule = get_rule_name(root)
    }
    else
        console.log("-".repeat(depth * 2) + root.symbol.text)
    if (root.children)
        root.children.forEach((c:any) => print_tree(c, depth + 1))
}

/**
 * Instructions and Compile Env will be similar to the homeworks
 */
// wc: write counter
let wc = 0;
// instrs: instruction array
let instrs = [];
function push_instr(instr : instruction) {
    instrs[wc++] = instr;
}
// comp_env: compile env (an array of frames that each contain dcls/params mappings)
let comp_env: Array<Map<string, number>> = [];

/**
 * Given a node, will take it and check for rules
 * Due to nesting, we need to check first.
 * i.e. additive => multiplicativeExpression (('+'|'-') multiplicativeExpression)*
 * >=2 children means that there is an expansion
*/
const compile_comp = {
primaryExpression:
    (root: any) => {
        // Identifier
        // |   Constant
        push_instr({operation: OP.PUSH, operands: [imm(BigInt(root.symbol.text))]});
        // |   StringLiteral+
        // |   '(' expression ')'
    },
postfixExpression:
    (root: any)=> {
        // (primaryExpression)
        //('[' expression ']'
        //| '(' argumentExpressionList? ')'
        //| ('.' | '->') Identifier
        //| ('++' | '--')
        //)*
    },
additiveExpression:
    (root: any) => {
        push_instr({operation: OP.POP, operands: [REGISTER.R1]});
        instrs[wc++] = {operation: OP.POP, operands: [REGISTER.R2]}
        instrs[wc++] = {operation: OP.ADD, operands: [REGISTER.R1, REGISTER.R2]}
    },
multiplicativeExpression:
    (root: any) => {
        instrs[wc++] = {operation: OP.POP, operands: [REGISTER.R1]}
        instrs[wc++] = {operation: OP.POP, operands: [REGISTER.R2]}
        // instrs[wc++] = {operation: OP.MULT, operands: [REGISTER.R1, REGISTER.R2]}
    }
}

const compile = (root: any) => {
    // return compile_comp[get_rule_name(root)]
} 

const compile_program = (root: any) => {
    wc = 0;
    instrs = [];
    return compile(root)
}

// const compile_time_environment_position = (env, x) => {
//     let frame_index = env.length
//     while (value_index(env[--frame_index], x) === -1) {}
//     return [frame_index, 
//             value_index(env[frame_index], x)]
// }

const value_index = (frame : Map<string, any>, x) => {
  for (let i = 0; i < frame.length; i++) {
    if (frame[i] === x) return i
  }
  return -1;
}

// print_tree(tree, 0)