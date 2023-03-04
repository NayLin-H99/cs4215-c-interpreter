import CListener from "../parser/CListener.js";

// function compile(comp) {
// 	compile_comp[comp.tag](comp)
// }

// const compile_comp = {
// 	PrimaryExpression: comp => {
// 		compile(comp.children[0])
// 	}
// }

export class TestListener extends CListener {
	// Enter a parse tree produced by CParser#primaryExpression.
	enterPrimaryExpression(ctx) {
		console.log(ctx.getText())
	}
}