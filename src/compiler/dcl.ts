import { get_text } from './compiler'
import { ty, types } from './typesystem'
import { compile_expr } from './expr'
import { DeclarationContext, ForDeclarationContext } from '../parser/CParser';



// helper function for declarations
export function compile_declaration(root: DeclarationContext | ForDeclarationContext): any[] {
    // declaration: declarationSpecifiers initDeclaratorList? ';'

    let instrs : any[] = [];

    let typedecl = handle_declarationSpecifiers(root.declarationSpecifiers());
    if (root.initDeclaratorList && root.initDeclaratorList()) {
        let results = handle_initDeclaratorList(root.initDeclaratorList(), typedecl .type)
        for (let result of results) {
            const {varname, type} = result;
            const init = result.instrs;
            instrs = [
                ...instrs,
                {tag:"DECL", var: { name: varname, ty: type }},
                ...(init ? init : []),
                {tag: "ASSIGN"},
                {tag: "POP"},
            ]
        }
    } else {
        // weird champ case of no initializer or multiple decls
        instrs = [
            {tag:"DECL", var: { name: typedecl.varname, ty: typedecl.type }},
        ]
    }
    

    return instrs;
}




/********************************* TYPES **************************************/
function handle_declarationSpecifiers(root: any) : any {
    // declarationSpecifiers: declarationSpecifier+

    let varname = undefined;
    let type = undefined;

    for (let i = 0; i < root.childCount; i++) {
        const result = handle_declarationSpecifier(root.children[i]);
        if (typeof result === "string") {
            varname = result;
        } else {
            type = result;
        }
    }

    return {
        varname,
        type
    }
}

function handle_declarationSpecifier(root: any) : string | ty {
    // declarationSpecifier: storageClassSpecifier | typeSpecifier
    if (root.storageClassSpecifier()) {
        return handle_storageClassSpecifier(root.children[0]);
    } else {
        return handle_typeSpecifier(root.children[0]);
    }
}

function handle_storageClassSpecifier(root: any) : string | ty {
    // storageClassSpecifier: 'typedef';
    throw Error("typedef is not supported");
}

function handle_typeSpecifier(root: any) : string | ty {
    // typeSpecifier: ('void' | 'char' | 'short' | 'int' | 'long' | 'float' | 'double' | 'signed' | 'unsigned' 
    // | structOrUnionSpecifier | enumSpecifier | typedefName);
    if (root.structOrUnionSpecifier()) {
        throw Error("Struct is not supported");
    } else if (root.enumSpecifier()) {
        throw Error("Enum is not supported")
    } else if (root.typedefName()) {
        return get_text(root.typedefName());
    } else {
        return handle_type_words(root.children[0]);
    }
}

function handle_type_words(root: any) : ty {
    const typestr = get_text(root)
    if (types[typestr] === undefined) throw Error("Using undefined type: "+ typestr)
    return types[typestr];
}

/******************************** DCL LST *************************************/
function handle_initDeclaratorList(root: any, type: any) {
    // initDeclaratorList : initDeclarator (',' initDeclarator)*

    let results = [];
    for (let i = 0; i < root.childCount; i += 2) {
        results.push(handle_initDeclarator(root.children[i], type));
        
    }
    return results
}

function handle_initDeclarator(root: any, type: any) {
    // initDeclarator : declarator ('=' initializer)?
    const result = handle_declarator(root.declarator(), type);
    
    if (root.childCount > 1) {
        result.instrs = handle_initializer(root.initializer());
    } else {
        // no RHS?
    }

    return result
}

function handle_declarator(root: any, type: any) {
    // declarator : pointer? directDeclarator

    let result = undefined;

    if (root.pointer()) {
        

        // apply pointer *
        for(let i=0; i<root.pointer().childCount; i++) {
            type = {typename: "pointer", type: type}
        }

        result = handle_directDeclarator(root.children[1], type);
        
    } else {
        result = handle_directDeclarator(root.children[0], type);
    }

    return result
}

function handle_directDeclarator(root: any, type: any) : any {
    // directDeclarator : Identifier 
    // | '(' declarator ')' 
    // | directDeclarator '[' constantExpression? ']' 
    // | directDeclarator '[' DigitSequence? ']'
    // | directDeclarator '(' parameterList ')'
    // | directDeclarator '(' identifierList? ')'
    if (root.Identifier && root.Identifier()) {
        const varname = get_text(root.Identifier())
        return {
            type,
            varname
        }
    } else if (root.declarator && root.declarator()) {
        return handle_declarator(root.declarator(), type)
    } else if (root.directDeclarator && get_text(root.children[1]) === '[') {        
        throw Error("array not supported")
    } else if (root.directDeclarator && get_text(root.children[1]) === '(') {        
        throw Error("function not supported")
    }
    throw Error("not implemented")
}


/********************************** RHS ***************************************/
function handle_initializer(root: any) {
    // initializer : assignmentExpression | '{' initializerList ','? '}'
    if (root.assignmentExpression) {
        // assignmentExpression should be handled by expr handler
        // TODO: HANDLE ASSIGNMENTEXPRESSION
        return compile_expr(root.assignmentExpression())
    } else {
        handle_initializerList(root);    
    }
}

function handle_initializerList(root: any) {
    // initializerList : designation? initializer (',' designation? initializer)*
    throw Error("Struct/Array not supported");
}



