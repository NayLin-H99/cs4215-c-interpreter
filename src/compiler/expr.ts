import { is_rule, get_text, get_rule_name } from './compiler'
import { instruction } from '../evaluator/evaluator'


export function compile_expr(root:any) : instruction[] {
    return compile_expr_impl[get_rule_name(root)](root);
}


// binary op follows the same pattern
const binary_helper = (root:any) : instruction[] => {
    const first = compile_expr(root.children[0]);
    if (root.childCount === 1) return first;
    let instrs = first;
    for (let i=1; i<root.childCount - 1; i += 2) {
        const op = get_text(root.children[i])
        const next_expr = root.children[i+1]
        instrs = [
            ...instrs,
            ...compile_expr(next_expr),
            {tag: "BINOP", op }
        ]
    }
    return instrs;
}

const assn_helper = (root: any) : instruction[] => {
    let instrs = []
    const e1 = compile_expr(root.children[0])
    const e2 = compile_expr(root.children[2])
    const op = get_text(root.children[1]).slice(0, -1) // strip the last '=' symbol
    if (op) { 
        instrs.push(
            ...e1,
            { tag: "COPY" }, 
            ...e2,
            { tag: "BINOP", op },
            { tag: "ASSIGN" }
        )
    } else {
        instrs.push(
            ...e1,
            ...e2,
            { tag: "ASSIGN" }
        )
    }

    return instrs
}

const base_expr_helper = (root: any) : instruction[] => {
    let instrs : any[] = []
    for (let i=0; i < root.childCount; i += 2) {
        instrs.push(...compile_expr(root.children[i]))
        instrs.push({tag: "POP"})
    }
    instrs.pop()
    return instrs
}

const arg_lst_helper = (root: any) : instruction[] => {
    // i.e. generate instructions to load the params
    // primaryExpression '(' argumentExpressionList? ')'
    // argumentExpressionList: assignmentExpression (',' assignmentExpression)*
    const instrs: any = []
    if (!root) return instrs
    for (let i = 0; i < root.childCount; i += 2) {
        instrs.push(...compile_expr(root.children[i]))
    }
    return instrs
}

const compile_expr_impl : Record<string, Function> = {
    expression: (root:any) => {
        // assignmentExpression (',' assignmentExpression)*
        return base_expr_helper(root)
    },
    forExpression: (root: any) => {
        // assignmentExpression (',' assignmentExpression)*
        return base_expr_helper(root)
    },
    assignmentExpression: (root:any) => {
        // conditionalExpression | unaryExpression assignmentOperator assignmentExpression | DigitSequence // for
        if (root.conditionalExpression && root.conditionalExpression()) {
            return compile_expr(root.conditionalExpression());
        } else {
            return assn_helper(root);
        }
    },
    conditionalExpression: (root:any) => {
        const first = compile_expr(root.children[0]);
        if (root.childCount === 1) return first;
    },
    logicalOrExpression: binary_helper,
    logicalAndExpression: binary_helper,
    inclusiveOrExpression: binary_helper,
    exclusiveOrExpression: binary_helper,
    andExpression: binary_helper,
    equalityExpression: binary_helper,
    relationalExpression: binary_helper,
    shiftExpression: binary_helper,
    additiveExpression: binary_helper,
    multiplicativeExpression: binary_helper,
    castExpression: (root:any) => {
        const first = compile_expr(root.children[0]);
        if (root.childCount === 1) return first;
    },
    unaryExpression: (root:any) => {
        // ('++' |  '--' |  'sizeof')* 
        // (postfixExpression | unaryOperator castExpression | ('sizeof') '(' typeName ')')
        let prefix_operations = ["++", "--", "sizeof"]
        if (prefix_operations.includes(get_text(root.children[0]))) {
            throw Error("prefix operations not implemented")
        }

        if (root.postfixExpression && root.postfixExpression()) {
            return compile_expr(root.postfixExpression())
        }

        if (root.castExpression && root.castExpression()) {
            let instrs = compile_expr(root.castExpression())
            const op = get_text(root.unaryOperator())
            instrs.push({tag:"UNOP", op})
            return instrs
        }

        throw Error("Some unary expression not implemented")
    },
    postfixExpression: (root:any) => {
        // ( primaryExpression ) 
        // ('[' expression ']' | '(' argumentExpressionList? ')' | ('.' | '->') Identifier  | ('++' | '--') )*
        if (root.childCount === 1) return compile_expr(root.children[0])
        else if (get_text(root.children[1]) === '(') {
            return [
                ...arg_lst_helper(root.children[2]),
                {tag: "CALL", fname: get_text(root.children[0])}
            ]
        } else if (get_text(root.children[1]) === '[') {
            // _ [ _ ] [ _ ] ...
            let instrs = compile_expr(root.children[0])
            // for (let i = 2; i < root.childCount; i += 3) {
            //     instrs.push(
            //         ...compile_expr(root.children[i]),
            //         {tag: "BINOP", op: "+"}
            //     )
            // }
            for (let i = root.childCount - 2; i > 0; i -= 3) {
                instrs.push(
                    ...compile_expr(root.children[i]),
                    {tag: "BINOP", op: "+"},
                    {tag: "UNOP", op: "*"}
                )
            }
            return instrs
        } else {
            throw Error("Not supported postfixExpression")
        }
    },
    primaryExpression: (root:any) => {
        if (root.Constant()) {
            return [{tag:"LDC", value: Number(get_text(root.Constant()))}]
        } else if (root.Identifier()) {
            return [{tag:"LDS", name: get_text(root.Identifier())}]
        } else if (root.expression()) {
            return compile_expr(root.expression())
        } else {
            throw Error("string literals not supported");
        }
    },
}


