"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const CLexer_1 = require("./generated/CLexer");
const CParser_1 = require("./generated/CParser");
const inputStream = antlr4ts_1.CharStreams.fromString("int a = 1 + 2;");
const lexer = new CLexer_1.CLexer(inputStream);
const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
const parser = new CParser_1.CParser(tokenStream);
const tree = parser.compilationUnit();
console.log(tree);
const get_rule_name = (ctx) => CParser_1.CParser.ruleNames[ctx.ruleIndex];
const is_rule = (node) => get_rule_name(node) !== undefined;
const print_tree = (root, depth) => {
    if (!root)
        return;
    if (is_rule(root)) {
        console.log("-".repeat(depth * 2) + get_rule_name(root));
        const rule = get_rule_name(root);
    }
    else
        console.log("-".repeat(depth * 2) + root.symbol.text);
    if (root.children)
        root.children.forEach((c) => print_tree(c, depth + 1));
};
const compile = (root) => {
};
let wc;
let instrs;
//# sourceMappingURL=test.js.map