import { is_rule, get_text, get_rule_name } from './compiler'


export function compile_expr(root:any) {
    console.log(get_rule_name(root))
    return compile_expr_impl[get_rule_name(root)](root);
}


// binary op follows the same pattern
const binary_helper = (root:any) => {
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


const compile_expr_impl : Record<string, Function> = {
    assignmentExpression: (root:any) => {
        if (root.conditionalExpression) {
            return compile_expr(root.conditionalExpression());
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
        const first = compile_expr(root.children[0]);
        if (root.childCount === 1) return first;
    },
    postfixExpression: (root:any) => {
        const first = compile_expr(root.children[0]);
        if (root.childCount === 1) return first;
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


