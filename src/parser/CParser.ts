// Generated from test/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CParser extends Parser {
	public static readonly Auto = 1;
	public static readonly Break = 2;
	public static readonly Case = 3;
	public static readonly Char = 4;
	public static readonly Const = 5;
	public static readonly Continue = 6;
	public static readonly Default = 7;
	public static readonly Do = 8;
	public static readonly Double = 9;
	public static readonly Else = 10;
	public static readonly Enum = 11;
	public static readonly Extern = 12;
	public static readonly Float = 13;
	public static readonly For = 14;
	public static readonly Goto = 15;
	public static readonly If = 16;
	public static readonly Inline = 17;
	public static readonly Int = 18;
	public static readonly Long = 19;
	public static readonly Register = 20;
	public static readonly Restrict = 21;
	public static readonly Return = 22;
	public static readonly Short = 23;
	public static readonly Signed = 24;
	public static readonly Sizeof = 25;
	public static readonly Static = 26;
	public static readonly Struct = 27;
	public static readonly Switch = 28;
	public static readonly Typedef = 29;
	public static readonly Union = 30;
	public static readonly Unsigned = 31;
	public static readonly Void = 32;
	public static readonly Volatile = 33;
	public static readonly While = 34;
	public static readonly Alignas = 35;
	public static readonly Alignof = 36;
	public static readonly Atomic = 37;
	public static readonly Bool = 38;
	public static readonly Complex = 39;
	public static readonly Generic = 40;
	public static readonly Imaginary = 41;
	public static readonly Noreturn = 42;
	public static readonly StaticAssert = 43;
	public static readonly ThreadLocal = 44;
	public static readonly LeftParen = 45;
	public static readonly RightParen = 46;
	public static readonly LeftBracket = 47;
	public static readonly RightBracket = 48;
	public static readonly LeftBrace = 49;
	public static readonly RightBrace = 50;
	public static readonly Less = 51;
	public static readonly LessEqual = 52;
	public static readonly Greater = 53;
	public static readonly GreaterEqual = 54;
	public static readonly LeftShift = 55;
	public static readonly RightShift = 56;
	public static readonly Plus = 57;
	public static readonly PlusPlus = 58;
	public static readonly Minus = 59;
	public static readonly MinusMinus = 60;
	public static readonly Star = 61;
	public static readonly Div = 62;
	public static readonly Mod = 63;
	public static readonly And = 64;
	public static readonly Or = 65;
	public static readonly AndAnd = 66;
	public static readonly OrOr = 67;
	public static readonly Caret = 68;
	public static readonly Not = 69;
	public static readonly Tilde = 70;
	public static readonly Question = 71;
	public static readonly Colon = 72;
	public static readonly Semi = 73;
	public static readonly Comma = 74;
	public static readonly Assign = 75;
	public static readonly StarAssign = 76;
	public static readonly DivAssign = 77;
	public static readonly ModAssign = 78;
	public static readonly PlusAssign = 79;
	public static readonly MinusAssign = 80;
	public static readonly LeftShiftAssign = 81;
	public static readonly RightShiftAssign = 82;
	public static readonly AndAssign = 83;
	public static readonly XorAssign = 84;
	public static readonly OrAssign = 85;
	public static readonly Equal = 86;
	public static readonly NotEqual = 87;
	public static readonly Arrow = 88;
	public static readonly Dot = 89;
	public static readonly Ellipsis = 90;
	public static readonly Identifier = 91;
	public static readonly Constant = 92;
	public static readonly DigitSequence = 93;
	public static readonly StringLiteral = 94;
	public static readonly ComplexDefine = 95;
	public static readonly IncludeDirective = 96;
	public static readonly AsmBlock = 97;
	public static readonly LineAfterPreprocessing = 98;
	public static readonly LineDirective = 99;
	public static readonly PragmaDirective = 100;
	public static readonly Whitespace = 101;
	public static readonly Newline = 102;
	public static readonly BlockComment = 103;
	public static readonly LineComment = 104;
	public static readonly RULE_primaryExpression = 0;
	public static readonly RULE_postfixExpression = 1;
	public static readonly RULE_argumentExpressionList = 2;
	public static readonly RULE_unaryExpression = 3;
	public static readonly RULE_unaryOperator = 4;
	public static readonly RULE_castExpression = 5;
	public static readonly RULE_multiplicativeExpression = 6;
	public static readonly RULE_additiveExpression = 7;
	public static readonly RULE_shiftExpression = 8;
	public static readonly RULE_relationalExpression = 9;
	public static readonly RULE_equalityExpression = 10;
	public static readonly RULE_andExpression = 11;
	public static readonly RULE_exclusiveOrExpression = 12;
	public static readonly RULE_inclusiveOrExpression = 13;
	public static readonly RULE_logicalAndExpression = 14;
	public static readonly RULE_logicalOrExpression = 15;
	public static readonly RULE_conditionalExpression = 16;
	public static readonly RULE_assignmentExpression = 17;
	public static readonly RULE_assignmentOperator = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_constantExpression = 20;
	public static readonly RULE_declaration = 21;
	public static readonly RULE_declarationSpecifiers = 22;
	public static readonly RULE_declarationSpecifiers2 = 23;
	public static readonly RULE_declarationSpecifier = 24;
	public static readonly RULE_initDeclaratorList = 25;
	public static readonly RULE_initDeclarator = 26;
	public static readonly RULE_storageClassSpecifier = 27;
	public static readonly RULE_typeSpecifier = 28;
	public static readonly RULE_structOrUnionSpecifier = 29;
	public static readonly RULE_structOrUnion = 30;
	public static readonly RULE_structDeclarationList = 31;
	public static readonly RULE_structDeclaration = 32;
	public static readonly RULE_specifierQualifierList = 33;
	public static readonly RULE_structDeclaratorList = 34;
	public static readonly RULE_structDeclarator = 35;
	public static readonly RULE_enumSpecifier = 36;
	public static readonly RULE_enumeratorList = 37;
	public static readonly RULE_enumerator = 38;
	public static readonly RULE_enumerationConstant = 39;
	public static readonly RULE_declarator = 40;
	public static readonly RULE_directDeclarator = 41;
	public static readonly RULE_nestedParenthesesBlock = 42;
	public static readonly RULE_pointer = 43;
	public static readonly RULE_parameterList = 44;
	public static readonly RULE_parameterDeclaration = 45;
	public static readonly RULE_identifierList = 46;
	public static readonly RULE_typeName = 47;
	public static readonly RULE_typedefName = 48;
	public static readonly RULE_initializer = 49;
	public static readonly RULE_initializerList = 50;
	public static readonly RULE_designation = 51;
	public static readonly RULE_designatorList = 52;
	public static readonly RULE_designator = 53;
	public static readonly RULE_statement = 54;
	public static readonly RULE_labeledStatement = 55;
	public static readonly RULE_compoundStatement = 56;
	public static readonly RULE_blockItemList = 57;
	public static readonly RULE_blockItem = 58;
	public static readonly RULE_expressionStatement = 59;
	public static readonly RULE_selectionStatement = 60;
	public static readonly RULE_iterationStatement = 61;
	public static readonly RULE_forCondition = 62;
	public static readonly RULE_forDeclaration = 63;
	public static readonly RULE_forExpression = 64;
	public static readonly RULE_jumpStatement = 65;
	public static readonly RULE_compilationUnit = 66;
	public static readonly RULE_externalDeclaration = 67;
	public static readonly RULE_functionDefinition = 68;
	public static readonly RULE_declarationList = 69;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "postfixExpression", "argumentExpressionList", "unaryExpression", 
		"unaryOperator", "castExpression", "multiplicativeExpression", "additiveExpression", 
		"shiftExpression", "relationalExpression", "equalityExpression", "andExpression", 
		"exclusiveOrExpression", "inclusiveOrExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"declarationSpecifiers", "declarationSpecifiers2", "declarationSpecifier", 
		"initDeclaratorList", "initDeclarator", "storageClassSpecifier", "typeSpecifier", 
		"structOrUnionSpecifier", "structOrUnion", "structDeclarationList", "structDeclaration", 
		"specifierQualifierList", "structDeclaratorList", "structDeclarator", 
		"enumSpecifier", "enumeratorList", "enumerator", "enumerationConstant", 
		"declarator", "directDeclarator", "nestedParenthesesBlock", "pointer", 
		"parameterList", "parameterDeclaration", "identifierList", "typeName", 
		"typedefName", "initializer", "initializerList", "designation", "designatorList", 
		"designator", "statement", "labeledStatement", "compoundStatement", "blockItemList", 
		"blockItem", "expressionStatement", "selectionStatement", "iterationStatement", 
		"forCondition", "forDeclaration", "forExpression", "jumpStatement", "compilationUnit", 
		"externalDeclaration", "functionDefinition", "declarationList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'auto'", "'break'", "'case'", "'char'", "'const'", "'continue'", 
		"'default'", "'do'", "'double'", "'else'", "'enum'", "'extern'", "'float'", 
		"'for'", "'goto'", "'if'", "'inline'", "'int'", "'long'", "'register'", 
		"'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'", 
		"'volatile'", "'while'", "'_Alignas'", "'_Alignof'", "'_Atomic'", "'_Bool'", 
		"'_Complex'", "'_Generic'", "'_Imaginary'", "'_Noreturn'", "'_Static_assert'", 
		"'_Thread_local'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", "'<='", 
		"'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", "'*'", "'/'", 
		"'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", "'?'", "':'", 
		"';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", 
		"'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Auto", "Break", "Case", "Char", "Const", "Continue", "Default", 
		"Do", "Double", "Else", "Enum", "Extern", "Float", "For", "Goto", "If", 
		"Inline", "Int", "Long", "Register", "Restrict", "Return", "Short", "Signed", 
		"Sizeof", "Static", "Struct", "Switch", "Typedef", "Union", "Unsigned", 
		"Void", "Volatile", "While", "Alignas", "Alignof", "Atomic", "Bool", "Complex", 
		"Generic", "Imaginary", "Noreturn", "StaticAssert", "ThreadLocal", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Less", "LessEqual", "Greater", "GreaterEqual", "LeftShift", "RightShift", 
		"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "And", 
		"Or", "AndAnd", "OrOr", "Caret", "Not", "Tilde", "Question", "Colon", 
		"Semi", "Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", "PlusAssign", 
		"MinusAssign", "LeftShiftAssign", "RightShiftAssign", "AndAssign", "XorAssign", 
		"OrAssign", "Equal", "NotEqual", "Arrow", "Dot", "Ellipsis", "Identifier", 
		"Constant", "DigitSequence", "StringLiteral", "ComplexDefine", "IncludeDirective", 
		"AsmBlock", "LineAfterPreprocessing", "LineDirective", "PragmaDirective", 
		"Whitespace", "Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CParser._ATN, this);
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.match(CParser.Identifier);
				}
				break;
			case CParser.Constant:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.match(CParser.Constant);
				}
				break;
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 142;
					this.match(CParser.StringLiteral);
					}
					}
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CParser.StringLiteral);
				}
				break;
			case CParser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 147;
				this.match(CParser.LeftParen);
				this.state = 148;
				this.expression();
				this.state = 149;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 153;
			this.primaryExpression();
			}
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.LeftBracket - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.MinusMinus - 45)))) !== 0) || _la === CParser.Arrow || _la === CParser.Dot) {
				{
				this.state = 166;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CParser.LeftBracket:
					{
					this.state = 154;
					this.match(CParser.LeftBracket);
					this.state = 155;
					this.expression();
					this.state = 156;
					this.match(CParser.RightBracket);
					}
					break;
				case CParser.LeftParen:
					{
					this.state = 158;
					this.match(CParser.LeftParen);
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
						{
						this.state = 159;
						this.argumentExpressionList();
						}
					}

					this.state = 162;
					this.match(CParser.RightParen);
					}
					break;
				case CParser.Arrow:
				case CParser.Dot:
					{
					this.state = 163;
					_la = this._input.LA(1);
					if (!(_la === CParser.Arrow || _la === CParser.Dot)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 164;
					this.match(CParser.Identifier);
					}
					break;
				case CParser.PlusPlus:
				case CParser.MinusMinus:
					{
					this.state = 165;
					_la = this._input.LA(1);
					if (!(_la === CParser.PlusPlus || _la === CParser.MinusMinus)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.assignmentExpression();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 172;
				this.match(CParser.Comma);
				this.state = 173;
				this.assignmentExpression();
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CParser.RULE_unaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 179;
					_la = this._input.LA(1);
					if (!(_la === CParser.Sizeof || _la === CParser.PlusPlus || _la === CParser.MinusMinus)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.LeftParen:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.StringLiteral:
				{
				this.state = 185;
				this.postfixExpression();
				}
				break;
			case CParser.Plus:
			case CParser.Minus:
			case CParser.Star:
			case CParser.And:
			case CParser.Not:
			case CParser.Tilde:
				{
				this.state = 186;
				this.unaryOperator();
				this.state = 187;
				this.castExpression();
				}
				break;
			case CParser.Sizeof:
				{
				{
				this.state = 189;
				this.match(CParser.Sizeof);
				}
				this.state = 190;
				this.match(CParser.LeftParen);
				this.state = 191;
				this.typeName();
				this.state = 192;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (CParser.Plus - 57)) | (1 << (CParser.Minus - 57)) | (1 << (CParser.Star - 57)) | (1 << (CParser.And - 57)) | (1 << (CParser.Not - 57)) | (1 << (CParser.Tilde - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_castExpression);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.match(CParser.LeftParen);
				this.state = 199;
				this.typeName();
				this.state = 200;
				this.match(CParser.RightParen);
				this.state = 201;
				this.castExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.unaryExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.castExpression();
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CParser.Star - 61)) | (1 << (CParser.Div - 61)) | (1 << (CParser.Mod - 61)))) !== 0)) {
				{
				{
				this.state = 207;
				_la = this._input.LA(1);
				if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CParser.Star - 61)) | (1 << (CParser.Div - 61)) | (1 << (CParser.Mod - 61)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 208;
				this.castExpression();
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.multiplicativeExpression();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Plus || _la === CParser.Minus) {
				{
				{
				this.state = 215;
				_la = this._input.LA(1);
				if (!(_la === CParser.Plus || _la === CParser.Minus)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 216;
				this.multiplicativeExpression();
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CParser.RULE_shiftExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.additiveExpression();
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.LeftShift || _la === CParser.RightShift) {
				{
				{
				this.state = 223;
				_la = this._input.LA(1);
				if (!(_la === CParser.LeftShift || _la === CParser.RightShift)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 224;
				this.additiveExpression();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CParser.RULE_relationalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.shiftExpression();
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CParser.Less - 51)) | (1 << (CParser.LessEqual - 51)) | (1 << (CParser.Greater - 51)) | (1 << (CParser.GreaterEqual - 51)))) !== 0)) {
				{
				{
				this.state = 231;
				_la = this._input.LA(1);
				if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CParser.Less - 51)) | (1 << (CParser.LessEqual - 51)) | (1 << (CParser.Greater - 51)) | (1 << (CParser.GreaterEqual - 51)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 232;
				this.shiftExpression();
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CParser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.relationalExpression();
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Equal || _la === CParser.NotEqual) {
				{
				{
				this.state = 239;
				_la = this._input.LA(1);
				if (!(_la === CParser.Equal || _la === CParser.NotEqual)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 240;
				this.relationalExpression();
				}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CParser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.equalityExpression();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.And) {
				{
				{
				this.state = 247;
				this.match(CParser.And);
				this.state = 248;
				this.equalityExpression();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_exclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.andExpression();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Caret) {
				{
				{
				this.state = 255;
				this.match(CParser.Caret);
				this.state = 256;
				this.andExpression();
				}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CParser.RULE_inclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.exclusiveOrExpression();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Or) {
				{
				{
				this.state = 263;
				this.match(CParser.Or);
				this.state = 264;
				this.exclusiveOrExpression();
				}
				}
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.inclusiveOrExpression();
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.AndAnd) {
				{
				{
				this.state = 271;
				this.match(CParser.AndAnd);
				this.state = 272;
				this.inclusiveOrExpression();
				}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.logicalAndExpression();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.OrOr) {
				{
				{
				this.state = 279;
				this.match(CParser.OrOr);
				this.state = 280;
				this.logicalAndExpression();
				}
				}
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.logicalOrExpression();
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Question) {
				{
				this.state = 287;
				this.match(CParser.Question);
				this.state = 288;
				this.expression();
				this.state = 289;
				this.match(CParser.Colon);
				this.state = 290;
				this.conditionalExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CParser.RULE_assignmentExpression);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 294;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.unaryExpression();
				this.state = 296;
				this.assignmentOperator();
				this.state = 297;
				this.assignmentExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 299;
				this.match(CParser.DigitSequence);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			_la = this._input.LA(1);
			if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CParser.Assign - 75)) | (1 << (CParser.StarAssign - 75)) | (1 << (CParser.DivAssign - 75)) | (1 << (CParser.ModAssign - 75)) | (1 << (CParser.PlusAssign - 75)) | (1 << (CParser.MinusAssign - 75)) | (1 << (CParser.LeftShiftAssign - 75)) | (1 << (CParser.RightShiftAssign - 75)) | (1 << (CParser.AndAssign - 75)) | (1 << (CParser.XorAssign - 75)) | (1 << (CParser.OrAssign - 75)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.assignmentExpression();
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 305;
				this.match(CParser.Comma);
				this.state = 306;
				this.assignmentExpression();
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.declarationSpecifiers();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftParen || _la === CParser.Star || _la === CParser.Identifier) {
				{
				this.state = 315;
				this.initDeclaratorList();
				}
			}

			this.state = 318;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CParser.RULE_declarationSpecifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 320;
					this.declarationSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifiers2(): DeclarationSpecifiers2Context {
		let _localctx: DeclarationSpecifiers2Context = new DeclarationSpecifiers2Context(this._ctx, this.state);
		this.enterRule(_localctx, 46, CParser.RULE_declarationSpecifiers2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 325;
				this.declarationSpecifier();
				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Typedef - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifier(): DeclarationSpecifierContext {
		let _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CParser.RULE_declarationSpecifier);
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Typedef:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.storageClassSpecifier();
				}
				break;
			case CParser.Char:
			case CParser.Double:
			case CParser.Enum:
			case CParser.Float:
			case CParser.Int:
			case CParser.Long:
			case CParser.Short:
			case CParser.Signed:
			case CParser.Struct:
			case CParser.Union:
			case CParser.Unsigned:
			case CParser.Void:
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.typeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclaratorList(): InitDeclaratorListContext {
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.initDeclarator();
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 335;
				this.match(CParser.Comma);
				this.state = 336;
				this.initDeclarator();
				}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.declarator();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Assign) {
				{
				this.state = 343;
				this.match(CParser.Assign);
				this.state = 344;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let _localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CParser.RULE_storageClassSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(CParser.Typedef);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CParser.RULE_typeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Void:
				{
				this.state = 349;
				this.match(CParser.Void);
				}
				break;
			case CParser.Char:
				{
				this.state = 350;
				this.match(CParser.Char);
				}
				break;
			case CParser.Short:
				{
				this.state = 351;
				this.match(CParser.Short);
				}
				break;
			case CParser.Int:
				{
				this.state = 352;
				this.match(CParser.Int);
				}
				break;
			case CParser.Long:
				{
				this.state = 353;
				this.match(CParser.Long);
				}
				break;
			case CParser.Float:
				{
				this.state = 354;
				this.match(CParser.Float);
				}
				break;
			case CParser.Double:
				{
				this.state = 355;
				this.match(CParser.Double);
				}
				break;
			case CParser.Signed:
				{
				this.state = 356;
				this.match(CParser.Signed);
				}
				break;
			case CParser.Unsigned:
				{
				this.state = 357;
				this.match(CParser.Unsigned);
				}
				break;
			case CParser.Struct:
			case CParser.Union:
				{
				this.state = 358;
				this.structOrUnionSpecifier();
				}
				break;
			case CParser.Enum:
				{
				this.state = 359;
				this.enumSpecifier();
				}
				break;
			case CParser.Identifier:
				{
				this.state = 360;
				this.typedefName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
		let _localctx: StructOrUnionSpecifierContext = new StructOrUnionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CParser.RULE_structOrUnionSpecifier);
		let _la: number;
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 363;
				this.structOrUnion();
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 364;
					this.match(CParser.Identifier);
					}
				}

				this.state = 367;
				this.match(CParser.LeftBrace);
				this.state = 368;
				this.structDeclarationList();
				this.state = 369;
				this.match(CParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 371;
				this.structOrUnion();
				this.state = 372;
				this.match(CParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structOrUnion(): StructOrUnionContext {
		let _localctx: StructOrUnionContext = new StructOrUnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CParser.RULE_structOrUnion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			_la = this._input.LA(1);
			if (!(_la === CParser.Struct || _la === CParser.Union)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclarationList(): StructDeclarationListContext {
		let _localctx: StructDeclarationListContext = new StructDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CParser.RULE_structDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 378;
				this.structDeclaration();
				}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CParser.RULE_structDeclaration);
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.specifierQualifierList();
				this.state = 384;
				this.structDeclaratorList();
				this.state = 385;
				this.match(CParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.specifierQualifierList();
				this.state = 388;
				this.match(CParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specifierQualifierList(): SpecifierQualifierListContext {
		let _localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CParser.RULE_specifierQualifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.typeSpecifier();
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 393;
				this.specifierQualifierList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclaratorList(): StructDeclaratorListContext {
		let _localctx: StructDeclaratorListContext = new StructDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CParser.RULE_structDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.structDeclarator();
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 397;
				this.match(CParser.Comma);
				this.state = 398;
				this.structDeclarator();
				}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclarator(): StructDeclaratorContext {
		let _localctx: StructDeclaratorContext = new StructDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CParser.RULE_structDeclarator);
		let _la: number;
		try {
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 404;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.LeftParen || _la === CParser.Star || _la === CParser.Identifier) {
					{
					this.state = 405;
					this.declarator();
					}
				}

				this.state = 408;
				this.match(CParser.Colon);
				this.state = 409;
				this.constantExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumSpecifier(): EnumSpecifierContext {
		let _localctx: EnumSpecifierContext = new EnumSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CParser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.match(CParser.Enum);
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Identifier) {
					{
					this.state = 413;
					this.match(CParser.Identifier);
					}
				}

				this.state = 416;
				this.match(CParser.LeftBrace);
				this.state = 417;
				this.enumeratorList();
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Comma) {
					{
					this.state = 418;
					this.match(CParser.Comma);
					}
				}

				this.state = 421;
				this.match(CParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
				this.match(CParser.Enum);
				this.state = 424;
				this.match(CParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratorList(): EnumeratorListContext {
		let _localctx: EnumeratorListContext = new EnumeratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CParser.RULE_enumeratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.enumerator();
			this.state = 432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 428;
					this.match(CParser.Comma);
					this.state = 429;
					this.enumerator();
					}
					}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CParser.RULE_enumerator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.enumerationConstant();
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Assign) {
				{
				this.state = 436;
				this.match(CParser.Assign);
				this.state = 437;
				this.constantExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationConstant(): EnumerationConstantContext {
		let _localctx: EnumerationConstantContext = new EnumerationConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CParser.RULE_enumerationConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Star) {
				{
				this.state = 442;
				this.pointer();
				}
			}

			this.state = 445;
			this.directDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public directDeclarator(): DirectDeclaratorContext;
	public directDeclarator(_p: number): DirectDeclaratorContext;
	// @RuleVersion(0)
	public directDeclarator(_p?: number): DirectDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectDeclaratorContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, CParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
				{
				this.state = 448;
				this.match(CParser.Identifier);
				}
				break;
			case CParser.LeftParen:
				{
				this.state = 449;
				this.match(CParser.LeftParen);
				this.state = 450;
				this.declarator();
				this.state = 451;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 474;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 472;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 455;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 456;
						this.match(CParser.LeftBracket);
						this.state = 458;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.DigitSequence) {
							{
							this.state = 457;
							this.match(CParser.DigitSequence);
							}
						}

						this.state = 460;
						this.match(CParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 461;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 462;
						this.match(CParser.LeftParen);
						this.state = 463;
						this.parameterList();
						this.state = 464;
						this.match(CParser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 466;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 467;
						this.match(CParser.LeftParen);
						this.state = 469;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CParser.Identifier) {
							{
							this.state = 468;
							this.identifierList();
							}
						}

						this.state = 471;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedParenthesesBlock(): NestedParenthesesBlockContext {
		let _localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.Goto) | (1 << CParser.If) | (1 << CParser.Inline) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Register) | (1 << CParser.Restrict) | (1 << CParser.Return) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Sizeof) | (1 << CParser.Static) | (1 << CParser.Struct) | (1 << CParser.Switch) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBracket - 32)) | (1 << (CParser.RightBracket - 32)) | (1 << (CParser.LeftBrace - 32)) | (1 << (CParser.RightBrace - 32)) | (1 << (CParser.Less - 32)) | (1 << (CParser.LessEqual - 32)) | (1 << (CParser.Greater - 32)) | (1 << (CParser.GreaterEqual - 32)) | (1 << (CParser.LeftShift - 32)) | (1 << (CParser.RightShift - 32)) | (1 << (CParser.Plus - 32)) | (1 << (CParser.PlusPlus - 32)) | (1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Div - 32)) | (1 << (CParser.Mod - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.And - 64)) | (1 << (CParser.Or - 64)) | (1 << (CParser.AndAnd - 64)) | (1 << (CParser.OrOr - 64)) | (1 << (CParser.Caret - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Question - 64)) | (1 << (CParser.Colon - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Comma - 64)) | (1 << (CParser.Assign - 64)) | (1 << (CParser.StarAssign - 64)) | (1 << (CParser.DivAssign - 64)) | (1 << (CParser.ModAssign - 64)) | (1 << (CParser.PlusAssign - 64)) | (1 << (CParser.MinusAssign - 64)) | (1 << (CParser.LeftShiftAssign - 64)) | (1 << (CParser.RightShiftAssign - 64)) | (1 << (CParser.AndAssign - 64)) | (1 << (CParser.XorAssign - 64)) | (1 << (CParser.OrAssign - 64)) | (1 << (CParser.Equal - 64)) | (1 << (CParser.NotEqual - 64)) | (1 << (CParser.Arrow - 64)) | (1 << (CParser.Dot - 64)) | (1 << (CParser.Ellipsis - 64)) | (1 << (CParser.Identifier - 64)) | (1 << (CParser.Constant - 64)) | (1 << (CParser.DigitSequence - 64)) | (1 << (CParser.StringLiteral - 64)) | (1 << (CParser.ComplexDefine - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CParser.IncludeDirective - 96)) | (1 << (CParser.AsmBlock - 96)) | (1 << (CParser.LineAfterPreprocessing - 96)) | (1 << (CParser.LineDirective - 96)) | (1 << (CParser.PragmaDirective - 96)) | (1 << (CParser.Whitespace - 96)) | (1 << (CParser.Newline - 96)) | (1 << (CParser.BlockComment - 96)) | (1 << (CParser.LineComment - 96)))) !== 0)) {
				{
				this.state = 482;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CParser.Auto:
				case CParser.Break:
				case CParser.Case:
				case CParser.Char:
				case CParser.Const:
				case CParser.Continue:
				case CParser.Default:
				case CParser.Do:
				case CParser.Double:
				case CParser.Else:
				case CParser.Enum:
				case CParser.Extern:
				case CParser.Float:
				case CParser.For:
				case CParser.Goto:
				case CParser.If:
				case CParser.Inline:
				case CParser.Int:
				case CParser.Long:
				case CParser.Register:
				case CParser.Restrict:
				case CParser.Return:
				case CParser.Short:
				case CParser.Signed:
				case CParser.Sizeof:
				case CParser.Static:
				case CParser.Struct:
				case CParser.Switch:
				case CParser.Typedef:
				case CParser.Union:
				case CParser.Unsigned:
				case CParser.Void:
				case CParser.Volatile:
				case CParser.While:
				case CParser.Alignas:
				case CParser.Alignof:
				case CParser.Atomic:
				case CParser.Bool:
				case CParser.Complex:
				case CParser.Generic:
				case CParser.Imaginary:
				case CParser.Noreturn:
				case CParser.StaticAssert:
				case CParser.ThreadLocal:
				case CParser.LeftBracket:
				case CParser.RightBracket:
				case CParser.LeftBrace:
				case CParser.RightBrace:
				case CParser.Less:
				case CParser.LessEqual:
				case CParser.Greater:
				case CParser.GreaterEqual:
				case CParser.LeftShift:
				case CParser.RightShift:
				case CParser.Plus:
				case CParser.PlusPlus:
				case CParser.Minus:
				case CParser.MinusMinus:
				case CParser.Star:
				case CParser.Div:
				case CParser.Mod:
				case CParser.And:
				case CParser.Or:
				case CParser.AndAnd:
				case CParser.OrOr:
				case CParser.Caret:
				case CParser.Not:
				case CParser.Tilde:
				case CParser.Question:
				case CParser.Colon:
				case CParser.Semi:
				case CParser.Comma:
				case CParser.Assign:
				case CParser.StarAssign:
				case CParser.DivAssign:
				case CParser.ModAssign:
				case CParser.PlusAssign:
				case CParser.MinusAssign:
				case CParser.LeftShiftAssign:
				case CParser.RightShiftAssign:
				case CParser.AndAssign:
				case CParser.XorAssign:
				case CParser.OrAssign:
				case CParser.Equal:
				case CParser.NotEqual:
				case CParser.Arrow:
				case CParser.Dot:
				case CParser.Ellipsis:
				case CParser.Identifier:
				case CParser.Constant:
				case CParser.DigitSequence:
				case CParser.StringLiteral:
				case CParser.ComplexDefine:
				case CParser.IncludeDirective:
				case CParser.AsmBlock:
				case CParser.LineAfterPreprocessing:
				case CParser.LineDirective:
				case CParser.PragmaDirective:
				case CParser.Whitespace:
				case CParser.Newline:
				case CParser.BlockComment:
				case CParser.LineComment:
					{
					this.state = 477;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === CParser.LeftParen || _la === CParser.RightParen)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				case CParser.LeftParen:
					{
					this.state = 478;
					this.match(CParser.LeftParen);
					this.state = 479;
					this.nestedParenthesesBlock();
					this.state = 480;
					this.match(CParser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CParser.RULE_pointer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 487;
				this.match(CParser.Star);
				}
				}
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.Star);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.parameterDeclaration();
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 493;
				this.match(CParser.Comma);
				this.state = 494;
				this.parameterDeclaration();
				}
				}
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.declarationSpecifiers();
				this.state = 501;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 503;
				this.declarationSpecifiers();
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Star) {
					{
					this.state = 504;
					this.pointer();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(CParser.Identifier);
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 510;
				this.match(CParser.Comma);
				this.state = 511;
				this.match(CParser.Identifier);
				}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.specifierQualifierList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedefName(): TypedefNameContext {
		let _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CParser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CParser.RULE_initializer);
		let _la: number;
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Sizeof:
			case CParser.LeftParen:
			case CParser.Plus:
			case CParser.PlusPlus:
			case CParser.Minus:
			case CParser.MinusMinus:
			case CParser.Star:
			case CParser.And:
			case CParser.Not:
			case CParser.Tilde:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.DigitSequence:
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.assignmentExpression();
				}
				break;
			case CParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.match(CParser.LeftBrace);
				this.state = 523;
				this.initializerList();
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Comma) {
					{
					this.state = 524;
					this.match(CParser.Comma);
					}
				}

				this.state = 527;
				this.match(CParser.RightBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftBracket || _la === CParser.Dot) {
				{
				this.state = 531;
				this.designation();
				}
			}

			this.state = 534;
			this.initializer();
			this.state = 542;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 535;
					this.match(CParser.Comma);
					this.state = 537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CParser.LeftBracket || _la === CParser.Dot) {
						{
						this.state = 536;
						this.designation();
						}
					}

					this.state = 539;
					this.initializer();
					}
					}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designation(): DesignationContext {
		let _localctx: DesignationContext = new DesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CParser.RULE_designation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.designatorList();
			this.state = 546;
			this.match(CParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designatorList(): DesignatorListContext {
		let _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 548;
				this.designator();
				}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CParser.LeftBracket || _la === CParser.Dot);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CParser.RULE_designator);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 553;
				this.match(CParser.LeftBracket);
				this.state = 554;
				this.constantExpression();
				this.state = 555;
				this.match(CParser.RightBracket);
				}
				break;
			case CParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.match(CParser.Dot);
				this.state = 558;
				this.match(CParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CParser.RULE_statement);
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Case:
			case CParser.Default:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.labeledStatement();
				}
				break;
			case CParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.compoundStatement();
				}
				break;
			case CParser.Sizeof:
			case CParser.LeftParen:
			case CParser.Plus:
			case CParser.PlusPlus:
			case CParser.Minus:
			case CParser.MinusMinus:
			case CParser.Star:
			case CParser.And:
			case CParser.Not:
			case CParser.Tilde:
			case CParser.Semi:
			case CParser.Identifier:
			case CParser.Constant:
			case CParser.DigitSequence:
			case CParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.expressionStatement();
				}
				break;
			case CParser.If:
			case CParser.Switch:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.selectionStatement();
				}
				break;
			case CParser.Do:
			case CParser.For:
			case CParser.While:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 565;
				this.iterationStatement();
				}
				break;
			case CParser.Break:
			case CParser.Continue:
			case CParser.Return:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 566;
				this.jumpStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CParser.RULE_labeledStatement);
		try {
			this.state = 577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this.match(CParser.Case);
				this.state = 570;
				this.constantExpression();
				this.state = 571;
				this.match(CParser.Colon);
				this.state = 572;
				this.statement();
				}
				break;
			case CParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 574;
				this.match(CParser.Default);
				this.state = 575;
				this.match(CParser.Colon);
				this.state = 576;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(CParser.LeftBrace);
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Return) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Sizeof) | (1 << CParser.Struct) | (1 << CParser.Switch) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBrace - 32)) | (1 << (CParser.Plus - 32)) | (1 << (CParser.PlusPlus - 32)) | (1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.And - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Identifier - 64)) | (1 << (CParser.Constant - 64)) | (1 << (CParser.DigitSequence - 64)) | (1 << (CParser.StringLiteral - 64)))) !== 0)) {
				{
				this.state = 580;
				this.blockItemList();
				}
			}

			this.state = 583;
			this.match(CParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 585;
				this.blockItem();
				}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Return) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Sizeof) | (1 << CParser.Struct) | (1 << CParser.Switch) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBrace - 32)) | (1 << (CParser.Plus - 32)) | (1 << (CParser.PlusPlus - 32)) | (1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.And - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Identifier - 64)) | (1 << (CParser.Constant - 64)) | (1 << (CParser.DigitSequence - 64)) | (1 << (CParser.StringLiteral - 64)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CParser.RULE_blockItem);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 591;
				this.declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
				{
				this.state = 594;
				this.expression();
				}
			}

			this.state = 597;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CParser.RULE_selectionStatement);
		try {
			this.state = 614;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.match(CParser.If);
				this.state = 600;
				this.match(CParser.LeftParen);
				this.state = 601;
				this.expression();
				this.state = 602;
				this.match(CParser.RightParen);
				this.state = 603;
				this.statement();
				this.state = 606;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 604;
					this.match(CParser.Else);
					this.state = 605;
					this.statement();
					}
					break;
				}
				}
				break;
			case CParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.match(CParser.Switch);
				this.state = 609;
				this.match(CParser.LeftParen);
				this.state = 610;
				this.expression();
				this.state = 611;
				this.match(CParser.RightParen);
				this.state = 612;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CParser.RULE_iterationStatement);
		try {
			this.state = 636;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.match(CParser.While);
				this.state = 617;
				this.match(CParser.LeftParen);
				this.state = 618;
				this.expression();
				this.state = 619;
				this.match(CParser.RightParen);
				this.state = 620;
				this.statement();
				}
				break;
			case CParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 622;
				this.match(CParser.Do);
				this.state = 623;
				this.statement();
				this.state = 624;
				this.match(CParser.While);
				this.state = 625;
				this.match(CParser.LeftParen);
				this.state = 626;
				this.expression();
				this.state = 627;
				this.match(CParser.RightParen);
				this.state = 628;
				this.match(CParser.Semi);
				}
				break;
			case CParser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 630;
				this.match(CParser.For);
				this.state = 631;
				this.match(CParser.LeftParen);
				this.state = 632;
				this.forCondition();
				this.state = 633;
				this.match(CParser.RightParen);
				this.state = 634;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 638;
				this.forDeclaration();
				}
				break;

			case 2:
				{
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
					{
					this.state = 639;
					this.expression();
					}
				}

				}
				break;
			}
			this.state = 644;
			this.match(CParser.Semi);
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
				{
				this.state = 645;
				this.forExpression();
				}
			}

			this.state = 648;
			this.match(CParser.Semi);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
				{
				this.state = 649;
				this.forExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.declarationSpecifiers();
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.LeftParen || _la === CParser.Star || _la === CParser.Identifier) {
				{
				this.state = 653;
				this.initDeclaratorList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.assignmentExpression();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.Comma) {
				{
				{
				this.state = 657;
				this.match(CParser.Comma);
				this.state = 658;
				this.assignmentExpression();
				}
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Break:
			case CParser.Continue:
				{
				this.state = 664;
				_la = this._input.LA(1);
				if (!(_la === CParser.Break || _la === CParser.Continue)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case CParser.Return:
				{
				this.state = 665;
				this.match(CParser.Return);
				this.state = 667;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
					{
					this.state = 666;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 671;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 673;
				this.externalDeclaration();
				}
				}
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Struct) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.Star - 32)))) !== 0) || _la === CParser.Semi || _la === CParser.Identifier);
			this.state = 678;
			this.match(CParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalDeclaration(): ExternalDeclarationContext {
		let _localctx: ExternalDeclarationContext = new ExternalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CParser.RULE_externalDeclaration);
		try {
			this.state = 683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.functionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 682;
				this.match(CParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 685;
				this.declarationSpecifiers();
				}
				break;
			}
			this.state = 688;
			this.declarator();
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Typedef - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier) {
				{
				this.state = 689;
				this.declarationList();
				}
			}

			this.state = 692;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 694;
				this.declaration();
				}
				}
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Typedef - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 41:
			return this.directDeclarator_sempred(_localctx as DirectDeclaratorContext, predIndex);
		}
		return true;
	}
	private directDeclarator_sempred(_localctx: DirectDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03j\u02BE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x03\x02\x03\x02\x03\x02\x06\x02\x92\n\x02\r\x02\x0E\x02\x93" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x9A\n\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA3\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x07\x03\xA9\n\x03\f\x03\x0E\x03\xAC\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xB1\n\x04\f\x04\x0E\x04\xB4\v\x04\x03\x05\x07\x05" +
		"\xB7\n\x05\f\x05\x0E\x05\xBA\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xC5\n\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xCF\n\x07\x03" +
		"\b\x03\b\x03\b\x07\b\xD4\n\b\f\b\x0E\b\xD7\v\b\x03\t\x03\t\x03\t\x07\t" +
		"\xDC\n\t\f\t\x0E\t\xDF\v\t\x03\n\x03\n\x03\n\x07\n\xE4\n\n\f\n\x0E\n\xE7" +
		"\v\n\x03\v\x03\v\x03\v\x07\v\xEC\n\v\f\v\x0E\v\xEF\v\v\x03\f\x03\f\x03" +
		"\f\x07\f\xF4\n\f\f\f\x0E\f\xF7\v\f\x03\r\x03\r\x03\r\x07\r\xFC\n\r\f\r" +
		"\x0E\r\xFF\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0104\n\x0E\f\x0E\x0E\x0E" +
		"\u0107\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u010C\n\x0F\f\x0F\x0E\x0F" +
		"\u010F\v\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0114\n\x10\f\x10\x0E\x10" +
		"\u0117\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\u011C\n\x11\f\x11\x0E\x11" +
		"\u011F\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0127" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u012F\n" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0136\n\x15\f\x15" +
		"\x0E\x15\u0139\v\x15\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u013F\n\x17" +
		"\x03\x17\x03\x17\x03\x18\x06\x18\u0144\n\x18\r\x18\x0E\x18\u0145\x03\x19" +
		"\x06\x19\u0149\n\x19\r\x19\x0E\x19\u014A\x03\x1A\x03\x1A\x05\x1A\u014F" +
		"\n\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0154\n\x1B\f\x1B\x0E\x1B\u0157" +
		"\v\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015C\n\x1C\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u016C\n\x1E\x03\x1F\x03\x1F\x05\x1F\u0170" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u0179\n\x1F\x03 \x03 \x03!\x06!\u017E\n!\r!\x0E!\u017F\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0189\n\"\x03#\x03#\x05#\u018D\n#\x03" +
		"$\x03$\x03$\x07$\u0192\n$\f$\x0E$\u0195\v$\x03%\x03%\x05%\u0199\n%\x03" +
		"%\x03%\x05%\u019D\n%\x03&\x03&\x05&\u01A1\n&\x03&\x03&\x03&\x05&\u01A6" +
		"\n&\x03&\x03&\x03&\x03&\x05&\u01AC\n&\x03\'\x03\'\x03\'\x07\'\u01B1\n" +
		"\'\f\'\x0E\'\u01B4\v\'\x03(\x03(\x03(\x05(\u01B9\n(\x03)\x03)\x03*\x05" +
		"*\u01BE\n*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01C8\n+\x03+" +
		"\x03+\x03+\x05+\u01CD\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
		"\x05+\u01D8\n+\x03+\x07+\u01DB\n+\f+\x0E+\u01DE\v+\x03,\x03,\x03,\x03" +
		",\x03,\x07,\u01E5\n,\f,\x0E,\u01E8\v,\x03-\x06-\u01EB\n-\r-\x0E-\u01EC" +
		"\x03.\x03.\x03.\x07.\u01F2\n.\f.\x0E.\u01F5\v.\x03/\x03/\x03/\x03/\x03" +
		"/\x05/\u01FC\n/\x05/\u01FE\n/\x030\x030\x030\x070\u0203\n0\f0\x0E0\u0206" +
		"\v0\x031\x031\x032\x032\x033\x033\x033\x033\x053\u0210\n3\x033\x033\x05" +
		"3\u0214\n3\x034\x054\u0217\n4\x034\x034\x034\x054\u021C\n4\x034\x074\u021F" +
		"\n4\f4\x0E4\u0222\v4\x035\x035\x035\x036\x066\u0228\n6\r6\x0E6\u0229\x03" +
		"7\x037\x037\x037\x037\x037\x057\u0232\n7\x038\x038\x038\x038\x038\x03" +
		"8\x058\u023A\n8\x039\x039\x039\x039\x039\x039\x039\x039\x059\u0244\n9" +
		"\x03:\x03:\x05:\u0248\n:\x03:\x03:\x03;\x06;\u024D\n;\r;\x0E;\u024E\x03" +
		"<\x03<\x05<\u0253\n<\x03=\x05=\u0256\n=\x03=\x03=\x03>\x03>\x03>\x03>" +
		"\x03>\x03>\x03>\x05>\u0261\n>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0269" +
		"\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u027F\n?\x03@\x03@\x05@\u0283\n@" +
		"\x05@\u0285\n@\x03@\x03@\x05@\u0289\n@\x03@\x03@\x05@\u028D\n@\x03A\x03" +
		"A\x05A\u0291\nA\x03B\x03B\x03B\x07B\u0296\nB\fB\x0EB\u0299\vB\x03C\x03" +
		"C\x03C\x05C\u029E\nC\x05C\u02A0\nC\x03C\x03C\x03D\x06D\u02A5\nD\rD\x0E" +
		"D\u02A6\x03D\x03D\x03E\x03E\x03E\x05E\u02AE\nE\x03F\x05F\u02B1\nF\x03" +
		"F\x03F\x05F\u02B5\nF\x03F\x03F\x03G\x06G\u02BA\nG\rG\x0EG\u02BB\x03G\x02" +
		"\x02\x03TH\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x02\x0F\x03\x02Z[\x04\x02<<>>\x05\x02\x1B\x1B<<>>\x07\x02;;==??BBGH\x03" +
		"\x02?A\x04\x02;;==\x03\x029:\x03\x0258\x03\x02XY\x03\x02MW\x04\x02\x1D" +
		"\x1D  \x03\x02/0\x04\x02\x04\x04\b\b\x02\u02E2\x02\x99\x03\x02\x02\x02" +
		"\x04\x9B\x03\x02\x02\x02\x06\xAD\x03\x02\x02\x02\b\xB8\x03\x02\x02\x02" +
		"\n\xC6\x03\x02\x02\x02\f\xCE\x03\x02\x02\x02\x0E\xD0\x03\x02\x02\x02\x10" +
		"\xD8\x03\x02\x02\x02\x12\xE0\x03\x02\x02\x02\x14\xE8\x03\x02\x02\x02\x16" +
		"\xF0\x03\x02\x02\x02\x18\xF8\x03\x02\x02\x02\x1A\u0100\x03\x02\x02\x02" +
		"\x1C\u0108\x03\x02\x02\x02\x1E\u0110\x03\x02\x02\x02 \u0118\x03\x02\x02" +
		"\x02\"\u0120\x03\x02\x02\x02$\u012E\x03\x02\x02\x02&\u0130\x03\x02\x02" +
		"\x02(\u0132\x03\x02\x02\x02*\u013A\x03\x02\x02\x02,\u013C\x03\x02\x02" +
		"\x02.\u0143\x03\x02\x02\x020\u0148\x03\x02\x02\x022\u014E\x03\x02\x02" +
		"\x024\u0150\x03\x02\x02\x026\u0158\x03\x02\x02\x028\u015D\x03\x02\x02" +
		"\x02:\u016B\x03\x02\x02\x02<\u0178\x03\x02\x02\x02>\u017A\x03\x02\x02" +
		"\x02@\u017D\x03\x02\x02\x02B\u0188\x03\x02\x02\x02D\u018A\x03\x02\x02" +
		"\x02F\u018E\x03\x02\x02\x02H\u019C\x03\x02\x02\x02J\u01AB\x03\x02\x02" +
		"\x02L\u01AD\x03\x02\x02\x02N\u01B5\x03\x02\x02\x02P\u01BA\x03\x02\x02" +
		"\x02R\u01BD\x03\x02\x02\x02T\u01C7\x03\x02\x02\x02V\u01E6\x03\x02\x02" +
		"\x02X\u01EA\x03\x02\x02\x02Z\u01EE\x03\x02\x02\x02\\\u01FD\x03\x02\x02" +
		"\x02^\u01FF\x03\x02\x02\x02`\u0207\x03\x02\x02\x02b\u0209\x03\x02\x02" +
		"\x02d\u0213\x03\x02\x02\x02f\u0216\x03\x02\x02\x02h\u0223\x03\x02\x02" +
		"\x02j\u0227\x03\x02\x02\x02l\u0231\x03\x02\x02\x02n\u0239\x03\x02\x02" +
		"\x02p\u0243\x03\x02\x02\x02r\u0245\x03\x02\x02\x02t\u024C\x03\x02\x02" +
		"\x02v\u0252\x03\x02\x02\x02x\u0255\x03\x02\x02\x02z\u0268\x03\x02\x02" +
		"\x02|\u027E\x03\x02\x02\x02~\u0284\x03\x02\x02\x02\x80\u028E\x03\x02\x02" +
		"\x02\x82\u0292\x03\x02\x02\x02\x84\u029F\x03\x02\x02\x02\x86\u02A4\x03" +
		"\x02\x02\x02\x88\u02AD\x03\x02\x02\x02\x8A\u02B0\x03\x02\x02\x02\x8C\u02B9" +
		"\x03\x02\x02\x02\x8E\x9A\x07]\x02\x02\x8F\x9A\x07^\x02\x02\x90\x92\x07" +
		"`\x02\x02\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x91\x03" +
		"\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x9A\x03\x02\x02\x02\x95\x96\x07" +
		"/\x02\x02\x96\x97\x05(\x15\x02\x97\x98\x070\x02\x02\x98\x9A\x03\x02\x02" +
		"\x02\x99\x8E\x03\x02\x02\x02\x99\x8F\x03\x02\x02\x02\x99\x91\x03\x02\x02" +
		"\x02\x99\x95\x03\x02\x02\x02\x9A\x03\x03\x02\x02\x02\x9B\xAA\x05\x02\x02" +
		"\x02\x9C\x9D\x071\x02\x02\x9D\x9E\x05(\x15\x02\x9E\x9F\x072\x02\x02\x9F" +
		"\xA9\x03\x02\x02\x02\xA0\xA2\x07/\x02\x02\xA1\xA3\x05\x06\x04\x02\xA2" +
		"\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4" +
		"\xA9\x070\x02\x02\xA5\xA6\t\x02\x02\x02\xA6\xA9\x07]\x02\x02\xA7\xA9\t" +
		"\x03\x02\x02\xA8\x9C\x03\x02\x02\x02\xA8\xA0\x03\x02\x02\x02\xA8\xA5\x03" +
		"\x02\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03" +
		"\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\x05\x03\x02\x02\x02\xAC\xAA\x03" +
		"\x02\x02\x02\xAD\xB2\x05$\x13\x02\xAE\xAF\x07L\x02\x02\xAF\xB1\x05$\x13" +
		"\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\x07\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
		"\x02\xB5\xB7\t\x04\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC4\x03\x02\x02" +
		"\x02\xBA\xB8\x03\x02\x02\x02\xBB\xC5\x05\x04\x03\x02\xBC\xBD\x05\n\x06" +
		"\x02\xBD\xBE\x05\f\x07\x02\xBE\xC5\x03\x02\x02\x02\xBF\xC0\x07\x1B\x02" +
		"\x02\xC0\xC1\x07/\x02\x02\xC1\xC2\x05`1\x02\xC2\xC3\x070\x02\x02\xC3\xC5" +
		"\x03\x02\x02\x02\xC4\xBB\x03\x02\x02\x02\xC4\xBC\x03\x02\x02\x02\xC4\xBF" +
		"\x03\x02\x02\x02\xC5\t\x03\x02\x02\x02\xC6\xC7\t\x05\x02\x02\xC7\v\x03" +
		"\x02\x02\x02\xC8\xC9\x07/\x02\x02\xC9\xCA\x05`1\x02\xCA\xCB\x070\x02\x02" +
		"\xCB\xCC\x05\f\x07\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCF\x05\b\x05\x02\xCE" +
		"\xC8\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF\r\x03\x02\x02\x02\xD0" +
		"\xD5\x05\f\x07\x02\xD1\xD2\t\x06\x02\x02\xD2\xD4\x05\f\x07\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6" +
		"\x03\x02\x02\x02\xD6\x0F\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDD" +
		"\x05\x0E\b\x02\xD9\xDA\t\x07\x02\x02\xDA\xDC\x05\x0E\b\x02\xDB\xD9\x03" +
		"\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03" +
		"\x02\x02\x02\xDE\x11\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE5\x05" +
		"\x10\t\x02\xE1\xE2\t\b\x02\x02\xE2\xE4\x05\x10\t\x02\xE3\xE1\x03\x02\x02" +
		"\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
		"\x02\xE6\x13\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xED\x05\x12\n" +
		"\x02\xE9\xEA\t\t\x02\x02\xEA\xEC\x05\x12\n\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\x15\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF5\x05\x14\v\x02" +
		"\xF1\xF2\t\n\x02\x02\xF2\xF4\x05\x14\v\x02\xF3\xF1\x03\x02\x02\x02\xF4" +
		"\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
		"\x17\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFD\x05\x16\f\x02\xF9" +
		"\xFA\x07B\x02\x02\xFA\xFC\x05\x16\f\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\x19" +
		"\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0105\x05\x18\r\x02\u0101" +
		"\u0102\x07F\x02\x02\u0102\u0104\x05\x18\r\x02\u0103\u0101\x03\x02\x02" +
		"\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\x1B\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02" +
		"\u0108\u010D\x05\x1A\x0E\x02\u0109\u010A\x07C\x02\x02\u010A\u010C\x05" +
		"\x1A\x0E\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D" +
		"\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\x1D\x03\x02\x02" +
		"\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0115\x05\x1C\x0F\x02\u0111\u0112" +
		"\x07D\x02\x02\u0112\u0114\x05\x1C\x0F\x02\u0113\u0111\x03\x02\x02\x02" +
		"\u0114\u0117\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03" +
		"\x02\x02\x02\u0116\x1F\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118" +
		"\u011D\x05\x1E\x10\x02\u0119\u011A\x07E\x02\x02\u011A\u011C\x05\x1E\x10" +
		"\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E!\x03\x02\x02\x02\u011F" +
		"\u011D\x03\x02\x02\x02\u0120\u0126\x05 \x11\x02\u0121\u0122\x07I\x02\x02" +
		"\u0122\u0123\x05(\x15\x02\u0123\u0124\x07J\x02\x02\u0124\u0125\x05\"\x12" +
		"\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127#\x03\x02\x02\x02\u0128\u012F\x05\"\x12\x02\u0129" +
		"\u012A\x05\b\x05\x02\u012A\u012B\x05&\x14\x02\u012B\u012C\x05$\x13\x02" +
		"\u012C\u012F\x03\x02\x02\x02\u012D\u012F\x07_\x02\x02\u012E\u0128\x03" +
		"\x02\x02\x02\u012E\u0129\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F" +
		"%\x03\x02\x02\x02\u0130\u0131\t\v\x02\x02\u0131\'\x03\x02\x02\x02\u0132" +
		"\u0137\x05$\x13\x02\u0133\u0134\x07L\x02\x02\u0134\u0136\x05$\x13\x02" +
		"\u0135\u0133\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03" +
		"\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138)\x03\x02\x02\x02\u0139" +
		"\u0137\x03\x02\x02\x02\u013A\u013B\x05\"\x12\x02\u013B+\x03\x02\x02\x02" +
		"\u013C\u013E\x05.\x18\x02\u013D\u013F\x054\x1B\x02\u013E\u013D\x03\x02" +
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"\u0141\x07K\x02\x02\u0141-\x03\x02\x02\x02\u0142\u0144\x052\x1A\x02\u0143" +
		"\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0143\x03\x02" +
		"\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146/\x03\x02\x02\x02\u0147\u0149" +
		"\x052\x1A\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02" +
		"\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B1\x03\x02" +
		"\x02\x02\u014C\u014F\x058\x1D\x02\u014D\u014F\x05:\x1E\x02\u014E\u014C" +
		"\x03\x02\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F3\x03\x02\x02\x02\u0150" +
		"\u0155\x056\x1C\x02\u0151\u0152\x07L\x02\x02\u0152\u0154\x056\x1C\x02" +
		"\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u01565\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0158\u015B\x05R*\x02\u0159\u015A\x07M\x02\x02" +
		"\u015A\u015C\x05d3\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C7\x03\x02\x02\x02\u015D\u015E\x07\x1F\x02\x02\u015E9\x03" +
		"\x02\x02\x02\u015F\u016C\x07\"\x02\x02\u0160\u016C\x07\x06\x02\x02\u0161" +
		"\u016C\x07\x19\x02\x02\u0162\u016C\x07\x14\x02\x02\u0163\u016C\x07\x15" +
		"\x02\x02\u0164\u016C\x07\x0F\x02\x02\u0165\u016C\x07\v\x02\x02\u0166\u016C" +
		"\x07\x1A\x02\x02\u0167\u016C\x07!\x02\x02\u0168\u016C\x05<\x1F\x02\u0169" +
		"\u016C\x05J&\x02\u016A\u016C\x05b2\x02\u016B\u015F\x03\x02\x02\x02\u016B" +
		"\u0160\x03\x02\x02\x02\u016B\u0161\x03\x02\x02\x02\u016B\u0162\x03\x02" +
		"\x02\x02\u016B\u0163\x03\x02\x02\x02\u016B\u0164\x03\x02\x02\x02\u016B" +
		"\u0165\x03\x02\x02\x02\u016B\u0166\x03\x02\x02\x02\u016B\u0167\x03\x02" +
		"\x02\x02\u016B\u0168\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B" +
		"\u016A\x03\x02\x02\x02\u016C;\x03\x02\x02\x02\u016D\u016F\x05> \x02\u016E" +
		"\u0170\x07]\x02\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02" +
		"\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x073\x02\x02\u0172\u0173" +
		"\x05@!\x02\u0173\u0174\x074\x02\x02\u0174\u0179\x03\x02\x02\x02\u0175" +
		"\u0176\x05> \x02\u0176\u0177\x07]\x02\x02\u0177\u0179\x03\x02\x02\x02" +
		"\u0178\u016D\x03\x02\x02\x02\u0178\u0175\x03\x02\x02\x02\u0179=\x03\x02" +
		"\x02\x02\u017A\u017B\t\f\x02\x02\u017B?\x03\x02\x02\x02\u017C\u017E\x05" +
		"B\"\x02\u017D\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180A\x03\x02\x02" +
		"\x02\u0181\u0182\x05D#\x02\u0182\u0183\x05F$\x02\u0183\u0184\x07K\x02" +
		"\x02\u0184\u0189\x03\x02\x02\x02\u0185\u0186\x05D#\x02\u0186\u0187\x07" +
		"K\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188\u0181\x03\x02\x02\x02\u0188" +
		"\u0185\x03\x02\x02\x02\u0189C\x03\x02\x02\x02\u018A\u018C\x05:\x1E\x02" +
		"\u018B\u018D\x05D#\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018DE\x03\x02\x02\x02\u018E\u0193\x05H%\x02\u018F\u0190\x07" +
		"L\x02\x02\u0190\u0192\x05H%\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0195" +
		"\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194G\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u019D\x05R*" +
		"\x02\u0197\u0199\x05R*\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03" +
		"\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x07J\x02\x02\u019B" +
		"\u019D\x05*\x16\x02\u019C\u0196\x03\x02\x02\x02\u019C\u0198\x03\x02\x02" +
		"\x02\u019DI\x03\x02\x02\x02\u019E\u01A0\x07\r\x02\x02\u019F\u01A1\x07" +
		"]\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1" +
		"\u01A2\x03\x02\x02\x02\u01A2\u01A3\x073\x02\x02\u01A3\u01A5\x05L\'\x02" +
		"\u01A4\u01A6\x07L\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03" +
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x074\x02\x02\u01A8" +
		"\u01AC\x03\x02\x02\x02\u01A9\u01AA\x07\r\x02\x02\u01AA\u01AC\x07]\x02" +
		"\x02\u01AB\u019E\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01ACK\x03" +
		"\x02\x02\x02\u01AD\u01B2\x05N(\x02\u01AE\u01AF\x07L\x02\x02\u01AF\u01B1" +
		"\x05N(\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2" +
		"\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3M\x03\x02\x02" +
		"\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B8\x05P)\x02\u01B6\u01B7\x07" +
		"M\x02\x02\u01B7\u01B9\x05*\x16\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9" +
		"\x03\x02\x02\x02\u01B9O\x03\x02\x02\x02\u01BA\u01BB\x07]\x02\x02\u01BB" +
		"Q\x03\x02\x02\x02\u01BC\u01BE\x05X-\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD" +
		"\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x05T+\x02" +
		"\u01C0S\x03\x02\x02\x02\u01C1\u01C2\b+\x01\x02\u01C2\u01C8\x07]\x02\x02" +
		"\u01C3\u01C4\x07/\x02\x02\u01C4\u01C5\x05R*\x02\u01C5\u01C6\x070\x02\x02" +
		"\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01C1\x03\x02\x02\x02\u01C7\u01C3\x03" +
		"\x02\x02\x02\u01C8\u01DC\x03\x02\x02\x02\u01C9\u01CA\f\x05\x02\x02\u01CA" +
		"\u01CC\x071\x02\x02\u01CB\u01CD\x07_\x02\x02\u01CC\u01CB\x03\x02\x02\x02" +
		"\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01DB\x07" +
		"2\x02\x02\u01CF\u01D0\f\x04\x02\x02\u01D0\u01D1\x07/\x02\x02\u01D1\u01D2" +
		"\x05Z.\x02\u01D2\u01D3\x070\x02\x02\u01D3\u01DB\x03\x02\x02\x02\u01D4" +
		"\u01D5\f\x03\x02\x02\u01D5\u01D7\x07/\x02\x02\u01D6\u01D8\x05^0\x02\u01D7" +
		"\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02" +
		"\x02\x02\u01D9\u01DB\x070\x02\x02\u01DA\u01C9\x03\x02\x02\x02\u01DA\u01CF" +
		"\x03\x02\x02\x02\u01DA\u01D4\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02" +
		"\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DDU\x03\x02" +
		"\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E5\n\r\x02\x02\u01E0\u01E1" +
		"\x07/\x02\x02\u01E1\u01E2\x05V,\x02\u01E2\u01E3\x070\x02\x02\u01E3\u01E5" +
		"\x03\x02\x02\x02\u01E4\u01DF\x03\x02\x02\x02\u01E4\u01E0\x03\x02\x02\x02" +
		"\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03" +
		"\x02\x02\x02\u01E7W\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9" +
		"\u01EB\x07?\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02" +
		"\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01EDY\x03" +
		"\x02\x02\x02\u01EE\u01F3\x05\\/\x02\u01EF\u01F0\x07L\x02\x02\u01F0\u01F2" +
		"\x05\\/\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3" +
		"\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4[\x03\x02\x02" +
		"\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F7\x05.\x18\x02\u01F7\u01F8" +
		"\x05R*\x02\u01F8\u01FE\x03\x02\x02\x02\u01F9\u01FB\x05.\x18\x02\u01FA" +
		"\u01FC\x05X-\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02" +
		"\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01F6\x03\x02\x02\x02\u01FD\u01F9\x03" +
		"\x02\x02\x02\u01FE]\x03\x02\x02\x02\u01FF\u0204\x07]\x02\x02\u0200\u0201" +
		"\x07L\x02\x02\u0201\u0203\x07]\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203" +
		"\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02" +
		"\x02\x02\u0205_\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207\u0208" +
		"\x05D#\x02\u0208a\x03\x02\x02\x02\u0209\u020A\x07]\x02\x02\u020Ac\x03" +
		"\x02\x02\x02\u020B\u0214\x05$\x13\x02\u020C\u020D\x073\x02\x02\u020D\u020F" +
		"\x05f4\x02\u020E\u0210\x07L\x02\x02\u020F\u020E\x03\x02\x02\x02\u020F" +
		"\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x074\x02" +
		"\x02\u0212\u0214\x03\x02\x02\x02\u0213\u020B\x03\x02\x02\x02\u0213\u020C" +
		"\x03\x02\x02\x02\u0214e\x03\x02\x02\x02\u0215\u0217\x05h5\x02\u0216\u0215" +
		"\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02" +
		"\u0218\u0220\x05d3\x02\u0219\u021B\x07L\x02\x02\u021A\u021C\x05h5\x02" +
		"\u021B\u021A";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02" +
		"\u021D\u021F\x05d3\x02\u021E\u0219\x03\x02\x02\x02\u021F\u0222\x03\x02" +
		"\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221" +
		"g\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0224\x05j6\x02\u0224" +
		"\u0225\x07M\x02\x02\u0225i\x03\x02\x02\x02\u0226\u0228\x05l7\x02\u0227" +
		"\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u0227\x03\x02" +
		"\x02\x02\u0229\u022A\x03\x02\x02\x02\u022Ak\x03\x02\x02\x02\u022B\u022C" +
		"\x071\x02\x02\u022C\u022D\x05*\x16\x02\u022D\u022E\x072\x02\x02\u022E" +
		"\u0232\x03\x02\x02\x02\u022F\u0230\x07[\x02\x02\u0230\u0232\x07]\x02\x02" +
		"\u0231\u022B\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0232m\x03\x02" +
		"\x02\x02\u0233\u023A\x05p9\x02\u0234\u023A\x05r:\x02\u0235\u023A\x05x" +
		"=\x02\u0236\u023A\x05z>\x02\u0237\u023A\x05|?\x02\u0238\u023A\x05\x84" +
		"C\x02\u0239\u0233\x03\x02\x02\x02\u0239\u0234\x03\x02\x02\x02\u0239\u0235" +
		"\x03\x02\x02\x02\u0239\u0236\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02" +
		"\u0239\u0238\x03\x02\x02\x02\u023Ao\x03\x02\x02\x02\u023B\u023C\x07\x05" +
		"\x02\x02\u023C\u023D\x05*\x16\x02\u023D\u023E\x07J\x02\x02\u023E\u023F" +
		"\x05n8\x02\u023F\u0244\x03\x02\x02\x02\u0240\u0241\x07\t\x02\x02\u0241" +
		"\u0242\x07J\x02\x02\u0242\u0244\x05n8\x02\u0243\u023B\x03\x02\x02\x02" +
		"\u0243\u0240\x03\x02\x02\x02\u0244q\x03\x02\x02\x02\u0245\u0247\x073\x02" +
		"\x02\u0246\u0248\x05t;\x02\u0247\u0246\x03\x02\x02\x02\u0247\u0248\x03" +
		"\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024A\x074\x02\x02\u024A" +
		"s\x03\x02\x02\x02\u024B\u024D\x05v<\x02\u024C\u024B\x03\x02\x02\x02\u024D" +
		"\u024E\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02" +
		"\x02\x02\u024Fu\x03\x02\x02\x02\u0250\u0253\x05n8\x02\u0251\u0253\x05" +
		",\x17\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0251\x03\x02\x02\x02\u0253" +
		"w\x03\x02\x02\x02\u0254\u0256\x05(\x15\x02\u0255\u0254\x03\x02\x02\x02" +
		"\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x07" +
		"K\x02\x02\u0258y\x03\x02\x02\x02\u0259\u025A\x07\x12\x02\x02\u025A\u025B" +
		"\x07/\x02\x02\u025B\u025C\x05(\x15\x02\u025C\u025D\x070\x02\x02\u025D" +
		"\u0260\x05n8\x02\u025E\u025F\x07\f\x02\x02\u025F\u0261\x05n8\x02\u0260" +
		"\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0269\x03\x02" +
		"\x02\x02\u0262\u0263\x07\x1E\x02\x02\u0263\u0264\x07/\x02\x02\u0264\u0265" +
		"\x05(\x15\x02\u0265\u0266\x070\x02\x02\u0266\u0267\x05n8\x02\u0267\u0269" +
		"\x03\x02\x02\x02\u0268\u0259\x03\x02\x02\x02\u0268\u0262\x03\x02\x02\x02" +
		"\u0269{\x03\x02\x02\x02\u026A\u026B\x07$\x02\x02\u026B\u026C\x07/\x02" +
		"\x02\u026C\u026D\x05(\x15\x02\u026D\u026E\x070\x02\x02\u026E\u026F\x05" +
		"n8\x02\u026F\u027F\x03\x02\x02\x02\u0270\u0271\x07\n\x02\x02\u0271\u0272" +
		"\x05n8\x02\u0272\u0273\x07$\x02\x02\u0273\u0274\x07/\x02\x02\u0274\u0275" +
		"\x05(\x15\x02\u0275\u0276\x070\x02\x02\u0276\u0277\x07K\x02\x02\u0277" +
		"\u027F\x03\x02\x02\x02\u0278\u0279\x07\x10\x02\x02\u0279\u027A\x07/\x02" +
		"\x02\u027A\u027B\x05~@\x02\u027B\u027C\x070\x02\x02\u027C\u027D\x05n8" +
		"\x02\u027D\u027F\x03\x02\x02\x02\u027E\u026A\x03\x02\x02\x02\u027E\u0270" +
		"\x03\x02\x02\x02\u027E\u0278\x03\x02\x02\x02\u027F}\x03\x02\x02\x02\u0280" +
		"\u0285\x05\x80A\x02\u0281\u0283\x05(\x15\x02\u0282\u0281\x03\x02\x02\x02" +
		"\u0282\u0283\x03\x02\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0280\x03" +
		"\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286" +
		"\u0288\x07K\x02\x02\u0287\u0289\x05\x82B\x02\u0288\u0287\x03\x02\x02\x02" +
		"\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x07" +
		"K\x02\x02\u028B\u028D\x05\x82B\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D" +
		"\x03\x02\x02\x02\u028D\x7F\x03\x02\x02\x02\u028E\u0290\x05.\x18\x02\u028F" +
		"\u0291\x054\x1B\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02" +
		"\x02\u0291\x81\x03\x02\x02\x02\u0292\u0297\x05$\x13\x02\u0293\u0294\x07" +
		"L\x02\x02\u0294\u0296\x05$\x13\x02\u0295\u0293\x03\x02\x02\x02\u0296\u0299" +
		"\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02" +
		"\u0298\x83\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u029A\u02A0\t\x0E" +
		"\x02\x02\u029B\u029D\x07\x18\x02\x02\u029C\u029E\x05(\x15\x02\u029D\u029C" +
		"\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02" +
		"\u029F\u029A\x03\x02\x02\x02\u029F\u029B\x03\x02\x02\x02\u02A0\u02A1\x03" +
		"\x02\x02\x02\u02A1\u02A2\x07K\x02\x02\u02A2\x85\x03\x02\x02\x02\u02A3" +
		"\u02A5\x05\x88E\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02" +
		"\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8" +
		"\x03\x02\x02\x02\u02A8\u02A9\x07\x02\x02\x03\u02A9\x87\x03\x02\x02\x02" +
		"\u02AA\u02AE\x05\x8AF\x02\u02AB\u02AE\x05,\x17\x02\u02AC\u02AE\x07K\x02" +
		"\x02\u02AD\u02AA\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AC" +
		"\x03\x02\x02\x02\u02AE\x89\x03\x02\x02\x02\u02AF\u02B1\x05.\x18\x02\u02B0" +
		"\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02" +
		"\x02\x02\u02B2\u02B4\x05R*\x02\u02B3\u02B5\x05\x8CG\x02\u02B4\u02B3\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
		"\u02B7\x05r:\x02\u02B7\x8B\x03\x02\x02\x02\u02B8\u02BA\x05,\x17\x02\u02B9" +
		"\u02B8\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02B9\x03\x02" +
		"\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\x8D\x03\x02\x02\x02V\x93\x99" +
		"\xA2\xA8\xAA\xB2\xB8\xC4\xCE\xD5\xDD\xE5\xED\xF5\xFD\u0105\u010D\u0115" +
		"\u011D\u0126\u012E\u0137\u013E\u0145\u014A\u014E\u0155\u015B\u016B\u016F" +
		"\u0178\u017F\u0188\u018C\u0193\u0198\u019C\u01A0\u01A5\u01AB\u01B2\u01B8" +
		"\u01BD\u01C7\u01CC\u01D7\u01DA\u01DC\u01E4\u01E6\u01EC\u01F3\u01FB\u01FD" +
		"\u0204\u020F\u0213\u0216\u021B\u0220\u0229\u0231\u0239\u0243\u0247\u024E" +
		"\u0252\u0255\u0260\u0268\u027E\u0282\u0284\u0288\u028C\u0290\u0297\u029D" +
		"\u029F\u02A6\u02AD\u02B0\u02B4\u02BB";
	public static readonly _serializedATN: string = Utils.join(
		[
			CParser._serializedATNSegment0,
			CParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(CParser.Constant, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.StringLiteral);
		} else {
			return this.getToken(CParser.StringLiteral, i);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_primaryExpression; }
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftBracket);
		} else {
			return this.getToken(CParser.LeftBracket, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightBracket);
		} else {
			return this.getToken(CParser.RightBracket, i);
		}
	}
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Identifier);
		} else {
			return this.getToken(CParser.Identifier, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Dot);
		} else {
			return this.getToken(CParser.Dot, i);
		}
	}
	public Arrow(): TerminalNode[];
	public Arrow(i: number): TerminalNode;
	public Arrow(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Arrow);
		} else {
			return this.getToken(CParser.Arrow, i);
		}
	}
	public PlusPlus(): TerminalNode[];
	public PlusPlus(i: number): TerminalNode;
	public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.PlusPlus);
		} else {
			return this.getToken(CParser.PlusPlus, i);
		}
	}
	public MinusMinus(): TerminalNode[];
	public MinusMinus(i: number): TerminalNode;
	public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.MinusMinus);
		} else {
			return this.getToken(CParser.MinusMinus, i);
		}
	}
	public argumentExpressionList(): ArgumentExpressionListContext[];
	public argumentExpressionList(i: number): ArgumentExpressionListContext;
	public argumentExpressionList(i?: number): ArgumentExpressionListContext | ArgumentExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentExpressionListContext);
		} else {
			return this.getRuleContext(i, ArgumentExpressionListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfixExpression; }
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_argumentExpressionList; }
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public PlusPlus(): TerminalNode[];
	public PlusPlus(i: number): TerminalNode;
	public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.PlusPlus);
		} else {
			return this.getToken(CParser.PlusPlus, i);
		}
	}
	public MinusMinus(): TerminalNode[];
	public MinusMinus(i: number): TerminalNode;
	public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.MinusMinus);
		} else {
			return this.getToken(CParser.MinusMinus, i);
		}
	}
	public Sizeof(): TerminalNode[];
	public Sizeof(i: number): TerminalNode;
	public Sizeof(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Sizeof);
		} else {
			return this.getToken(CParser.Sizeof, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryExpression; }
}


export class UnaryOperatorContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CParser.And, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CParser.Minus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CParser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryOperator; }
}


export class CastExpressionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_castExpression; }
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext[];
	public castExpression(i: number): CastExpressionContext;
	public castExpression(i?: number): CastExpressionContext | CastExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CastExpressionContext);
		} else {
			return this.getRuleContext(i, CastExpressionContext);
		}
	}
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Star);
		} else {
			return this.getToken(CParser.Star, i);
		}
	}
	public Div(): TerminalNode[];
	public Div(i: number): TerminalNode;
	public Div(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Div);
		} else {
			return this.getToken(CParser.Div, i);
		}
	}
	public Mod(): TerminalNode[];
	public Mod(i: number): TerminalNode;
	public Mod(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Mod);
		} else {
			return this.getToken(CParser.Mod, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_multiplicativeExpression; }
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Plus);
		} else {
			return this.getToken(CParser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Minus);
		} else {
			return this.getToken(CParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_additiveExpression; }
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public LeftShift(): TerminalNode[];
	public LeftShift(i: number): TerminalNode;
	public LeftShift(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftShift);
		} else {
			return this.getToken(CParser.LeftShift, i);
		}
	}
	public RightShift(): TerminalNode[];
	public RightShift(i: number): TerminalNode;
	public RightShift(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightShift);
		} else {
			return this.getToken(CParser.RightShift, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_shiftExpression; }
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Less);
		} else {
			return this.getToken(CParser.Less, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Greater);
		} else {
			return this.getToken(CParser.Greater, i);
		}
	}
	public LessEqual(): TerminalNode[];
	public LessEqual(i: number): TerminalNode;
	public LessEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LessEqual);
		} else {
			return this.getToken(CParser.LessEqual, i);
		}
	}
	public GreaterEqual(): TerminalNode[];
	public GreaterEqual(i: number): TerminalNode;
	public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.GreaterEqual);
		} else {
			return this.getToken(CParser.GreaterEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_relationalExpression; }
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public Equal(): TerminalNode[];
	public Equal(i: number): TerminalNode;
	public Equal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Equal);
		} else {
			return this.getToken(CParser.Equal, i);
		}
	}
	public NotEqual(): TerminalNode[];
	public NotEqual(i: number): TerminalNode;
	public NotEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.NotEqual);
		} else {
			return this.getToken(CParser.NotEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_equalityExpression; }
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.And);
		} else {
			return this.getToken(CParser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_andExpression; }
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public Caret(): TerminalNode[];
	public Caret(i: number): TerminalNode;
	public Caret(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Caret);
		} else {
			return this.getToken(CParser.Caret, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_exclusiveOrExpression; }
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext[];
	public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(i?: number): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, ExclusiveOrExpressionContext);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Or);
		} else {
			return this.getToken(CParser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_inclusiveOrExpression; }
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext[];
	public inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
	public inclusiveOrExpression(i?: number): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, InclusiveOrExpressionContext);
		}
	}
	public AndAnd(): TerminalNode[];
	public AndAnd(i: number): TerminalNode;
	public AndAnd(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.AndAnd);
		} else {
			return this.getToken(CParser.AndAnd, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalAndExpression; }
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	public OrOr(): TerminalNode[];
	public OrOr(i: number): TerminalNode;
	public OrOr(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.OrOr);
		} else {
			return this.getToken(CParser.OrOr, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_logicalOrExpression; }
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CParser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_conditionalExpression; }
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentExpression; }
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.MinusAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftShiftAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.RightShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CParser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentOperator; }
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expression; }
}


export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_constantExpression; }
}


export class DeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declaration; }
}


export class DeclarationSpecifiersContext extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifiers; }
}


export class DeclarationSpecifiers2Context extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifiers2; }
}


export class DeclarationSpecifierContext extends ParserRuleContext {
	public storageClassSpecifier(): StorageClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageClassSpecifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifier; }
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext[];
	public initDeclarator(i: number): InitDeclaratorContext;
	public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitDeclaratorContext);
		} else {
			return this.getRuleContext(i, InitDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclaratorList; }
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initDeclarator; }
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	public Typedef(): TerminalNode { return this.getToken(CParser.Typedef, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_storageClassSpecifier; }
}


export class TypeSpecifierContext extends ParserRuleContext {
	public Void(): TerminalNode | undefined { return this.tryGetToken(CParser.Void, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(CParser.Char, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CParser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CParser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CParser.Long, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CParser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CParser.Double, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CParser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CParser.Unsigned, 0); }
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StructOrUnionSpecifierContext);
	}
	public enumSpecifier(): EnumSpecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumSpecifierContext);
	}
	public typedefName(): TypedefNameContext | undefined {
		return this.tryGetRuleContext(0, TypedefNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeSpecifier; }
}


export class StructOrUnionSpecifierContext extends ParserRuleContext {
	public structOrUnion(): StructOrUnionContext {
		return this.getRuleContext(0, StructOrUnionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public structDeclarationList(): StructDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structOrUnionSpecifier; }
}


export class StructOrUnionContext extends ParserRuleContext {
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CParser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CParser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structOrUnion; }
}


export class StructDeclarationListContext extends ParserRuleContext {
	public structDeclaration(): StructDeclarationContext[];
	public structDeclaration(i: number): StructDeclarationContext;
	public structDeclaration(i?: number): StructDeclarationContext | StructDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDeclarationContext);
		} else {
			return this.getRuleContext(i, StructDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclarationList; }
}


export class StructDeclarationContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getRuleContext(0, SpecifierQualifierListContext);
	}
	public structDeclaratorList(): StructDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclaratorListContext);
	}
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclaration; }
}


export class SpecifierQualifierListContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_specifierQualifierList; }
}


export class StructDeclaratorListContext extends ParserRuleContext {
	public structDeclarator(): StructDeclaratorContext[];
	public structDeclarator(i: number): StructDeclaratorContext;
	public structDeclarator(i?: number): StructDeclaratorContext | StructDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDeclaratorContext);
		} else {
			return this.getRuleContext(i, StructDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclaratorList; }
}


export class StructDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CParser.Colon, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_structDeclarator; }
}


export class EnumSpecifierContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CParser.Enum, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumSpecifier; }
}


export class EnumeratorListContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext[];
	public enumerator(i: number): EnumeratorContext;
	public enumerator(i?: number): EnumeratorContext | EnumeratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumeratorContext);
		} else {
			return this.getRuleContext(i, EnumeratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumeratorList; }
}


export class EnumeratorContext extends ParserRuleContext {
	public enumerationConstant(): EnumerationConstantContext {
		return this.getRuleContext(0, EnumerationConstantContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CParser.Assign, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumerator; }
}


export class EnumerationConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_enumerationConstant; }
}


export class DeclaratorContext extends ParserRuleContext {
	public directDeclarator(): DirectDeclaratorContext {
		return this.getRuleContext(0, DirectDeclaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarator; }
}


export class DirectDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftParen, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CParser.RightParen, 0); }
	public directDeclarator(): DirectDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectDeclaratorContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CParser.DigitSequence, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_directDeclarator; }
}


export class NestedParenthesesBlockContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.LeftParen);
		} else {
			return this.getToken(CParser.LeftParen, i);
		}
	}
	public nestedParenthesesBlock(): NestedParenthesesBlockContext[];
	public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext;
	public nestedParenthesesBlock(i?: number): NestedParenthesesBlockContext | NestedParenthesesBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedParenthesesBlockContext);
		} else {
			return this.getRuleContext(i, NestedParenthesesBlockContext);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.RightParen);
		} else {
			return this.getToken(CParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_nestedParenthesesBlock; }
}


export class PointerContext extends ParserRuleContext {
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Star);
		} else {
			return this.getToken(CParser.Star, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointer; }
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterList; }
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterDeclaration; }
}


export class IdentifierListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Identifier);
		} else {
			return this.getToken(CParser.Identifier, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_identifierList; }
}


export class TypeNameContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getRuleContext(0, SpecifierQualifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeName; }
}


export class TypedefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typedefName; }
}


export class InitializerContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializer; }
}


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext[];
	public initializer(i: number): InitializerContext;
	public initializer(i?: number): InitializerContext | InitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerContext);
		} else {
			return this.getRuleContext(i, InitializerContext);
		}
	}
	public designation(): DesignationContext[];
	public designation(i: number): DesignationContext;
	public designation(i?: number): DesignationContext | DesignationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DesignationContext);
		} else {
			return this.getRuleContext(i, DesignationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializerList; }
}


export class DesignationContext extends ParserRuleContext {
	public designatorList(): DesignatorListContext {
		return this.getRuleContext(0, DesignatorListContext);
	}
	public Assign(): TerminalNode { return this.getToken(CParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designation; }
}


export class DesignatorListContext extends ParserRuleContext {
	public designator(): DesignatorContext[];
	public designator(i: number): DesignatorContext;
	public designator(i?: number): DesignatorContext | DesignatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DesignatorContext);
		} else {
			return this.getRuleContext(i, DesignatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designatorList; }
}


export class DesignatorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.LeftBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CParser.RightBracket, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_designator; }
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_statement; }
}


export class LabeledStatementContext extends ParserRuleContext {
	public Case(): TerminalNode | undefined { return this.tryGetToken(CParser.Case, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Colon(): TerminalNode { return this.getToken(CParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_labeledStatement; }
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CParser.RightBrace, 0); }
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compoundStatement; }
}


export class BlockItemListContext extends ParserRuleContext {
	public blockItem(): BlockItemContext[];
	public blockItem(i: number): BlockItemContext;
	public blockItem(i?: number): BlockItemContext | BlockItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockItemContext);
		} else {
			return this.getRuleContext(i, BlockItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItemList; }
}


export class BlockItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItem; }
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expressionStatement; }
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CParser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CParser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_selectionStatement; }
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CParser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CParser.Do, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CParser.For, 0); }
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_iterationStatement; }
}


export class ForConditionContext extends ParserRuleContext {
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Semi);
		} else {
			return this.getToken(CParser.Semi, i);
		}
	}
	public forDeclaration(): ForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForDeclarationContext);
	}
	public forExpression(): ForExpressionContext[];
	public forExpression(i: number): ForExpressionContext;
	public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForExpressionContext);
		} else {
			return this.getRuleContext(i, ForExpressionContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forCondition; }
}


export class ForDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forDeclaration; }
}


export class ForExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.Comma);
		} else {
			return this.getToken(CParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forExpression; }
}


export class JumpStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CParser.Semi, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CParser.Return, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CParser.Continue, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CParser.Break, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_jumpStatement; }
}


export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CParser.EOF, 0); }
	public externalDeclaration(): ExternalDeclarationContext[];
	public externalDeclaration(i: number): ExternalDeclarationContext;
	public externalDeclaration(i?: number): ExternalDeclarationContext | ExternalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternalDeclarationContext);
		} else {
			return this.getRuleContext(i, ExternalDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compilationUnit; }
}


export class ExternalDeclarationContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_externalDeclaration; }
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionDefinition; }
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationList; }
}


