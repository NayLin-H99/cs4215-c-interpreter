import { is_rule, get_text, get_rule_name } from './compiler'
import { compile_expr } from './expr';
import { compile_declaration } from './dcl';

export const compile_stmt = (root: any) => {
    // labeledStatement | compoundStatement | expressionStatement | selectionStatement | iterationStatement | jumpStatement
    return compile_stmt_impl[get_rule_name(root)](root)
}

const if_helper = (root: any) => {
    const e = compile_expr(root.children[2])
    const s1 = compile_stmt(root.children[4])
    let instrs =  [
        ...e,
        {tag: "BR", true_branch: 1, false_branch: s1.length + 2 + 1},
        {tag: "ENTER_BLK"},
        ...s1,
        {tag: "EXIT_BLK"}
    ]
    if (root.childCount > 5) {
        const s2 = compile_stmt(root.children[6])
        instrs.push(
            {tag: "ENTER_BLK"},
            ...s2,
            {tag: "EXIT_BLK"}
        )
    }
    return instrs
}

const blk_helper = (root: any) : any[] => {
    // blockItemList:  blockItem+;
    // blockItem:      statement | declaration;
    let instrs = []
    for (let i = 0; i < root.childCount; i++) {
        if (root.children[i].statement()) {
            instrs.push(...compile_stmt(root.children[i].statement()))
        } else {
            instrs.push(...compile_declaration(root.children[i].declaration()))
        }
    }
    return instrs
}

const while_helper = (root: any) => {
    // While '(' expression ')' statement
    const e = compile_expr(root.children[2])
    const s = compile_stmt(root.children[4])
    return [
        ...e,
        {tag: "BR", true_branch: 1, false_branch: 1 + s.length + 2 + 1},
        {tag: "ENTER_BLK"},
        ...s,
        {tag: "EXIT_BLK"},
        {tag: "BR", jmp: -(1 + s.length + 2 + e.length)}
    ]
}

const for_helper = (root: any) => {
    // For '(' forCondition ')' statement
    // forCondition : (forDeclaration | expression?) ';' forExpression? ';' forExpression?
    // forDeclaration : declarationSpecifiers initDeclaratorList?
    const forCondition = root.children[2]
    const s = compile_stmt(root.children[4])
    let slices = [
        // [(forDeclaration | expression?)], [forExpression?], [forExpression?]
        undefined, undefined, undefined
    ]
    let idx = 0
    for (let i=0; i<forCondition.childCount; i++) {
        if (get_text(forCondition.children[i]) !== ";") {
            slices[idx] = forCondition.children[i]
        } else {
            idx++
        }
    }
    let [init, pred, adv] = slices 
    let i_init = [], i_pred = [], i_adv = [];
    if (init) {
        i_init = get_rule_name(init) === "forDeclaration" ? compile_declaration(init) : compile_expr(init)
    }
    if (pred) i_pred = compile_expr(pred)
    if (adv) i_adv = compile_expr(adv)
    return [
        // ENTER BLOCK
        { tag: "ENTER_BLK" },
        // INIT
        ...i_init,
        // PRED
        ...i_pred,
        // BR to EXIT BLOCK
        { tag: "BR", true_branch: 1, false_branch: s.length + i_adv.length + 2 },
        // STATEMENT
        ...s,
        // ADV
        ...i_adv,
        // BR back to Pred
        { tag: "BR", jmp: - (i_adv.length + s.length + 1 + i_pred.length) },
        // EXIT BLOCK
        { tag: "EXIT_BLK" }
    ]
}

const compile_stmt_impl : Record<string, Function> = {
    statement: (root: any) => {
        return compile_stmt(root.children[0])
    }, 
    labeledStatement: (root: any) => {
        
    },
    compoundStatement: (root: any) => {
        // '{' blockItemList? '}'
        if (root.childCount > 2) {
            return [
                {tag: "ENTER_BLK"},
                ...blk_helper(root.children[1]),
                {tag: "EXIT_BLK"},
            ]
        }
        return []
    },
    expressionStatement: (root: any) => {
        // expression? ';'
        if (root.childCount > 1) {
            return [ 
                ...compile_expr(root.children[0]), 
                {tag: "POP"}
            ]
        }
        return []
    },
    selectionStatement: (root: any) => {
        // 'if' '(' expression ')' statement ('else' statement)? | 'switch' '(' expression ')' statement
        if (get_text(root.children[0]) === "switch") {
            throw Error("switch statement")
        } else {
            return if_helper(root)
        }
    },
    iterationStatement: (root: any) => {
        //  While '(' expression ')' statement 
        // | Do statement While '(' expression ')' ';' 
        // | For '(' forCondition ')' statement
        const first_word = get_text(root.children[0])
        if (first_word == "while") {
            return while_helper(root)
        } else if (first_word == "do") {
            throw Error("do while")
        } else {
            return for_helper(root)
        }
    },
    jumpStatement: (root: any) => {

    },
}