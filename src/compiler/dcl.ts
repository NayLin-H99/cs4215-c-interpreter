import { get_rule_name, get_text } from './compiler'
import { ty, types } from './typesystem'
import { compile_expr } from './expr'
import { compile_stmt } from './stmt'
import { DeclarationContext, ForDeclarationContext, FunctionDefinitionContext } from '../parser/CParser'
import { instruction } from '../evaluator/evaluator'

type decl = { type: ty, varname: string } & {[key in string]: any} 

// helper function for declarations
export function compile_declaration(root: DeclarationContext | ForDeclarationContext): any[] {
    // declaration: declarationSpecifiers initDeclaratorList? ';'

    let instrs : any[] = [];

    let typedecl = handle_declarationSpecifiers(root.declarationSpecifiers());
    if (root.initDeclaratorList && root.initDeclaratorList()) {
        let results = handle_initDeclaratorList(root.initDeclaratorList(), typedecl.type)
        for (let result of results) {
            const {varname, type} = result;
            const init = result.instrs;
            instrs = [
                ...instrs,
                {tag:"DECL", var: { name: varname, ty: type }},
                ...(init ? [...init, {tag: "ASSIGN"}] : []),
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

export function compile_function_defn(root: FunctionDefinitionContext): any[] {
    // functionDefinition: declarationSpecifiers declarator compoundStatement
    const ret_type = handle_declarationSpecifiers(root.declarationSpecifiers())
    const decl = handle_declarator(root.declarator(), ret_type.type)  // return type, varname and params
    const params: any[] = [], param_ty: any[] = []
    decl.params.forEach((p: any) => {
        params.push(p.varname)
        param_ty.push(p.type.type)
    })
    const cmpd_stmt = compile_stmt(root.compoundStatement())
    return [
        { tag: "FUNCTION", fname: decl.varname, rty: decl.type, params: params, param_ty: param_ty },
        { tag: "BR", jmp: cmpd_stmt.length + 1 },
        ...cmpd_stmt
    ]
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

function handle_directDeclarator(root: any, type: any) : decl {
    // directDeclarator : Identifier 
    // | '(' declarator ')' 
    // | directDeclarator '[' IntegerConstant ']' 
    // | directDeclarator '(' parameterList? ')'
    if (root.Identifier && root.Identifier()) {
        const varname = get_text(root.Identifier())
        return {
            type,
            varname
        }
    } else if (root.declarator && root.declarator()) {
        return handle_declarator(root.declarator(), type)
    } else if (root.directDeclarator() && get_text(root.children[1]) === '[') {   
        const val = handle_directDeclarator(root.directDeclarator(), type)
        const num: number = parseInt(get_text(root.children[2]))
        if (num < 0) throw Error("Negative size for arrays declaration")
        const upd_type: ty = {typename: "arr", ty: val.type, n_elems: num}
        let test = {
            type: upd_type,
            varname: val.varname
        }
        return test
    } else if (root.directDeclarator() && get_text(root.children[1]) === '(') {
        const varname = get_text(root.directDeclarator())
        let params = undefined
        if (root.parameterList && root.parameterList()) {
            params = handle_parameterList(root.parameterList())
        }
        return {
            type,
            varname,
            params
        }
    }
    throw Error("not implemented")
}

function handle_parameterList(root: any): decl[] {
    // parameterDeclaration (',' parameterDeclaration)*
    const params = []
    for (let i = 0; i < root.childCount; i += 2) {
        params.push(handle_parameterDeclaration(root.children[i]))
    }
    return params
}

function handle_parameterDeclaration(root: any): decl {
    // declarationSpecifiers declarator
    return handle_declarator(root.children[1], handle_declarationSpecifiers(root.children[0]))
}

/********************************** RHS ***************************************/
function handle_initializer(root: any) : instruction[] {
    // initializer : assignmentExpression | '{' initializerList ','? '}'
    if (root.assignmentExpression) {
        // assignmentExpression should be handled by expr handler
        return compile_expr(root.assignmentExpression())
    } else {
        return handle_initializerList(root);    
    }
}

function handle_initializerList(root: any) : instruction[] {
    // initializerList : designation? initializer (',' designation? initializer)*
    throw Error("Initializer lists are not supported");
}



