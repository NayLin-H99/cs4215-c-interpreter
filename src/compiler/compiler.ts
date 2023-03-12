import {
    ANTLRErrorListener, CharStreams, CommonToken, 
    CommonTokenStream, RecognitionException, Recognizer, 
    Token
} from "antlr4ts";
import { CLexer } from '../parser/CLexer'
import { CParser, ExternalDeclarationContext } from '../parser/CParser'

import { instruction, OP, operand, ind, imm, R0, R1, R2, R3, PC, BP, SP, RA } from '../vm/datastructures'
import { instruction_to_string } from "../vm/vm"

import { primitives, arr, struct, namedT, ty, int, char, get_type_name } from './typesystem'

const file_path: string = './test/test_files/expression.c';
// const inputStream = CharStreams.fromString(fs.readFileSync(file_path, 'utf8'));
// const inputStream = CharStreams.fromString("int c = a + b;");


export default function parse_and_compile(input:string) {
    // reset env
    comp_env = [{ next_frame: -1, prev_frame: -1, entries: [] }]
    frame_idx = 0

    const inputStream = CharStreams.fromString(input);
    const lexer = new CLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CParser(tokenStream);
    const tree = parser.compilationUnit()
    console.log(get_text(tree))
    
    compile_program(tree)

    console.log(JSON.stringify(comp_env))
    
    return instrs;
}


const get_rule_name = (ctx:any) => CParser.ruleNames[ctx.ruleIndex]

const is_rule = (node:any) => get_rule_name(node) !== undefined

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
type compile_fn_ty = (root: any) => void;
type comp_map = Record<string, compile_fn_ty>;
type dcl_entry = {
    name: string    // name of variable
    type: ty        // type of variable
}
type frame = {
    next_frame: number      // idx of the next frame
    prev_frame: number      // idx of the prev frame (nested)
    entries: dcl_entry[]    // dcl entries in current frame
}

// types and corresponding sizes
const types: Record<string, ty> = {
    int: {typename:"int", size:8},
    short: {typename:"short", size: 2},
    float: {typename:"float", size: 8},
    double: {typename:"double", size: 8},
    char: {typename:"char", size: 1},
    void: {typename:"void", size: 1}
}

function get_type_info(type_spec: string): ty {
    // check if type exists
    if (types[type_spec] !== undefined) {
        return types[type_spec];
    } else {
        throw Error("Undefined type: " + type_spec);
    }   
}

// comp_env: compile env (an array of frames that each contain dcls/params mappings)
let frame_idx = 0;
let comp_env: frame[] = [];
comp_env[frame_idx] = { next_frame: -1, prev_frame: -1, entries: [] }

function get_var(name:string, curr_idx:number) : dcl_entry | undefined {
    if (curr_idx < 0) return undefined;
    const found = comp_env[curr_idx].entries.find(dcl => dcl.name === name);
    if (found) return found;
    return get_var(name, comp_env[curr_idx].prev_frame);
}

function is_repeated_dcl(name: string) : boolean {
    return get_var(name, frame_idx) !== undefined;
}


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

// helper function for declarations
function compile_dcls(root: any) {
    // declaration: declarationSpecifiers initDeclaratorList? ';'
    const type_info = compile_dcl_spec(root.children[0]);
    if (type_info === undefined) return;
    // if (root.initDeclaratorList() !== undefined) {
    const value = compile_dcls_lst(root.children[1], type_info);
    // }
}

function compile_dcl_spec(root: any) : ty | undefined {
    // declarationSpecifiers: declarationSpecifier+
    // declarationSpecifier: storageClassSpecifier | typeSpecifier
    if (root.children[0].storageClassSpecifier() !== undefined) {
        // "typedef <type_spec> <name>"
        throw Error("struct / typedef not implemented")
        const type_spec = get_text(root).split(' ').slice(1);
        const new_type_name = type_spec.pop();
        if (type_spec[0] === "struct") {
            // const new_type : struct = {
            //     typename: "struct",
            //     structname: new_type_name,
            //     fields, 
            //     fieldnames
            // }
        } else {
            // const new_type : namedT
        }
    } else {
        if (root.childCount === 1) {
            return get_type_info(get_text(root.children[0].typeSpecifier()));
        }

        const declaration = get_text(root).split(" ");
        const name = declaration.pop();
        if (name === undefined) throw Error("This should not happen but name is undefined.")
        
        const type_spec = declaration.join(" ");
        
        declare_var(name, get_type_info(type_spec))
    }
}

function declare_var(name:string, type:ty) {
    if (is_repeated_dcl(name)) throw Error("Repeated declaration of variable " + name);
    comp_env[frame_idx].entries.push({
        name,
        type
    })
}

function get_text(root:any) : string {
    if(!is_rule(root)) return root.symbol.text;
    let s = []
    for (let i=0; i<root.childCount; i++) {
        s.push(get_text(root.children[i]))
    }
    return s.join(" ")
}

function compile_dcls_lst(root: any, type_info: ty) {
    // initDeclaratorList: initDeclarator (',' initDeclarator)*
    // initDeclarator: declarator ('=' initializer)?
    // declarator: pointer? directDeclarator
    // directDeclarator: Identifier
    // |   '(' declarator ')'
    // |   directDeclarator '[' constantExpression? ']'
    // |   directDeclarator '[' DigitSequence? ']'
    // |   directDeclarator '(' parameterList ')'
    // |   directDeclarator '(' identifierList? ')'
    for (let i = 0; i < root.childCount; i += 2) {
        const c = root.children[i]; // initDeclarator
        let new_ent: dcl_entry;
        declare_var(get_text(c.children[0]), type_info)

        // if (c.childCount <= 1) {
        //     // declarator -> reserve space for default value
        // } else {
        //     // declarator = initializer -> reserve space and compile instr for value

        // }
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
            // TODO: either just give position of args in comp_env or give the actual val?
            // TODO: check type of val before pushing
            // let val = comp_env[frame_idx].get(root.Identifier().symbol.text)
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
        compile_dcls(root)
    },
// declarationSpecifiers:
//     (root: any) => {
//         // for (let i=0; i<root.childCount; i++) {
//         //     compile(root.children[i])
//         // }
//     },
// initDeclaratorList:
//     (root: any) => {
//         // initDeclarator (',' initDeclarator)*
//         if (root.childCount >= 2) {
//             // more than one dcl
//             for (let i = 0; i < root.childCount; i += 2) {
//                 compile(root.children[i]);
//             }
//         } else {
//             compile(root.children[0]);
//         }
//     },
// initDeclarator:
//     (root: any) => {
//         // declarator ('=' initializer)?
//         compile(root.children[0]);  // declarator
//         compile(root.children[2]);  // initializer
//     },
// declarator:
//     (root: any) => {
//         // pointer? directDeclarator
//         // TODO: Support pointer
//         compile(root.children[0]);  // assuming only directDeclarator
//     },
// directDeclarator:
//     (root: any) => { 
//         // Identifier | '(' declarator ')' | directDeclarator '[' DigitSequence? ']' 
//         // | directDeclarator '(' parameterList ')'s | directDeclarator '(' identifierList? ')'
//         if (root.childCount >= 2) {
//             //    '(' declarator ')'
//             //     directDeclarator '[' constantExpression? ']'
//             //     directDeclarator '[' DigitSequence? ']'
//             //     directDeclarator '(' parameterList ')'s
//             //     directDeclarator '(' identifierList? ')'
//         } else {
//             //     Identifier
//             compile(root.children[0]);
//         }

//     },
initializer:
    (root: any) => {
        // assignmentExpression
        // |   '{' initializerList ','? '}'
        compile(root.children[0])
    },
assignmentExpression:
    (root: any) => {
        // conditionalExpression | unaryExpression assignmentOperator assignmentExpression | DigitSequence // for
        // compile(root.children[0])
        if (root.childCount >= 2) {
            // unaryExpression assignmentOperator assignmentExpression
            // compile(root.children[0]);
            // compile(root.children[2]);
        } else {
            // conditionalExpression | DigitSequence
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
