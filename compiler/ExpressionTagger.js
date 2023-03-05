import CListener from "../parser/CListener.js";

// <Factor> = <Identifier> | <Literal>

// public Statement visitFactor(FactorContext ctx) {
//     if (ctx.ID() != null)
//         return new Identifier(ctx.ID().getText());
//     else if (ctx.literal() != null)
//         return visit(ctx.literal());
//     return null; // should never happen, factor *must* be either id or literal.
// }

export class ExpressionTagger extends CListener {
	
    // Enter a parse tree produced by CParser#primaryExpression.
	enterPrimaryExpression(ctx) {
        if (ctx.Constant() !== null) {
            ctx.tag = { tag: "CONSTANT", value: ctx.Constant().getText()}
        } else if (ctx.Identifier() !== null) {
            ctx.tag = { tag: "IDENTIFIER", value: ctx.Identifier().getText()}
        } else if (ctx.expression() !== null) {
            ctx.tag = { tag: "EXPRESSION", value: ctx.expression().getText() }
        } else {
            ctx.tag = { tag: "STRINGLITERAL: ", value: ctx.StringLiteral() }
        }
	}

    // Enter a parse tree produced by CParser#postfixExpression.
	enterPostfixExpression(ctx) {
        console.log(ctx.children)
	}

	// Enter a parse tree produced by CParser#argumentExpressionList.
	enterArgumentExpressionList(ctx) {
	}

	// Exit a parse tree produced by CParser#argumentExpressionList.
	exitArgumentExpressionList(ctx) {
	}


	// Enter a parse tree produced by CParser#unaryExpression.
	enterUnaryExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#unaryExpression.
	exitUnaryExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#unaryOperator.
	enterUnaryOperator(ctx) {
	}

	// Exit a parse tree produced by CParser#unaryOperator.
	exitUnaryOperator(ctx) {
	}


	// Enter a parse tree produced by CParser#castExpression.
	enterCastExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#castExpression.
	exitCastExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#multiplicativeExpression.
	enterMultiplicativeExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#multiplicativeExpression.
	exitMultiplicativeExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#additiveExpression.
	enterAdditiveExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#additiveExpression.
	exitAdditiveExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#shiftExpression.
	enterShiftExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#shiftExpression.
	exitShiftExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#relationalExpression.
	enterRelationalExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#relationalExpression.
	exitRelationalExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#equalityExpression.
	enterEqualityExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#equalityExpression.
	exitEqualityExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#andExpression.
	enterAndExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#andExpression.
	exitAndExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#exclusiveOrExpression.
	enterExclusiveOrExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#exclusiveOrExpression.
	exitExclusiveOrExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#inclusiveOrExpression.
	enterInclusiveOrExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#inclusiveOrExpression.
	exitInclusiveOrExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#logicalAndExpression.
	enterLogicalAndExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#logicalAndExpression.
	exitLogicalAndExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#logicalOrExpression.
	enterLogicalOrExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#logicalOrExpression.
	exitLogicalOrExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#conditionalExpression.
	enterConditionalExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#conditionalExpression.
	exitConditionalExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#assignmentExpression.
	enterAssignmentExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#assignmentExpression.
	exitAssignmentExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#assignmentOperator.
	enterAssignmentOperator(ctx) {
	}

	// Exit a parse tree produced by CParser#assignmentOperator.
	exitAssignmentOperator(ctx) {
	}


	// Enter a parse tree produced by CParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#expression.
	exitExpression(ctx) {
	}


	// Enter a parse tree produced by CParser#constantExpression.
	enterConstantExpression(ctx) {
	}

	// Exit a parse tree produced by CParser#constantExpression.
	exitConstantExpression(ctx) {
	}

}