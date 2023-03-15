import { get_text } from './compiler'
import { ty, types, get_type_name } from './typesystem'
import { compile_dcl, compile_assign } from './memory'
import { handle_assignmentExpression } from './expr'
import { instruction } from '../vm/datastructures';


// helper function for declarations
export function compile_declaration(root: any): instruction[] {
    // declaration: declarationSpecifiers initDeclaratorList? ';'
    get_dcls(root);
    return instrs;
}

let instrs: instruction[] = [];
// Use to this to support signedness i.e. 'unsigned' and 'int' are at the same depth from declarationSpecifiers
// type comp_type = {
//     type: ty | undefined,
//     depth: number
// };
// let type: comp_type = {type: undefined, depth: -1};
let curr_type: ty | undefined = undefined;

function reset_dcl_env() {
    curr_type = undefined;
    instrs = [];
}

function get_dcls(root: any) {
    reset_dcl_env();
    // Note that a variable can be hidden under `typedefName` e.g. `int a;`, 
    // otherwise the name would be under `directDeclarator` e.g. `int a, b;`
    return handle_declaration(root);
}

function handle_declaration(root: any) {
    // declaration: declarationSpecifiers initDeclaratorList? ';'
    handle_declarationSpecifiers(root.children[0]);
    if (root.childCount > 1) {
        handle_initDeclaratorList(root.children[1]);
    }
}


/********************************* TYPES **************************************/
function handle_declarationSpecifiers(root: any) {
    // declarationSpecifiers: declarationSpecifier+
    for (let i = 0; i < root.childCount; i++) {
        handle_declarationSpecifier(root.children[i]);
    }
}

function handle_declarationSpecifier(root: any) {
    // declarationSpecifier: storageClassSpecifier | typeSpecifier
    if (root.storageClassSpecifier()) {
        return handle_storageClassSpecifier(root.children[0]);
    } else {
        return handle_typeSpecifier(root.children[0]);
    }
}

function handle_storageClassSpecifier(root: any) {
    // storageClassSpecifier: 'typedef';
    throw Error("typedef is not supported");
}

function handle_typeSpecifier(root: any) {
    // typeSpecifier: ('void' | 'char' | 'short' | 'int' | 'long' | 'float' | 'double' | 'signed' | 'unsigned' 
    // | structOrUnionSpecifier | enumSpecifier | typedefName);
    if (root.structOrUnionSpecifier()) {
        throw Error("Struct is not supported");
    } else if (root.enumSpecifier()) {
        throw Error("Enum is not supported")
    } else if (root.typedefName()) {
        if (curr_type) {
            // meaning type has already been defined, then this is a dcl without a value e.g. `int a;`
            instrs.push(...compile_dcl(get_text(root), curr_type))
        } else {
            throw Error("typedefName is not supported");
        }
    } else {
        handle_type_words(root.children[0]);
    }
}

function handle_type_words(root: any) {
    const typestr = get_text(root)
    switch (typestr) {
        case 'char':
            curr_type = types.char;
            break;
        case 'short':
            curr_type = types.short;
            break;
        case 'int':
            curr_type = types.int;
            break;
        case 'void':
            curr_type = types.tvoid;
            break;
        case 'float':
            curr_type = types.float;
            break;
        case 'double':
            curr_type = types.double;
            break;
        default:
            // 'long' or 'signed' or 'unsigned'
            throw Error("Type word" + typestr + " not supported.");
    }
}

/******************************** DCL LST *************************************/
function handle_initDeclaratorList(root: any) {
    // initDeclaratorList : initDeclarator (',' initDeclarator)*
    for (let i = 0; i < root.childCount; i += 2) {
        handle_initDeclaratorList(root.children[i]);
    }
}

function handle_initDeclarator(root: any) {
    // initDeclarator : declarator ('=' initializer)?
    handle_declarator(root);
    if (root.childCount > 1) {
        handle_initializer(root);
    } else {
        // no RHS?
    }
}

function handle_declarator(root: any) {
    // declarator : pointer? directDeclarator
    if (root.childCount > 1) {
        if (!curr_type) throw Error ("Pointer of unknown type"); // Should not happen but JIC
        curr_type = {typename: "pointer", type: curr_type}
        handle_directDeclarator(root.children[1]);
    } else {
        handle_directDeclarator(root.children[0]);
    }
}

function handle_directDeclarator(root: any) {
    // directDeclarator : Identifier 
    // | '(' declarator ')' 
    // | directDeclarator '[' constantExpression? ']' 
    // | directDeclarator '[' DigitSequence? ']'
    // | directDeclarator '(' parameterList ')'
    // | directDeclarator '(' identifierList? ')'
    if (root.Identifier()) {
        if (!curr_type) throw Error("Type still not defined at declarator"); // Should not happen but JIC
        instrs.push(...compile_dcl(get_text(root), curr_type))
    } else if (root.childCount === 3) {
        handle_declarator(root.children[1]);
    } else if (get_text(root.children[1]) === '[') {
        throw Error("Arrays are not supported");
    } else {
        // TODO: function calls
        throw Error("Function Calls on LHS are not supported");
    }
}


/********************************** RHS ***************************************/
function handle_initializer(root: any) {
    // initializer : assignmentExpression | '{' initializerList ','? '}'
    if (root.assignmentExpression()) {
        // assignmentExpression should be handled by expr handler
        // TODO: HANDLE ASSIGNMENTEXPRESSION
        instrs.push(...handle_assignmentExpression(get_text(root)));
    } else {
        handle_initializerList(root);    
    }
}

function handle_initializerList(root: any) {
    // initializerList : designation? initializer (',' designation? initializer)*
    throw Error("Struct/Array not supported");
}


