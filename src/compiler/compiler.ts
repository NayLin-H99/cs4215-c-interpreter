import {
    CharStreams,
    CommonTokenStream
} from "antlr4ts";
import { CLexer } from '../parser/CLexer'
import { CParser,  } from '../parser/CParser'

import { instruction, OP, operand, ind, imm, R0, R1, R2, R3, PC, BP, SP, RA } from '../vm/datastructures'

import { get_ty_size } from './typesystem'

import { env, reset_memory_env, get_variable, get_variable_operand, enter_block, exit_block, enter_function, exit_function, print_env } from './memory'

import { compile_declaration } from './dcl2'

const file_path: string = './test/test_files/expression.c';
// const inputStream = CharStreams.fromString(fs.readFileSync(file_path, 'utf8'));
// const inputStream = CharStreams.fromString("int c = a + b;");


export default function parse_and_compile(input:string) {
    // reset env
    reset_memory_env();

    const inputStream = CharStreams.fromString(input);
    const lexer = new CLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CParser(tokenStream);
    const tree = parser.compilationUnit()
    console.log(get_text(tree))
    
    compile_program(tree)

    // print the environment
    print_env();
    
    return instrs;
}


export const get_rule_name = (ctx:any) => CParser.ruleNames[ctx.ruleIndex]

export const is_rule = (node:any) => get_rule_name(node) !== undefined

const print_tree = (root : any, depth : number) => {
    if (!root) return;
    if (is_rule(root)) {
        console.log("-".repeat(depth * 2) + "RULE: " + get_rule_name(root))
        const rule = get_rule_name(root)
    } else {
        console.log("-".repeat(depth * 2) + "TEXT: " + root.symbol.text)
    }
    if (root.children)
        root.children.forEach((c:any) => print_tree(c, depth + 1))
}

export function get_text(root:any) : string {
    if(!is_rule(root)) return root.symbol.text;
    let s = []
    for (let i=0; i<root.childCount; i++) {
        s.push(get_text(root.children[i]))
    }
    return s.join(" ")
}

/**
 * Instructions and Compile Env will be similar to the homeworks
 */
type compile_fn_ty = (root: any) => void;
type comp_map = Record<string, compile_fn_ty>;

// wc: write counter
let wc = 0;
// instrs: instruction array
let instrs : instruction[] = [];
function push_instr(...instr_lst : instruction[]) {
    instr_lst.forEach(i => instrs[wc++] = i)
}

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
const compile_comp: comp_map = {
primaryExpression:
    (root: any) => {
        if (root.Constant() !== undefined) {
            // console.log("CONSTANT: " + root.Constant().symbol.text);
            push_instr({operation: OP.PUSH, operands: [imm(BigInt(root.Constant().symbol.text))]});
        } else if (root.Identifier() !== undefined) {
            // console.log("IDENTIFIER: " + root.Identifier().symbol.text)
            const id = root.Identifier().symbol.text
            const ty = get_variable(id)?.ty
            if (ty === undefined) throw Error("Variable not defined");
            const opr = get_variable_operand(id)
            push_instr(
                {operation: OP.MOV, operands: [imm(8), R0, imm(get_ty_size(ty)), opr]},
                {operation: OP.PUSH, operands: [R0]}
            )
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
        const ins = compile_declaration(root)
        instrs = [
            ...instrs,
            ...ins
        ]
    },
assignmentExpression:
    (root: any) => {
        // conditionalExpression | Identifier assignmentOperator assignmentExpression | DigitSequence // for
        // compile(root.children[0])
        if (root.childCount >= 2) {
            if (get_text(root.children[1]) !== "=") throw Error ("assignment op not supported yet. TODO")
            // Identifier assignmentOperator assignmentExpression
            const lhs = get_variable(get_text(root.children[0]));
            if (lhs === undefined) throw Error("variable not defined");
            compile(root.children[2]);
            push_instr(
                {operation: OP.POP, operands: [R0]},
                {operation: OP.MOV, operands: [imm(get_ty_size(lhs.ty)), ind(BP, imm(-lhs.offset)), imm(8), R0]},
                {operation: OP.PUSH, operands: [R0]},
            )
        } else {
            // conditionalExpression | DigitSequence
            if (!is_rule(root.children[0])) throw Error("Expanded to DigitSequence")
            compile(root.children[0])
        }
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
    // console.log(get_rule_name(root))
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
