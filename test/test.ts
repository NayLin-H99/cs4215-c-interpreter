import {
    ANTLRErrorListener, CharStreams, CommonToken, 
    CommonTokenStream, RecognitionException, Recognizer, 
    Token
} from "antlr4ts";
import { CLexer } from './generated/CLexer'
import { CParser } from './generated/CParser'
import * as fs from 'fs';
import { instruction, OP, operand, ind, imm, R0, R1, R2, R3, PC, BP, SP, RA } from '../vm/vm'

const file_path: string = './test/test_files/expression.c';
const inputStream = CharStreams.fromString(fs.readFileSync(file_path, 'utf8'));
// const inputStream = CharStreams.fromString("int c = a + b;");
// const inputStream = CharStreams.fromString("int a = 1 + 2;");
const lexer = new CLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CParser(tokenStream);
const tree = parser.compilationUnit()

const get_rule_name = (ctx:any) =>
    CParser.ruleNames[ctx.ruleIndex]

const is_rule = (node:any) => 
    get_rule_name(node) !== undefined

    const print_tree = (root : any, depth : number) => {
    if (!root) return;
    if (is_rule(root)) {
        // console.log("-".repeat(depth * 2) + "RULE: " + get_rule_name(root))
        const rule = get_rule_name(root)
    } else {
        // console.log("-".repeat(depth * 2) + "TEXT: " + root.symbol.text)
    }
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
let frame_idx = 0;
let comp_env: Map<string, any>[] = [];

/**
 * Given a rule node, maps to a corresponding compile function
*/
type comp_map = { [key: string]: (root: any) => void };
const compile_comp: comp_map = {
primaryExpression:
    (root: any) => {
        if (root.Constant() !== undefined) {
            // console.log("CONSTANT: " + root.Constant().symbol.text);
            push_instr({operation: OP.PUSH, operands: [imm(BigInt(root.symbol.text))]});
        } else if (root.Identifier() !== undefined) {
            // console.log("IDENTIFIER: " + root.Identifier().symbol.text)
            // TODO: either just give position of args in comp_env or give the actual val?
            // TODO: check type of val before pushing
            let val = comp_env[frame_idx].get(root.symbol.text)
            // push_instr({operation: OP.PUSH, operands: [imm(BigInt(val))]});
        } else if (root.expression() !== undefined) {
            // console.log("EXPRESSION: " + get_rule_name(root.children[1]))
            compile(root.children[1]);
        } else {
            // console.log("STRING: " + root.StringLiteral())
            // TODO: handle strings
        }
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
        if (root.childCount >= 2) {
            // TODO: handle i.e. 1 + 1 + 1 and operators: '+'|'-'
            compile(root.children[0]);
            compile(root.children[1]);
            push_instr({operation: OP.POP, operands: [R1]});
            push_instr({operation: OP.POP, operands: [R2]});
            push_instr({operation: OP.ADD, operands: [R1, R2]});
        } else {
            compile(root.children[0]);
        }
    },
multiplicativeExpression:
    (root: any) => {
        // TODO: handle i.e. 1 * 2 / 3 and operators: '*'|'/'|'%'
        if (root.childCount >= 2) {
            push_instr({operation: OP.POP, operands: [R1]});
            push_instr({operation: OP.POP, operands: [R2]});
            // push_instr(operation: OP.MULT, operands: [R1, R2]});
        } else {
            compile(root.children[0])
        }
    }
}

const compile = (root: any) => {
    return compile_comp[get_rule_name(root)](root)
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

// const value_index = (frame : Map<string, any>, x:any) => {
//   for (let i = 0; i < frame.length; i++) {
//     if (frame[i] === x) return i
//   }
//   return -1;
// }

// print_tree(tree, 0)