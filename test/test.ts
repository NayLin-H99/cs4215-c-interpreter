import {
    ANTLRErrorListener, CharStreams, CommonToken, 
    CommonTokenStream, RecognitionException, Recognizer, 
    Token
} from "antlr4ts";
import { CLexer } from './generated/CLexer'
import { CParser, ExternalDeclarationContext } from './generated/CParser'
import * as fs from 'fs';
import { instruction, OP, operand, ind, imm, R0, R1, R2, R3, PC, BP, SP, RA } from '../vm/datastructures'
import { instruction_to_string } from "../vm/vm"

const file_path: string = './test/test_files/expression.c';
// const inputStream = CharStreams.fromString(fs.readFileSync(file_path, 'utf8'));
// const inputStream = CharStreams.fromString("int c = a + b;");
const inputStream = CharStreams.fromString("int a = 1 + (2 - 3) * 4 - 5 / 6;");
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
        if (get_rule_name(root) === "additiveExpression") {
            console.log("ADD EXPRESSION");
            console.log(root.childCount)
            // console.log("CHILD 0")
            // console.log(get_rule_name(root.children[0]))
            // console.log("CHILD 1")
            // console.log(root.children[1].symbol.text)
            // console.log("CHILD 2")
            // console.log(get_rule_name(root.children[2]))
        }
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
let instrs : instruction[] = [];
function push_instr(...instr_lst : instruction[]) {
    instr_lst.forEach(i => instrs[wc++] = i)
}
// comp_env: compile env (an array of frames that each contain dcls/params mappings)
let frame_idx = 0;
let comp_env: Map<string, any>[] = [];

// helper function for additiveExpression and multiplicativeExpression
function binop_instrs(root: any) {
    const BINOP : Record<string, OP> = {
        "+" : OP.ADD,
        "-" : OP.SUB,
        "*" : OP.MULT,
        "/" : OP.DIV,
        "%" : OP.MOD
    }

    compile(root.children[0]);
    if (root.childCount >= 2) {
        for (let i = 1; i < root.childCount; i += 2) {
            compile(root.children[i + 1]);
            push_instr(
                {operation: OP.POP, operands: [R2]},
                {operation: OP.POP, operands: [R1]},
                {operation: BINOP[root.children[i].symbol.text], operands: [R0, R1, R2]},
                {operation: OP.PUSH, operands: [R0]}
            );
        }
    }
}


/**
 * Given a rule node, maps to a corresponding compile function
*/
type compile_fn_ty = (root: any) => void;
type comp_map = Record<string, compile_fn_ty>;
const compile_comp: comp_map = {
primaryExpression:
    (root: any) => {
        if (root.Constant() !== undefined) {
            // console.log("CONSTANT: " + root.Constant().symbol.text);
            push_instr({operation: OP.PUSH, operands: [imm(BigInt(root.Constant().symbol.text))]});
        } else if (root.Identifier() !== undefined) {
            // console.log("IDENTIFIER: " + root.Identifier().symbol.text)
            // TODO: either just give position of args in comp_env or give the actual val?
            // TODO: check type of val before pushing
            let val = comp_env[frame_idx].get(root.Identifier().symbol.text)
            // push_instr({operation: OP.PUSH, operands: [imm(BigInt(val))]});
        } else if (root.expression() !== undefined) {
            // console.log("EXPRESSION: " + get_rule_name(root.children[1]))
            compile(root.children[1]);
        } else {
            // console.log("STRING: " + root.StringLiteral())
            // TODO: handle strings
        }
    },
expression: 
    (root: any) => {
        // assignmentExpression (',' assignmentExpression)*
        compile(root.children[0])
    },
additiveExpression:
    (root: any) => {
        // multiplicativeExpression (('+'|'-') multiplicativeExpression)*
        binop_instrs(root);
    },
multiplicativeExpression:
    (root: any) => {
        // castExpression (('*'|'/'|'%') castExpression)*
        binop_instrs(root);
    },
castExpression:
    (root: any) => {
        // '(' typeName ')' castExpression | unaryExpression
        if (root.childCount >= 2) {
            // '(' typeName ')' castExpression
        } else {
            // unaryExpression
            compile(root.children[0])
        }
    },
unaryExpression:
    (root: any) => {
        // ('++' |  '--' | 'sizeof')* (postfixExpression | unaryOperator castExpression | ('sizeof') '(' typeName')')
        if (root.childCount > 1) throw Error("NOT IMPLEMENTED: unaryExpression")
        if (root.postfixExpression !== undefined) {
            // postfixExpression
            compile(root.children[root.childCount - 1])
            for (let i = 0; i < root.childCount - 1; i++) {
                // POP
                // do opr
                // PUSH
            }
        } else if (root.castExpression !== undefined) {
            // unaryOperator castExpression
            throw Error("NOT IMPLEMENTED: unaryExpression")
        } else {
            // typeName
            throw Error("NOT IMPLEMENTED: unaryExpression")
        }
    },
postfixExpression:
    (root: any) => {
        // (primaryExpression) ('[' expression ']' | '(' argumentExpressionList? ')'| ('.' | '->') Identifier | ('++' | '--'))*
        if (root.childCount === 1) {
            compile(root.children[0]);
        }
    },
compilationUnit: 
    (root: any) => {
        // externalDeclaration+ EOF
        for (let i=0; i<root.childCount-1; i++) {
            compile(root.children[i])
        }
    },
externalDeclaration:
    (root: any) => {
        // functionDefinition | declaration | ';'
        // if (root.children[0].symbol.text === ";") return;
        compile(root.children[0])
    },
declaration:
    (root: any) => {
        // declarationSpecifiers initDeclaratorList? ';'
        compile(root.children[1])
    },
declarationSpecifiers:
    (root: any) => {
        // for (let i=0; i<root.childCount; i++) {
        //     compile(root.children[i])
        // }
    },
initDeclaratorList:
    (root: any) => {
        // initDeclarator (',' initDeclarator)*
        compile(root.children[0]);
    },
initDeclarator:
    (root: any) => {
        // declarator ('=' initializer)?
        compile(root.children[2]);
    },
declarator:
    (root: any) => {
        // pointer? directDeclarator
    },
directDeclarator:
    (root: any) => { 
        //     Identifier
        // |   '(' declarator ')'
        // |   directDeclarator '[' DigitSequence? ']'
        // |   directDeclarator '(' parameterList ')'
        // |   directDeclarator '(' identifierList? ')'
    },
initializer:
    (root: any) => {
        // assignmentExpression
        // |   '{' initializerList ','? '}'
        compile(root.children[0])
    },
assignmentExpression:
    (root: any) => {
        // conditionalExpression
        // |   unaryExpression assignmentOperator assignmentExpression
        // |   DigitSequence // for
        compile(root.children[0])
    },
conditionalExpression:
    (root: any) => {
        // logicalOrExpression ('?' expression ':' conditionalExpression)?
        compile(root.children[0])
    },
logicalOrExpression:
    (root: any) => {
        // logicalAndExpression ( '||' logicalAndExpression)*
        compile(root.children[0])
    },
logicalAndExpression:
    (root: any) => {
        // inclusiveOrExpression ('&&' inclusiveOrExpression)*
        compile(root.children[0])
    },
inclusiveOrExpression:
    (root: any) => {
        // exclusiveOrExpression ('|' exclusiveOrExpression)*
        compile(root.children[0])
    },
exclusiveOrExpression:
    (root: any) => {
        // andExpression ('^' andExpression)*
        compile(root.children[0])
    },
andExpression:
    (root: any) => {
        // equalityExpression ( '&' equalityExpression)*
        compile(root.children[0])
    },
equalityExpression:
    (root: any) => {
        // relationalExpression (('=='| '!=') relationalExpression)*
        compile(root.children[0])
    },
relationalExpression:
    (root: any) => {
        // shiftExpression (('<'|'>'|'<='|'>=') shiftExpression)*
        compile(root.children[0])
    },
shiftExpression:
    (root: any) => {
        // additiveExpression (('<<'|'>>') additiveExpression)*
        compile(root.children[0])
    },
}

const compile = (root: any) => {
    console.log(get_rule_name(root))
    return compile_comp[get_rule_name(root)](root);
} 

const compile_program = (root: any) => {
    wc = 0;
    instrs = [];
    return compile(root);
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

compile_program(tree)
instrs.map(instruction_to_string).forEach(i => console.log(i))
// print_tree(tree, 0)