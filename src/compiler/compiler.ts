import {
    CharStreams,
    CommonTokenStream
} from "antlr4ts";
import { CLexer } from '../parser/CLexer'
import { CParser,  } from '../parser/CParser'

import { instruction } from '../evaluator/evaluator'

import { compile_declaration, compile_function_defn } from './dcl'
import { compile_stmt } from './stmt'

export default function parse_and_compile(input:string): instruction[] {
    // reset env

    const inputStream = CharStreams.fromString(input);

    const lexer = new CLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CParser(tokenStream);
    const tree = parser.compilationUnit()
    // console.log(get_text(tree))
    // print_tree(tree, 0)

    compile_program(tree)
    
    return instrs;
}


export const get_rule_name = (ctx:any) : string => CParser.ruleNames[ctx.ruleIndex]

export const is_rule = (node:any) : boolean => get_rule_name(node) !== undefined

export const print_tree = (root : any, depth : number) => {
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
 * Instructions and Compiler will be similar to the homeworks
 */
type compile_fn_ty = (root: any) => void;
type comp_map = Record<string, compile_fn_ty>;

// instrs: instruction array
let instrs : instruction[] = [];

/**
 * Given a rule node, maps to a corresponding compile function
*/
const compile_comp: comp_map = {
compilationUnit: 
    (root: any) => {
        // (statement | externalDeclaration)+ EOF
        for (let i=0; i<root.childCount-1; i++) {
            compile(root.children[i])
        }
    },
statement:
    (root: any) => {
        // labeledStatement | compoundStatement | expressionStatement | selectionStatement | iterationStatement | jumpStatement
        instrs.push(...compile_stmt(root))
    },
externalDeclaration:
    (root: any) => {
        // functionDefinition | declaration | ';'
        compile(root.children[0])
    },
functionDefinition:
    (root: any) => {
        instrs.push(...compile_function_defn(root))
    },
declaration:
    (root: any) => {
        // declarationSpecifiers initDeclaratorList? ';'
        instrs.push(...compile_declaration(root))
    },
}

const compile = (root: any) => {
    return compile_comp[get_rule_name(root)](root);
} 

const compile_program = (root: any) => {
    instrs = [];
    return compile(root);
}

