import { is_rule, get_text, get_rule_name } from './compiler'
import { compile_expr } from './expr';
import { compile_declaration } from './dcl';
import { instruction } from '../evaluator/evaluator'

export const compile_stmt = (root: any) : instruction[] => {
    // labeledStatement | compoundStatement | expressionStatement | selectionStatement | iterationStatement | jumpStatement
    return compile_stmt_impl[get_rule_name(root)](root)
}

/**************************** GENERAL HELPERS **********************************/
// iterates through the instructions with matching tags and returns lst of idx
const scan_tag = (s: instruction[], tag: string) : number[] => {
    let res: number[] = []
    for (let i = 0; i < s.length; i++) if (s[i].tag === tag) res.push(i)
    return res;
}

// checks instructions for depth of nesting
const count_blk_nesting = (s: instruction[], idx: number): number => {
    let cnt: number = 0
    for (let i = 0; i < idx; i++) if (s[i].tag === "ENTER_BLK") cnt+= 1
    return cnt
}

const blk_helper = (root: any) : instruction[] => {
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

/***************************** CONDITIONALS ***********************************/
const if_helper = (root: any) : instruction[] => {
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


/********************************* LOOPS **************************************/
const jmp_stmt_helper = (s: instruction[], adv: instruction[] | undefined) => {
    // handling break
    const break_idxs = scan_tag(s, "BREAK")
    for (let i = 0; i < break_idxs.length; i++) {
        const break_idx = break_idxs[i]
        s[break_idx - 1].n = count_blk_nesting(s, break_idx) + 1    // update POP_ENV instr
        s[break_idx] = {tag: "BR", jmp: s.length - break_idx + 2 }      // replace BREAK instr
        if (adv) s[break_idx].jmp += adv.length                       // need to skip adv section for for loops
    }
    
    // handling continue
    const cont_idxs = scan_tag(s, "CONTINUE")
    for (let i = 0; i < cont_idxs.length; i++) {
        const cont_idx = cont_idxs[i]
        s[cont_idx - 1].n = count_blk_nesting(s, cont_idx)          // update POP_ENV instr
        s[cont_idx] = {tag: "BR", jmp: s.length - cont_idx}          // replace CONTINUE instr
    }
}

const while_helper = (root: any) : instruction[] => {
    // While '(' expression ')' statement
    const e = compile_expr(root.children[2])
    const s = compile_stmt(root.children[4])
    jmp_stmt_helper(s, undefined);
    return [
        ...e,
        {tag: "BR", true_branch: 1, false_branch: 1 + s.length + 2 + 1},
        {tag: "ENTER_BLK"},
        ...s,
        {tag: "EXIT_BLK"},
        {tag: "BR", jmp: -(1 + s.length + 2 + e.length)}
    ]
}

const for_helper = (root: any) : instruction[] => {
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
        } else {  // ';'
            idx++
        }
    }
    let [init, pred, adv] = slices 
    let i_init : instruction[] = [], i_pred : instruction[] = [], i_adv : instruction[] = [];
    if (init) {
        if (get_rule_name(init) === "forDeclaration") {
            i_init = compile_declaration(init)
        } else {
            i_init = compile_expr(init)
            if (i_init) i_init.push({tag:"POP"})
        }
    }
    if (pred) i_pred = compile_expr(pred)
    if (adv) i_adv = compile_expr(adv) 
    if (i_adv) i_adv.push({tag:"POP"})
    jmp_stmt_helper(s, i_adv)
    
    return [
        // ENTER BLOCK
        { tag: "ENTER_BLK" },
        // INIT
        ...i_init,
        // PRED
        ...i_pred,
        // BR to EXIT BLOCK
        { tag: "BR", true_branch: 1, false_branch: s.length + i_adv.length + 2  },
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

/******************************************************************************/

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
        const first = get_text(root.children[0]) // either continue, break or return
        if (first === "return") {
            // 'return' expression? ';'
            const instrs = []
            if (root.expression && root.expression()) {
                instrs.push(...compile_expr(root.expression()))
                instrs.push({tag: "RET"})
            } else {
                instrs.push({tag: "RET", is_void: true})
            }
            
            return instrs
        } else {
            // 'continue' | 'break' ';'
            // two dummy instructions which will be updated, check `while_helper` or `for_helper`
            return [
                {tag: "POP_ENV"}, 
                {tag: first.toUpperCase()}
            ]
        }
    },
}