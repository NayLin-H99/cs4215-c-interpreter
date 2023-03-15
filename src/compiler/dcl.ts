import { get_text } from './compiler'
// alpha function
function compile_declarator(root:any) {
    const get_id_dd = (node:any) : string => {
        if (node.Identifier && node.Identifier()) {
            return get_text(node.Identifier())
        }
        if (node.directDeclarator && node.directDeclarator()) {
            return get_id_dd(node.directDeclarator())
        }
        if (node.declarator && node.declarator()) return get_id_d(node.declarator())
        throw Error("die die die ")
    }

    const get_id_d = (node:any) : string => {
        //console.log("rule now: " + get_rule_name(node) + " text: " + get_text(node) + "child count" + node.childCount)
        if (node === undefined) throw Error("die")

        if (node.directDeclarator) {
            const dctx : DirectDeclaratorContext = node.children[node.childCount-1] 
            return get_id_dd(dctx)
        }
        console.log("the fuck is this " + get_rule_name(node))
        throw Error("fuck")
    }
    console.log("compiling " + get_text(root))
    const id = get_id_d(root)
    console.log("id is " + id)
}