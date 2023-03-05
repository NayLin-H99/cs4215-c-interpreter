// Generated from ./C.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CListener from "./CListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CParser extends Parser {
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
	public static readonly EOF = Token.EOF;
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
	public static readonly literalNames: (string | null)[] = [ null, "'auto'", 
                                                            "'break'", "'case'", 
                                                            "'char'", "'const'", 
                                                            "'continue'", 
                                                            "'default'", 
                                                            "'do'", "'double'", 
                                                            "'else'", "'enum'", 
                                                            "'extern'", 
                                                            "'float'", "'for'", 
                                                            "'goto'", "'if'", 
                                                            "'inline'", 
                                                            "'int'", "'long'", 
                                                            "'register'", 
                                                            "'restrict'", 
                                                            "'return'", 
                                                            "'short'", "'signed'", 
                                                            "'sizeof'", 
                                                            "'static'", 
                                                            "'struct'", 
                                                            "'switch'", 
                                                            "'typedef'", 
                                                            "'union'", "'unsigned'", 
                                                            "'void'", "'volatile'", 
                                                            "'while'", "'_Alignas'", 
                                                            "'_Alignof'", 
                                                            "'_Atomic'", 
                                                            "'_Bool'", "'_Complex'", 
                                                            "'_Generic'", 
                                                            "'_Imaginary'", 
                                                            "'_Noreturn'", 
                                                            "'_Static_assert'", 
                                                            "'_Thread_local'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'<<'", "'>>'", 
                                                            "'+'", "'++'", 
                                                            "'-'", "'--'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'&'", 
                                                            "'|'", "'&&'", 
                                                            "'||'", "'^'", 
                                                            "'!'", "'~'", 
                                                            "'?'", "':'", 
                                                            "';'", "','", 
                                                            "'='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'+='", "'-='", 
                                                            "'<<='", "'>>='", 
                                                            "'&='", "'^='", 
                                                            "'|='", "'=='", 
                                                            "'!='", "'->'", 
                                                            "'.'", "'...'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Auto", 
                                                             "Break", "Case", 
                                                             "Char", "Const", 
                                                             "Continue", 
                                                             "Default", 
                                                             "Do", "Double", 
                                                             "Else", "Enum", 
                                                             "Extern", "Float", 
                                                             "For", "Goto", 
                                                             "If", "Inline", 
                                                             "Int", "Long", 
                                                             "Register", 
                                                             "Restrict", 
                                                             "Return", "Short", 
                                                             "Signed", "Sizeof", 
                                                             "Static", "Struct", 
                                                             "Switch", "Typedef", 
                                                             "Union", "Unsigned", 
                                                             "Void", "Volatile", 
                                                             "While", "Alignas", 
                                                             "Alignof", 
                                                             "Atomic", "Bool", 
                                                             "Complex", 
                                                             "Generic", 
                                                             "Imaginary", 
                                                             "Noreturn", 
                                                             "StaticAssert", 
                                                             "ThreadLocal", 
                                                             "LeftParen", 
                                                             "RightParen", 
                                                             "LeftBracket", 
                                                             "RightBracket", 
                                                             "LeftBrace", 
                                                             "RightBrace", 
                                                             "Less", "LessEqual", 
                                                             "Greater", 
                                                             "GreaterEqual", 
                                                             "LeftShift", 
                                                             "RightShift", 
                                                             "Plus", "PlusPlus", 
                                                             "Minus", "MinusMinus", 
                                                             "Star", "Div", 
                                                             "Mod", "And", 
                                                             "Or", "AndAnd", 
                                                             "OrOr", "Caret", 
                                                             "Not", "Tilde", 
                                                             "Question", 
                                                             "Colon", "Semi", 
                                                             "Comma", "Assign", 
                                                             "StarAssign", 
                                                             "DivAssign", 
                                                             "ModAssign", 
                                                             "PlusAssign", 
                                                             "MinusAssign", 
                                                             "LeftShiftAssign", 
                                                             "RightShiftAssign", 
                                                             "AndAssign", 
                                                             "XorAssign", 
                                                             "OrAssign", 
                                                             "Equal", "NotEqual", 
                                                             "Arrow", "Dot", 
                                                             "Ellipsis", 
                                                             "Identifier", 
                                                             "Constant", 
                                                             "DigitSequence", 
                                                             "StringLiteral", 
                                                             "ComplexDefine", 
                                                             "IncludeDirective", 
                                                             "AsmBlock", 
                                                             "LineAfterPreprocessing", 
                                                             "LineDirective", 
                                                             "PragmaDirective", 
                                                             "Whitespace", 
                                                             "Newline", 
                                                             "BlockComment", 
                                                             "LineComment" ];
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
	public get grammarFileName(): string { return "C.g4"; }
	public get literalNames(): (string | null)[] { return CParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CParser.symbolicNames; }
	public get ruleNames(): string[] { return CParser.ruleNames; }
	public get serializedATN(): number[] { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CParser._ATN, CParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 140;
				this.match(CParser.Identifier);
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 141;
				this.match(CParser.Constant);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 3);
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
				} while (_la===94);
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 4);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 153;
			this.primaryExpression();
			}
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 40965) !== 0) || _la===88 || _la===89) {
				{
				this.state = 166;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 47:
					{
					this.state = 154;
					this.match(CParser.LeftBracket);
					this.state = 155;
					this.expression();
					this.state = 156;
					this.match(CParser.RightBracket);
					}
					break;
				case 45:
					{
					this.state = 158;
					this.match(CParser.LeftParen);
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===25 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 50982913) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 15) !== 0)) {
						{
						this.state = 159;
						this.argumentExpressionList();
						}
					}

					this.state = 162;
					this.match(CParser.RightParen);
					}
					break;
				case 88:
				case 89:
					{
					this.state = 163;
					_la = this._input.LA(1);
					if(!(_la===88 || _la===89)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 164;
					this.match(CParser.Identifier);
					}
					break;
				case 58:
				case 60:
					{
					this.state = 165;
					_la = this._input.LA(1);
					if(!(_la===58 || _la===60)) {
					this._errHandler.recoverInline(this);
					}
					else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentExpressionList(): ArgumentExpressionListContext {
		let localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this.assignmentExpression();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CParser.RULE_unaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 179;
					_la = this._input.LA(1);
					if(!(_la===25 || _la===58 || _la===60)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 45:
			case 91:
			case 92:
			case 94:
				{
				this.state = 185;
				this.postfixExpression();
				}
				break;
			case 57:
			case 59:
			case 61:
			case 64:
			case 69:
			case 70:
				{
				this.state = 186;
				this.unaryOperator();
				this.state = 187;
				this.castExpression();
				}
				break;
			case 25:
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 12437) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let localctx: CastExpressionContext = new CastExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CParser.RULE_castExpression);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
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
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 203;
				this.unaryExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 204;
				this.match(CParser.DigitSequence);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.castExpression();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 7) !== 0)) {
				{
				{
				this.state = 208;
				_la = this._input.LA(1);
				if(!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 7) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 209;
				this.castExpression();
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, CParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.multiplicativeExpression();
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===57 || _la===59) {
				{
				{
				this.state = 216;
				_la = this._input.LA(1);
				if(!(_la===57 || _la===59)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 217;
				this.multiplicativeExpression();
				}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let localctx: ShiftExpressionContext = new ShiftExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, CParser.RULE_shiftExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
			this.additiveExpression();
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55 || _la===56) {
				{
				{
				this.state = 224;
				_la = this._input.LA(1);
				if(!(_la===55 || _la===56)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 225;
				this.additiveExpression();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CParser.RULE_relationalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.shiftExpression();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 15) !== 0)) {
				{
				{
				this.state = 232;
				_la = this._input.LA(1);
				if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 233;
				this.shiftExpression();
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, CParser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this.relationalExpression();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86 || _la===87) {
				{
				{
				this.state = 240;
				_la = this._input.LA(1);
				if(!(_la===86 || _la===87)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 241;
				this.relationalExpression();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, CParser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this.equalityExpression();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 248;
				this.match(CParser.And);
				this.state = 249;
				this.equalityExpression();
				}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		let localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CParser.RULE_exclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.andExpression();
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===68) {
				{
				{
				this.state = 256;
				this.match(CParser.Caret);
				this.state = 257;
				this.andExpression();
				}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		let localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CParser.RULE_inclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this.exclusiveOrExpression();
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===65) {
				{
				{
				this.state = 264;
				this.match(CParser.Or);
				this.state = 265;
				this.exclusiveOrExpression();
				}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, CParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 271;
			this.inclusiveOrExpression();
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===66) {
				{
				{
				this.state = 272;
				this.match(CParser.AndAnd);
				this.state = 273;
				this.inclusiveOrExpression();
				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.logicalAndExpression();
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===67) {
				{
				{
				this.state = 280;
				this.match(CParser.OrOr);
				this.state = 281;
				this.logicalAndExpression();
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CParser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			this.logicalOrExpression();
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===71) {
				{
				this.state = 288;
				this.match(CParser.Question);
				this.state = 289;
				this.expression();
				this.state = 290;
				this.match(CParser.Colon);
				this.state = 291;
				this.conditionalExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CParser.RULE_assignmentExpression);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 295;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 296;
				this.unaryExpression();
				this.state = 297;
				this.assignmentOperator();
				this.state = 298;
				this.assignmentExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 300;
				this.match(CParser.DigitSequence);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 303;
			_la = this._input.LA(1);
			if(!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 2047) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, CParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this.assignmentExpression();
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 306;
				this.match(CParser.Comma);
				this.state = 307;
				this.assignmentExpression();
				}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 313;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.declarationSpecifiers();
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45 || _la===61 || _la===91) {
				{
				this.state = 316;
				this.initDeclaratorList();
				}
			}

			this.state = 319;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CParser.RULE_declarationSpecifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 321;
					this.declarationSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifiers2(): DeclarationSpecifiers2Context {
		let localctx: DeclarationSpecifiers2Context = new DeclarationSpecifiers2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CParser.RULE_declarationSpecifiers2);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 326;
				this.declarationSpecifier();
				}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 513327777) !== 0) || _la===91);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifier(): DeclarationSpecifierContext {
		let localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, CParser.RULE_declarationSpecifier);
		try {
			this.state = 333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 331;
				this.storageClassSpecifier();
				}
				break;
			case 4:
			case 9:
			case 11:
			case 13:
			case 18:
			case 19:
			case 23:
			case 24:
			case 27:
			case 30:
			case 31:
			case 32:
			case 91:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 332;
				this.typeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initDeclaratorList(): InitDeclaratorListContext {
		let localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, CParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 335;
			this.initDeclarator();
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 336;
				this.match(CParser.Comma);
				this.state = 337;
				this.initDeclarator();
				}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let localctx: InitDeclaratorContext = new InitDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, CParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
			this.declarator();
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 344;
				this.match(CParser.Assign);
				this.state = 345;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, CParser.RULE_storageClassSpecifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.match(CParser.Typedef);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let localctx: TypeSpecifierContext = new TypeSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, CParser.RULE_typeSpecifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
				{
				this.state = 350;
				this.match(CParser.Void);
				}
				break;
			case 4:
				{
				this.state = 351;
				this.match(CParser.Char);
				}
				break;
			case 23:
				{
				this.state = 352;
				this.match(CParser.Short);
				}
				break;
			case 18:
				{
				this.state = 353;
				this.match(CParser.Int);
				}
				break;
			case 19:
				{
				this.state = 354;
				this.match(CParser.Long);
				}
				break;
			case 13:
				{
				this.state = 355;
				this.match(CParser.Float);
				}
				break;
			case 9:
				{
				this.state = 356;
				this.match(CParser.Double);
				}
				break;
			case 24:
				{
				this.state = 357;
				this.match(CParser.Signed);
				}
				break;
			case 31:
				{
				this.state = 358;
				this.match(CParser.Unsigned);
				}
				break;
			case 27:
			case 30:
				{
				this.state = 359;
				this.structOrUnionSpecifier();
				}
				break;
			case 11:
				{
				this.state = 360;
				this.enumSpecifier();
				}
				break;
			case 91:
				{
				this.state = 361;
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
		let localctx: StructOrUnionSpecifierContext = new StructOrUnionSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, CParser.RULE_structOrUnionSpecifier);
		let _la: number;
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 364;
				this.structOrUnion();
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 365;
					this.match(CParser.Identifier);
					}
				}

				this.state = 368;
				this.match(CParser.LeftBrace);
				this.state = 369;
				this.structDeclarationList();
				this.state = 370;
				this.match(CParser.RightBrace);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 372;
				this.structOrUnion();
				this.state = 373;
				this.match(CParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structOrUnion(): StructOrUnionContext {
		let localctx: StructOrUnionContext = new StructOrUnionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, CParser.RULE_structOrUnion);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 377;
			_la = this._input.LA(1);
			if(!(_la===27 || _la===30)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDeclarationList(): StructDeclarationListContext {
		let localctx: StructDeclarationListContext = new StructDeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, CParser.RULE_structDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 379;
				this.structDeclaration();
				}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 479773345) !== 0) || _la===91);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let localctx: StructDeclarationContext = new StructDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, CParser.RULE_structDeclaration);
		try {
			this.state = 391;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 384;
				this.specifierQualifierList();
				this.state = 385;
				this.structDeclaratorList();
				this.state = 386;
				this.match(CParser.Semi);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 388;
				this.specifierQualifierList();
				this.state = 389;
				this.match(CParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specifierQualifierList(): SpecifierQualifierListContext {
		let localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, CParser.RULE_specifierQualifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			this.typeSpecifier();
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 394;
				this.specifierQualifierList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDeclaratorList(): StructDeclaratorListContext {
		let localctx: StructDeclaratorListContext = new StructDeclaratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, CParser.RULE_structDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			this.structDeclarator();
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 398;
				this.match(CParser.Comma);
				this.state = 399;
				this.structDeclarator();
				}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDeclarator(): StructDeclaratorContext {
		let localctx: StructDeclaratorContext = new StructDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, CParser.RULE_structDeclarator);
		let _la: number;
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 405;
				this.declarator();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45 || _la===61 || _la===91) {
					{
					this.state = 406;
					this.declarator();
					}
				}

				this.state = 409;
				this.match(CParser.Colon);
				this.state = 410;
				this.constantExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumSpecifier(): EnumSpecifierContext {
		let localctx: EnumSpecifierContext = new EnumSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, CParser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 413;
				this.match(CParser.Enum);
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 414;
					this.match(CParser.Identifier);
					}
				}

				this.state = 417;
				this.match(CParser.LeftBrace);
				this.state = 418;
				this.enumeratorList();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 419;
					this.match(CParser.Comma);
					}
				}

				this.state = 422;
				this.match(CParser.RightBrace);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 424;
				this.match(CParser.Enum);
				this.state = 425;
				this.match(CParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumeratorList(): EnumeratorListContext {
		let localctx: EnumeratorListContext = new EnumeratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, CParser.RULE_enumeratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			this.enumerator();
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 429;
					this.match(CParser.Comma);
					this.state = 430;
					this.enumerator();
					}
					}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let localctx: EnumeratorContext = new EnumeratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, CParser.RULE_enumerator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 436;
			this.enumerationConstant();
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 437;
				this.match(CParser.Assign);
				this.state = 438;
				this.constantExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumerationConstant(): EnumerationConstantContext {
		let localctx: EnumerationConstantContext = new EnumerationConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, CParser.RULE_enumerationConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 441;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let localctx: DeclaratorContext = new DeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, CParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 443;
				this.pointer();
				}
			}

			this.state = 446;
			this.directDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this, this._ctx, _parentState);
		let _prevctx: DirectDeclaratorContext = localctx;
		let _startState: number = 82;
		this.enterRecursionRule(localctx, 82, CParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
				{
				this.state = 449;
				this.match(CParser.Identifier);
				}
				break;
			case 45:
				{
				this.state = 450;
				this.match(CParser.LeftParen);
				this.state = 451;
				this.declarator();
				this.state = 452;
				this.match(CParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 475;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 473;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 456;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 457;
						this.match(CParser.LeftBracket);
						this.state = 459;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===93) {
							{
							this.state = 458;
							this.match(CParser.DigitSequence);
							}
						}

						this.state = 461;
						this.match(CParser.RightBracket);
						}
						break;
					case 2:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 462;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 463;
						this.match(CParser.LeftParen);
						this.state = 464;
						this.parameterList();
						this.state = 465;
						this.match(CParser.RightParen);
						}
						break;
					case 3:
						{
						localctx = new DirectDeclaratorContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, CParser.RULE_directDeclarator);
						this.state = 467;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 468;
						this.match(CParser.LeftParen);
						this.state = 470;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===91) {
							{
							this.state = 469;
							this.identifierList();
							}
						}

						this.state = 472;
						this.match(CParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nestedParenthesesBlock(): NestedParenthesesBlockContext {
		let localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, CParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294950911) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 511) !== 0)) {
				{
				this.state = 483;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
					{
					this.state = 478;
					_la = this._input.LA(1);
					if(_la<=0 || _la===45 || _la===46) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				case 45:
					{
					this.state = 479;
					this.match(CParser.LeftParen);
					this.state = 480;
					this.nestedParenthesesBlock();
					this.state = 481;
					this.match(CParser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pointer(): PointerContext {
		let localctx: PointerContext = new PointerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, CParser.RULE_pointer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 488;
				this.match(CParser.Star);
				}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===61);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.parameterDeclaration();
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 494;
				this.match(CParser.Comma);
				this.state = 495;
				this.parameterDeclaration();
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, CParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 501;
				this.declarationSpecifiers();
				this.state = 502;
				this.declarator();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 504;
				this.declarationSpecifiers();
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===61) {
					{
					this.state = 505;
					this.pointer();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, CParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 510;
			this.match(CParser.Identifier);
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 511;
				this.match(CParser.Comma);
				this.state = 512;
				this.match(CParser.Identifier);
				}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, CParser.RULE_typeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 518;
			this.specifierQualifierList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typedefName(): TypedefNameContext {
		let localctx: TypedefNameContext = new TypedefNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, CParser.RULE_typedefName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 520;
			this.match(CParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let localctx: InitializerContext = new InitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, CParser.RULE_initializer);
		let _la: number;
		try {
			this.state = 530;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
			case 45:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 64:
			case 69:
			case 70:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 522;
				this.assignmentExpression();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 523;
				this.match(CParser.LeftBrace);
				this.state = 524;
				this.initializerList();
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 525;
					this.match(CParser.Comma);
					}
				}

				this.state = 528;
				this.match(CParser.RightBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let localctx: InitializerListContext = new InitializerListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, CParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===47 || _la===89) {
				{
				this.state = 532;
				this.designation();
				}
			}

			this.state = 535;
			this.initializer();
			this.state = 543;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 536;
					this.match(CParser.Comma);
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===47 || _la===89) {
						{
						this.state = 537;
						this.designation();
						}
					}

					this.state = 540;
					this.initializer();
					}
					}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designation(): DesignationContext {
		let localctx: DesignationContext = new DesignationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, CParser.RULE_designation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 546;
			this.designatorList();
			this.state = 547;
			this.match(CParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designatorList(): DesignatorListContext {
		let localctx: DesignatorListContext = new DesignatorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, CParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 549;
				this.designator();
				}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===47 || _la===89);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let localctx: DesignatorContext = new DesignatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, CParser.RULE_designator);
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 554;
				this.match(CParser.LeftBracket);
				this.state = 555;
				this.constantExpression();
				this.state = 556;
				this.match(CParser.RightBracket);
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 558;
				this.match(CParser.Dot);
				this.state = 559;
				this.match(CParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, CParser.RULE_statement);
		try {
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 562;
				this.labeledStatement();
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 563;
				this.compoundStatement();
				}
				break;
			case 25:
			case 45:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 64:
			case 69:
			case 70:
			case 73:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 564;
				this.expressionStatement();
				}
				break;
			case 16:
			case 28:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 565;
				this.selectionStatement();
				}
				break;
			case 8:
			case 14:
			case 34:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 566;
				this.iterationStatement();
				}
				break;
			case 2:
			case 6:
			case 22:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 567;
				this.jumpStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let localctx: LabeledStatementContext = new LabeledStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, CParser.RULE_labeledStatement);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 570;
				this.match(CParser.Case);
				this.state = 571;
				this.constantExpression();
				this.state = 572;
				this.match(CParser.Colon);
				this.state = 573;
				this.statement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 575;
				this.match(CParser.Default);
				this.state = 576;
				this.match(CParser.Colon);
				this.state = 577;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let localctx: CompoundStatementContext = new CompoundStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 580;
			this.match(CParser.LeftBrace);
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4224543708) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1040326661) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 2013266529) !== 0)) {
				{
				this.state = 581;
				this.blockItemList();
				}
			}

			this.state = 584;
			this.match(CParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let localctx: BlockItemListContext = new BlockItemListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 586;
				this.blockItem();
				}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4224543708) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1040326661) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 2013266529) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let localctx: BlockItemContext = new BlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, CParser.RULE_blockItem);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 591;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 592;
				this.declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, CParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 50982913) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 15) !== 0)) {
				{
				this.state = 595;
				this.expression();
				}
			}

			this.state = 598;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let localctx: SelectionStatementContext = new SelectionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, CParser.RULE_selectionStatement);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 600;
				this.match(CParser.If);
				this.state = 601;
				this.match(CParser.LeftParen);
				this.state = 602;
				this.expression();
				this.state = 603;
				this.match(CParser.RightParen);
				this.state = 604;
				this.statement();
				this.state = 607;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 605;
					this.match(CParser.Else);
					this.state = 606;
					this.statement();
					}
					break;
				}
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 609;
				this.match(CParser.Switch);
				this.state = 610;
				this.match(CParser.LeftParen);
				this.state = 611;
				this.expression();
				this.state = 612;
				this.match(CParser.RightParen);
				this.state = 613;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let localctx: IterationStatementContext = new IterationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, CParser.RULE_iterationStatement);
		try {
			this.state = 637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 617;
				this.match(CParser.While);
				this.state = 618;
				this.match(CParser.LeftParen);
				this.state = 619;
				this.expression();
				this.state = 620;
				this.match(CParser.RightParen);
				this.state = 621;
				this.statement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 623;
				this.match(CParser.Do);
				this.state = 624;
				this.statement();
				this.state = 625;
				this.match(CParser.While);
				this.state = 626;
				this.match(CParser.LeftParen);
				this.state = 627;
				this.expression();
				this.state = 628;
				this.match(CParser.RightParen);
				this.state = 629;
				this.match(CParser.Semi);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 631;
				this.match(CParser.For);
				this.state = 632;
				this.match(CParser.LeftParen);
				this.state = 633;
				this.forCondition();
				this.state = 634;
				this.match(CParser.RightParen);
				this.state = 635;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let localctx: ForConditionContext = new ForConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, CParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 639;
				this.forDeclaration();
				}
				break;
			case 2:
				{
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 50982913) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 15) !== 0)) {
					{
					this.state = 640;
					this.expression();
					}
				}

				}
				break;
			}
			this.state = 645;
			this.match(CParser.Semi);
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 50982913) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 15) !== 0)) {
				{
				this.state = 646;
				this.forExpression();
				}
			}

			this.state = 649;
			this.match(CParser.Semi);
			this.state = 651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 50982913) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 15) !== 0)) {
				{
				this.state = 650;
				this.forExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let localctx: ForDeclarationContext = new ForDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, CParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 653;
			this.declarationSpecifiers();
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45 || _la===61 || _la===91) {
				{
				this.state = 654;
				this.initDeclaratorList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let localctx: ForExpressionContext = new ForExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, CParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 657;
			this.assignmentExpression();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 658;
				this.match(CParser.Comma);
				this.state = 659;
				this.assignmentExpression();
				}
				}
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let localctx: JumpStatementContext = new JumpStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, CParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 670;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 6:
				{
				this.state = 665;
				_la = this._input.LA(1);
				if(!(_la===2 || _la===6)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 22:
				{
				this.state = 666;
				this.match(CParser.Return);
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 50982913) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 15) !== 0)) {
					{
					this.state = 667;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 672;
			this.match(CParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, CParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 674;
				this.externalDeclaration();
				}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3918277136) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 536879105) !== 0) || _la===73 || _la===91);
			this.state = 679;
			this.match(CParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externalDeclaration(): ExternalDeclarationContext {
		let localctx: ExternalDeclarationContext = new ExternalDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, CParser.RULE_externalDeclaration);
		try {
			this.state = 684;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 681;
				this.functionDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 682;
				this.declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 683;
				this.match(CParser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, CParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 687;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 686;
				this.declarationSpecifiers();
				}
				break;
			}
			this.state = 689;
			this.declarator();
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 513327777) !== 0) || _la===91) {
				{
				this.state = 690;
				this.declarationList();
				}
			}

			this.state = 693;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let localctx: DeclarationListContext = new DeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, CParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 695;
				this.declaration();
				}
				}
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 513327777) !== 0) || _la===91);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 41:
			return this.directDeclarator_sempred(localctx as DirectDeclaratorContext, predIndex);
		}
		return true;
	}
	private directDeclarator_sempred(localctx: DirectDeclaratorContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: number[] = [4,1,104,701,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,1,0,1,0,1,0,4,0,144,8,0,11,0,12,0,145,1,0,1,0,1,0,1,
	0,3,0,152,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,161,8,1,1,1,1,1,1,1,1,1,5,
	1,167,8,1,10,1,12,1,170,9,1,1,2,1,2,1,2,5,2,175,8,2,10,2,12,2,178,9,2,1,
	3,5,3,181,8,3,10,3,12,3,184,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
	195,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,206,8,5,1,6,1,6,1,6,5,6,
	211,8,6,10,6,12,6,214,9,6,1,7,1,7,1,7,5,7,219,8,7,10,7,12,7,222,9,7,1,8,
	1,8,1,8,5,8,227,8,8,10,8,12,8,230,9,8,1,9,1,9,1,9,5,9,235,8,9,10,9,12,9,
	238,9,9,1,10,1,10,1,10,5,10,243,8,10,10,10,12,10,246,9,10,1,11,1,11,1,11,
	5,11,251,8,11,10,11,12,11,254,9,11,1,12,1,12,1,12,5,12,259,8,12,10,12,12,
	12,262,9,12,1,13,1,13,1,13,5,13,267,8,13,10,13,12,13,270,9,13,1,14,1,14,
	1,14,5,14,275,8,14,10,14,12,14,278,9,14,1,15,1,15,1,15,5,15,283,8,15,10,
	15,12,15,286,9,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,294,8,16,1,17,1,17,
	1,17,1,17,1,17,1,17,3,17,302,8,17,1,18,1,18,1,19,1,19,1,19,5,19,309,8,19,
	10,19,12,19,312,9,19,1,20,1,20,1,21,1,21,3,21,318,8,21,1,21,1,21,1,22,4,
	22,323,8,22,11,22,12,22,324,1,23,4,23,328,8,23,11,23,12,23,329,1,24,1,24,
	3,24,334,8,24,1,25,1,25,1,25,5,25,339,8,25,10,25,12,25,342,9,25,1,26,1,
	26,1,26,3,26,347,8,26,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
	1,28,1,28,1,28,1,28,3,28,363,8,28,1,29,1,29,3,29,367,8,29,1,29,1,29,1,29,
	1,29,1,29,1,29,1,29,3,29,376,8,29,1,30,1,30,1,31,4,31,381,8,31,11,31,12,
	31,382,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,392,8,32,1,33,1,33,3,33,
	396,8,33,1,34,1,34,1,34,5,34,401,8,34,10,34,12,34,404,9,34,1,35,1,35,3,
	35,408,8,35,1,35,1,35,3,35,412,8,35,1,36,1,36,3,36,416,8,36,1,36,1,36,1,
	36,3,36,421,8,36,1,36,1,36,1,36,1,36,3,36,427,8,36,1,37,1,37,1,37,5,37,
	432,8,37,10,37,12,37,435,9,37,1,38,1,38,1,38,3,38,440,8,38,1,39,1,39,1,
	40,3,40,445,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,3,41,455,8,41,
	1,41,1,41,1,41,3,41,460,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
	41,3,41,471,8,41,1,41,5,41,474,8,41,10,41,12,41,477,9,41,1,42,1,42,1,42,
	1,42,1,42,5,42,484,8,42,10,42,12,42,487,9,42,1,43,4,43,490,8,43,11,43,12,
	43,491,1,44,1,44,1,44,5,44,497,8,44,10,44,12,44,500,9,44,1,45,1,45,1,45,
	1,45,1,45,3,45,507,8,45,3,45,509,8,45,1,46,1,46,1,46,5,46,514,8,46,10,46,
	12,46,517,9,46,1,47,1,47,1,48,1,48,1,49,1,49,1,49,1,49,3,49,527,8,49,1,
	49,1,49,3,49,531,8,49,1,50,3,50,534,8,50,1,50,1,50,1,50,3,50,539,8,50,1,
	50,5,50,542,8,50,10,50,12,50,545,9,50,1,51,1,51,1,51,1,52,4,52,551,8,52,
	11,52,12,52,552,1,53,1,53,1,53,1,53,1,53,1,53,3,53,561,8,53,1,54,1,54,1,
	54,1,54,1,54,1,54,3,54,569,8,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
	3,55,579,8,55,1,56,1,56,3,56,583,8,56,1,56,1,56,1,57,4,57,588,8,57,11,57,
	12,57,589,1,58,1,58,3,58,594,8,58,1,59,3,59,597,8,59,1,59,1,59,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,3,60,608,8,60,1,60,1,60,1,60,1,60,1,60,1,60,3,
	60,616,8,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,638,8,61,1,62,1,62,3,62,642,
	8,62,3,62,644,8,62,1,62,1,62,3,62,648,8,62,1,62,1,62,3,62,652,8,62,1,63,
	1,63,3,63,656,8,63,1,64,1,64,1,64,5,64,661,8,64,10,64,12,64,664,9,64,1,
	65,1,65,1,65,3,65,669,8,65,3,65,671,8,65,1,65,1,65,1,66,4,66,676,8,66,11,
	66,12,66,677,1,66,1,66,1,67,1,67,1,67,3,67,685,8,67,1,68,3,68,688,8,68,
	1,68,1,68,3,68,692,8,68,1,68,1,68,1,69,4,69,697,8,69,11,69,12,69,698,1,
	69,0,1,82,70,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
	42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
	90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
	128,130,132,134,136,138,0,13,1,0,88,89,2,0,58,58,60,60,3,0,25,25,58,58,
	60,60,5,0,57,57,59,59,61,61,64,64,69,70,1,0,61,63,2,0,57,57,59,59,1,0,55,
	56,1,0,51,54,1,0,86,87,1,0,75,85,2,0,27,27,30,30,1,0,45,46,2,0,2,2,6,6,
	738,0,151,1,0,0,0,2,153,1,0,0,0,4,171,1,0,0,0,6,182,1,0,0,0,8,196,1,0,0,
	0,10,205,1,0,0,0,12,207,1,0,0,0,14,215,1,0,0,0,16,223,1,0,0,0,18,231,1,
	0,0,0,20,239,1,0,0,0,22,247,1,0,0,0,24,255,1,0,0,0,26,263,1,0,0,0,28,271,
	1,0,0,0,30,279,1,0,0,0,32,287,1,0,0,0,34,301,1,0,0,0,36,303,1,0,0,0,38,
	305,1,0,0,0,40,313,1,0,0,0,42,315,1,0,0,0,44,322,1,0,0,0,46,327,1,0,0,0,
	48,333,1,0,0,0,50,335,1,0,0,0,52,343,1,0,0,0,54,348,1,0,0,0,56,362,1,0,
	0,0,58,375,1,0,0,0,60,377,1,0,0,0,62,380,1,0,0,0,64,391,1,0,0,0,66,393,
	1,0,0,0,68,397,1,0,0,0,70,411,1,0,0,0,72,426,1,0,0,0,74,428,1,0,0,0,76,
	436,1,0,0,0,78,441,1,0,0,0,80,444,1,0,0,0,82,454,1,0,0,0,84,485,1,0,0,0,
	86,489,1,0,0,0,88,493,1,0,0,0,90,508,1,0,0,0,92,510,1,0,0,0,94,518,1,0,
	0,0,96,520,1,0,0,0,98,530,1,0,0,0,100,533,1,0,0,0,102,546,1,0,0,0,104,550,
	1,0,0,0,106,560,1,0,0,0,108,568,1,0,0,0,110,578,1,0,0,0,112,580,1,0,0,0,
	114,587,1,0,0,0,116,593,1,0,0,0,118,596,1,0,0,0,120,615,1,0,0,0,122,637,
	1,0,0,0,124,643,1,0,0,0,126,653,1,0,0,0,128,657,1,0,0,0,130,670,1,0,0,0,
	132,675,1,0,0,0,134,684,1,0,0,0,136,687,1,0,0,0,138,696,1,0,0,0,140,152,
	5,91,0,0,141,152,5,92,0,0,142,144,5,94,0,0,143,142,1,0,0,0,144,145,1,0,
	0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,152,1,0,0,0,147,148,5,45,0,0,148,
	149,3,38,19,0,149,150,5,46,0,0,150,152,1,0,0,0,151,140,1,0,0,0,151,141,
	1,0,0,0,151,143,1,0,0,0,151,147,1,0,0,0,152,1,1,0,0,0,153,168,3,0,0,0,154,
	155,5,47,0,0,155,156,3,38,19,0,156,157,5,48,0,0,157,167,1,0,0,0,158,160,
	5,45,0,0,159,161,3,4,2,0,160,159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,
	0,162,167,5,46,0,0,163,164,7,0,0,0,164,167,5,91,0,0,165,167,7,1,0,0,166,
	154,1,0,0,0,166,158,1,0,0,0,166,163,1,0,0,0,166,165,1,0,0,0,167,170,1,0,
	0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,3,1,0,0,0,170,168,1,0,0,0,171,176,
	3,34,17,0,172,173,5,74,0,0,173,175,3,34,17,0,174,172,1,0,0,0,175,178,1,
	0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,5,1,0,0,0,178,176,1,0,0,0,179,
	181,7,2,0,0,180,179,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,
	0,0,183,194,1,0,0,0,184,182,1,0,0,0,185,195,3,2,1,0,186,187,3,8,4,0,187,
	188,3,10,5,0,188,195,1,0,0,0,189,190,5,25,0,0,190,191,5,45,0,0,191,192,
	3,94,47,0,192,193,5,46,0,0,193,195,1,0,0,0,194,185,1,0,0,0,194,186,1,0,
	0,0,194,189,1,0,0,0,195,7,1,0,0,0,196,197,7,3,0,0,197,9,1,0,0,0,198,199,
	5,45,0,0,199,200,3,94,47,0,200,201,5,46,0,0,201,202,3,10,5,0,202,206,1,
	0,0,0,203,206,3,6,3,0,204,206,5,93,0,0,205,198,1,0,0,0,205,203,1,0,0,0,
	205,204,1,0,0,0,206,11,1,0,0,0,207,212,3,10,5,0,208,209,7,4,0,0,209,211,
	3,10,5,0,210,208,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,
	0,213,13,1,0,0,0,214,212,1,0,0,0,215,220,3,12,6,0,216,217,7,5,0,0,217,219,
	3,12,6,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,
	0,221,15,1,0,0,0,222,220,1,0,0,0,223,228,3,14,7,0,224,225,7,6,0,0,225,227,
	3,14,7,0,226,224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,
	0,229,17,1,0,0,0,230,228,1,0,0,0,231,236,3,16,8,0,232,233,7,7,0,0,233,235,
	3,16,8,0,234,232,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,
	0,237,19,1,0,0,0,238,236,1,0,0,0,239,244,3,18,9,0,240,241,7,8,0,0,241,243,
	3,18,9,0,242,240,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,
	0,245,21,1,0,0,0,246,244,1,0,0,0,247,252,3,20,10,0,248,249,5,64,0,0,249,
	251,3,20,10,0,250,248,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,
	0,0,0,253,23,1,0,0,0,254,252,1,0,0,0,255,260,3,22,11,0,256,257,5,68,0,0,
	257,259,3,22,11,0,258,256,1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,261,
	1,0,0,0,261,25,1,0,0,0,262,260,1,0,0,0,263,268,3,24,12,0,264,265,5,65,0,
	0,265,267,3,24,12,0,266,264,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,
	269,1,0,0,0,269,27,1,0,0,0,270,268,1,0,0,0,271,276,3,26,13,0,272,273,5,
	66,0,0,273,275,3,26,13,0,274,272,1,0,0,0,275,278,1,0,0,0,276,274,1,0,0,
	0,276,277,1,0,0,0,277,29,1,0,0,0,278,276,1,0,0,0,279,284,3,28,14,0,280,
	281,5,67,0,0,281,283,3,28,14,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,
	1,0,0,0,284,285,1,0,0,0,285,31,1,0,0,0,286,284,1,0,0,0,287,293,3,30,15,
	0,288,289,5,71,0,0,289,290,3,38,19,0,290,291,5,72,0,0,291,292,3,32,16,0,
	292,294,1,0,0,0,293,288,1,0,0,0,293,294,1,0,0,0,294,33,1,0,0,0,295,302,
	3,32,16,0,296,297,3,6,3,0,297,298,3,36,18,0,298,299,3,34,17,0,299,302,1,
	0,0,0,300,302,5,93,0,0,301,295,1,0,0,0,301,296,1,0,0,0,301,300,1,0,0,0,
	302,35,1,0,0,0,303,304,7,9,0,0,304,37,1,0,0,0,305,310,3,34,17,0,306,307,
	5,74,0,0,307,309,3,34,17,0,308,306,1,0,0,0,309,312,1,0,0,0,310,308,1,0,
	0,0,310,311,1,0,0,0,311,39,1,0,0,0,312,310,1,0,0,0,313,314,3,32,16,0,314,
	41,1,0,0,0,315,317,3,44,22,0,316,318,3,50,25,0,317,316,1,0,0,0,317,318,
	1,0,0,0,318,319,1,0,0,0,319,320,5,73,0,0,320,43,1,0,0,0,321,323,3,48,24,
	0,322,321,1,0,0,0,323,324,1,0,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,45,
	1,0,0,0,326,328,3,48,24,0,327,326,1,0,0,0,328,329,1,0,0,0,329,327,1,0,0,
	0,329,330,1,0,0,0,330,47,1,0,0,0,331,334,3,54,27,0,332,334,3,56,28,0,333,
	331,1,0,0,0,333,332,1,0,0,0,334,49,1,0,0,0,335,340,3,52,26,0,336,337,5,
	74,0,0,337,339,3,52,26,0,338,336,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,
	0,340,341,1,0,0,0,341,51,1,0,0,0,342,340,1,0,0,0,343,346,3,80,40,0,344,
	345,5,75,0,0,345,347,3,98,49,0,346,344,1,0,0,0,346,347,1,0,0,0,347,53,1,
	0,0,0,348,349,5,29,0,0,349,55,1,0,0,0,350,363,5,32,0,0,351,363,5,4,0,0,
	352,363,5,23,0,0,353,363,5,18,0,0,354,363,5,19,0,0,355,363,5,13,0,0,356,
	363,5,9,0,0,357,363,5,24,0,0,358,363,5,31,0,0,359,363,3,58,29,0,360,363,
	3,72,36,0,361,363,3,96,48,0,362,350,1,0,0,0,362,351,1,0,0,0,362,352,1,0,
	0,0,362,353,1,0,0,0,362,354,1,0,0,0,362,355,1,0,0,0,362,356,1,0,0,0,362,
	357,1,0,0,0,362,358,1,0,0,0,362,359,1,0,0,0,362,360,1,0,0,0,362,361,1,0,
	0,0,363,57,1,0,0,0,364,366,3,60,30,0,365,367,5,91,0,0,366,365,1,0,0,0,366,
	367,1,0,0,0,367,368,1,0,0,0,368,369,5,49,0,0,369,370,3,62,31,0,370,371,
	5,50,0,0,371,376,1,0,0,0,372,373,3,60,30,0,373,374,5,91,0,0,374,376,1,0,
	0,0,375,364,1,0,0,0,375,372,1,0,0,0,376,59,1,0,0,0,377,378,7,10,0,0,378,
	61,1,0,0,0,379,381,3,64,32,0,380,379,1,0,0,0,381,382,1,0,0,0,382,380,1,
	0,0,0,382,383,1,0,0,0,383,63,1,0,0,0,384,385,3,66,33,0,385,386,3,68,34,
	0,386,387,5,73,0,0,387,392,1,0,0,0,388,389,3,66,33,0,389,390,5,73,0,0,390,
	392,1,0,0,0,391,384,1,0,0,0,391,388,1,0,0,0,392,65,1,0,0,0,393,395,3,56,
	28,0,394,396,3,66,33,0,395,394,1,0,0,0,395,396,1,0,0,0,396,67,1,0,0,0,397,
	402,3,70,35,0,398,399,5,74,0,0,399,401,3,70,35,0,400,398,1,0,0,0,401,404,
	1,0,0,0,402,400,1,0,0,0,402,403,1,0,0,0,403,69,1,0,0,0,404,402,1,0,0,0,
	405,412,3,80,40,0,406,408,3,80,40,0,407,406,1,0,0,0,407,408,1,0,0,0,408,
	409,1,0,0,0,409,410,5,72,0,0,410,412,3,40,20,0,411,405,1,0,0,0,411,407,
	1,0,0,0,412,71,1,0,0,0,413,415,5,11,0,0,414,416,5,91,0,0,415,414,1,0,0,
	0,415,416,1,0,0,0,416,417,1,0,0,0,417,418,5,49,0,0,418,420,3,74,37,0,419,
	421,5,74,0,0,420,419,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,423,5,
	50,0,0,423,427,1,0,0,0,424,425,5,11,0,0,425,427,5,91,0,0,426,413,1,0,0,
	0,426,424,1,0,0,0,427,73,1,0,0,0,428,433,3,76,38,0,429,430,5,74,0,0,430,
	432,3,76,38,0,431,429,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,
	0,0,0,434,75,1,0,0,0,435,433,1,0,0,0,436,439,3,78,39,0,437,438,5,75,0,0,
	438,440,3,40,20,0,439,437,1,0,0,0,439,440,1,0,0,0,440,77,1,0,0,0,441,442,
	5,91,0,0,442,79,1,0,0,0,443,445,3,86,43,0,444,443,1,0,0,0,444,445,1,0,0,
	0,445,446,1,0,0,0,446,447,3,82,41,0,447,81,1,0,0,0,448,449,6,41,-1,0,449,
	455,5,91,0,0,450,451,5,45,0,0,451,452,3,80,40,0,452,453,5,46,0,0,453,455,
	1,0,0,0,454,448,1,0,0,0,454,450,1,0,0,0,455,475,1,0,0,0,456,457,10,3,0,
	0,457,459,5,47,0,0,458,460,5,93,0,0,459,458,1,0,0,0,459,460,1,0,0,0,460,
	461,1,0,0,0,461,474,5,48,0,0,462,463,10,2,0,0,463,464,5,45,0,0,464,465,
	3,88,44,0,465,466,5,46,0,0,466,474,1,0,0,0,467,468,10,1,0,0,468,470,5,45,
	0,0,469,471,3,92,46,0,470,469,1,0,0,0,470,471,1,0,0,0,471,472,1,0,0,0,472,
	474,5,46,0,0,473,456,1,0,0,0,473,462,1,0,0,0,473,467,1,0,0,0,474,477,1,
	0,0,0,475,473,1,0,0,0,475,476,1,0,0,0,476,83,1,0,0,0,477,475,1,0,0,0,478,
	484,8,11,0,0,479,480,5,45,0,0,480,481,3,84,42,0,481,482,5,46,0,0,482,484,
	1,0,0,0,483,478,1,0,0,0,483,479,1,0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,
	485,486,1,0,0,0,486,85,1,0,0,0,487,485,1,0,0,0,488,490,5,61,0,0,489,488,
	1,0,0,0,490,491,1,0,0,0,491,489,1,0,0,0,491,492,1,0,0,0,492,87,1,0,0,0,
	493,498,3,90,45,0,494,495,5,74,0,0,495,497,3,90,45,0,496,494,1,0,0,0,497,
	500,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,89,1,0,0,0,500,498,1,0,
	0,0,501,502,3,44,22,0,502,503,3,80,40,0,503,509,1,0,0,0,504,506,3,44,22,
	0,505,507,3,86,43,0,506,505,1,0,0,0,506,507,1,0,0,0,507,509,1,0,0,0,508,
	501,1,0,0,0,508,504,1,0,0,0,509,91,1,0,0,0,510,515,5,91,0,0,511,512,5,74,
	0,0,512,514,5,91,0,0,513,511,1,0,0,0,514,517,1,0,0,0,515,513,1,0,0,0,515,
	516,1,0,0,0,516,93,1,0,0,0,517,515,1,0,0,0,518,519,3,66,33,0,519,95,1,0,
	0,0,520,521,5,91,0,0,521,97,1,0,0,0,522,531,3,34,17,0,523,524,5,49,0,0,
	524,526,3,100,50,0,525,527,5,74,0,0,526,525,1,0,0,0,526,527,1,0,0,0,527,
	528,1,0,0,0,528,529,5,50,0,0,529,531,1,0,0,0,530,522,1,0,0,0,530,523,1,
	0,0,0,531,99,1,0,0,0,532,534,3,102,51,0,533,532,1,0,0,0,533,534,1,0,0,0,
	534,535,1,0,0,0,535,543,3,98,49,0,536,538,5,74,0,0,537,539,3,102,51,0,538,
	537,1,0,0,0,538,539,1,0,0,0,539,540,1,0,0,0,540,542,3,98,49,0,541,536,1,
	0,0,0,542,545,1,0,0,0,543,541,1,0,0,0,543,544,1,0,0,0,544,101,1,0,0,0,545,
	543,1,0,0,0,546,547,3,104,52,0,547,548,5,75,0,0,548,103,1,0,0,0,549,551,
	3,106,53,0,550,549,1,0,0,0,551,552,1,0,0,0,552,550,1,0,0,0,552,553,1,0,
	0,0,553,105,1,0,0,0,554,555,5,47,0,0,555,556,3,40,20,0,556,557,5,48,0,0,
	557,561,1,0,0,0,558,559,5,89,0,0,559,561,5,91,0,0,560,554,1,0,0,0,560,558,
	1,0,0,0,561,107,1,0,0,0,562,569,3,110,55,0,563,569,3,112,56,0,564,569,3,
	118,59,0,565,569,3,120,60,0,566,569,3,122,61,0,567,569,3,130,65,0,568,562,
	1,0,0,0,568,563,1,0,0,0,568,564,1,0,0,0,568,565,1,0,0,0,568,566,1,0,0,0,
	568,567,1,0,0,0,569,109,1,0,0,0,570,571,5,3,0,0,571,572,3,40,20,0,572,573,
	5,72,0,0,573,574,3,108,54,0,574,579,1,0,0,0,575,576,5,7,0,0,576,577,5,72,
	0,0,577,579,3,108,54,0,578,570,1,0,0,0,578,575,1,0,0,0,579,111,1,0,0,0,
	580,582,5,49,0,0,581,583,3,114,57,0,582,581,1,0,0,0,582,583,1,0,0,0,583,
	584,1,0,0,0,584,585,5,50,0,0,585,113,1,0,0,0,586,588,3,116,58,0,587,586,
	1,0,0,0,588,589,1,0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,590,115,1,0,0,0,
	591,594,3,108,54,0,592,594,3,42,21,0,593,591,1,0,0,0,593,592,1,0,0,0,594,
	117,1,0,0,0,595,597,3,38,19,0,596,595,1,0,0,0,596,597,1,0,0,0,597,598,1,
	0,0,0,598,599,5,73,0,0,599,119,1,0,0,0,600,601,5,16,0,0,601,602,5,45,0,
	0,602,603,3,38,19,0,603,604,5,46,0,0,604,607,3,108,54,0,605,606,5,10,0,
	0,606,608,3,108,54,0,607,605,1,0,0,0,607,608,1,0,0,0,608,616,1,0,0,0,609,
	610,5,28,0,0,610,611,5,45,0,0,611,612,3,38,19,0,612,613,5,46,0,0,613,614,
	3,108,54,0,614,616,1,0,0,0,615,600,1,0,0,0,615,609,1,0,0,0,616,121,1,0,
	0,0,617,618,5,34,0,0,618,619,5,45,0,0,619,620,3,38,19,0,620,621,5,46,0,
	0,621,622,3,108,54,0,622,638,1,0,0,0,623,624,5,8,0,0,624,625,3,108,54,0,
	625,626,5,34,0,0,626,627,5,45,0,0,627,628,3,38,19,0,628,629,5,46,0,0,629,
	630,5,73,0,0,630,638,1,0,0,0,631,632,5,14,0,0,632,633,5,45,0,0,633,634,
	3,124,62,0,634,635,5,46,0,0,635,636,3,108,54,0,636,638,1,0,0,0,637,617,
	1,0,0,0,637,623,1,0,0,0,637,631,1,0,0,0,638,123,1,0,0,0,639,644,3,126,63,
	0,640,642,3,38,19,0,641,640,1,0,0,0,641,642,1,0,0,0,642,644,1,0,0,0,643,
	639,1,0,0,0,643,641,1,0,0,0,644,645,1,0,0,0,645,647,5,73,0,0,646,648,3,
	128,64,0,647,646,1,0,0,0,647,648,1,0,0,0,648,649,1,0,0,0,649,651,5,73,0,
	0,650,652,3,128,64,0,651,650,1,0,0,0,651,652,1,0,0,0,652,125,1,0,0,0,653,
	655,3,44,22,0,654,656,3,50,25,0,655,654,1,0,0,0,655,656,1,0,0,0,656,127,
	1,0,0,0,657,662,3,34,17,0,658,659,5,74,0,0,659,661,3,34,17,0,660,658,1,
	0,0,0,661,664,1,0,0,0,662,660,1,0,0,0,662,663,1,0,0,0,663,129,1,0,0,0,664,
	662,1,0,0,0,665,671,7,12,0,0,666,668,5,22,0,0,667,669,3,38,19,0,668,667,
	1,0,0,0,668,669,1,0,0,0,669,671,1,0,0,0,670,665,1,0,0,0,670,666,1,0,0,0,
	671,672,1,0,0,0,672,673,5,73,0,0,673,131,1,0,0,0,674,676,3,134,67,0,675,
	674,1,0,0,0,676,677,1,0,0,0,677,675,1,0,0,0,677,678,1,0,0,0,678,679,1,0,
	0,0,679,680,5,0,0,1,680,133,1,0,0,0,681,685,3,136,68,0,682,685,3,42,21,
	0,683,685,5,73,0,0,684,681,1,0,0,0,684,682,1,0,0,0,684,683,1,0,0,0,685,
	135,1,0,0,0,686,688,3,44,22,0,687,686,1,0,0,0,687,688,1,0,0,0,688,689,1,
	0,0,0,689,691,3,80,40,0,690,692,3,138,69,0,691,690,1,0,0,0,691,692,1,0,
	0,0,692,693,1,0,0,0,693,694,3,112,56,0,694,137,1,0,0,0,695,697,3,42,21,
	0,696,695,1,0,0,0,697,698,1,0,0,0,698,696,1,0,0,0,698,699,1,0,0,0,699,139,
	1,0,0,0,84,145,151,160,166,168,176,182,194,205,212,220,228,236,244,252,
	260,268,276,284,293,301,310,317,324,329,333,340,346,362,366,375,382,391,
	395,402,407,411,415,420,426,433,439,444,454,459,470,473,475,483,485,491,
	498,506,508,515,526,530,533,538,543,552,560,568,578,582,589,593,596,607,
	615,637,641,643,647,651,655,662,668,670,677,684,687,691,698];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(CParser._serializedATN);
		}

		return CParser.__ATN;
	}


	static DecisionsToDFA = CParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
	public Constant(): TerminalNode {
		return this.getToken(CParser.Constant, 0);
	}
	public StringLiteral_list(): TerminalNode[] {
	    	return this.getTokens(CParser.StringLiteral);
	}
	public StringLiteral(i: number): TerminalNode {
		return this.getToken(CParser.StringLiteral, i);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_primaryExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public LeftBracket_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LeftBracket);
	}
	public LeftBracket(i: number): TerminalNode {
		return this.getToken(CParser.LeftBracket, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RightBracket_list(): TerminalNode[] {
	    	return this.getTokens(CParser.RightBracket);
	}
	public RightBracket(i: number): TerminalNode {
		return this.getToken(CParser.RightBracket, i);
	}
	public LeftParen_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LeftParen);
	}
	public LeftParen(i: number): TerminalNode {
		return this.getToken(CParser.LeftParen, i);
	}
	public RightParen_list(): TerminalNode[] {
	    	return this.getTokens(CParser.RightParen);
	}
	public RightParen(i: number): TerminalNode {
		return this.getToken(CParser.RightParen, i);
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(CParser.Identifier, i);
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(CParser.Dot, i);
	}
	public Arrow_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Arrow);
	}
	public Arrow(i: number): TerminalNode {
		return this.getToken(CParser.Arrow, i);
	}
	public PlusPlus_list(): TerminalNode[] {
	    	return this.getTokens(CParser.PlusPlus);
	}
	public PlusPlus(i: number): TerminalNode {
		return this.getToken(CParser.PlusPlus, i);
	}
	public MinusMinus_list(): TerminalNode[] {
	    	return this.getTokens(CParser.MinusMinus);
	}
	public MinusMinus(i: number): TerminalNode {
		return this.getToken(CParser.MinusMinus, i);
	}
	public argumentExpressionList_list(): ArgumentExpressionListContext[] {
		return this.getTypedRuleContexts(ArgumentExpressionListContext) as ArgumentExpressionListContext[];
	}
	public argumentExpressionList(i: number): ArgumentExpressionListContext {
		return this.getTypedRuleContext(ArgumentExpressionListContext, i) as ArgumentExpressionListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_postfixExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression_list(): AssignmentExpressionContext[] {
		return this.getTypedRuleContexts(AssignmentExpressionContext) as AssignmentExpressionContext[];
	}
	public assignmentExpression(i: number): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, i) as AssignmentExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_argumentExpressionList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterArgumentExpressionList) {
	 		listener.enterArgumentExpressionList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitArgumentExpressionList) {
	 		listener.exitArgumentExpressionList(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public unaryOperator(): UnaryOperatorContext {
		return this.getTypedRuleContext(UnaryOperatorContext, 0) as UnaryOperatorContext;
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public PlusPlus_list(): TerminalNode[] {
	    	return this.getTokens(CParser.PlusPlus);
	}
	public PlusPlus(i: number): TerminalNode {
		return this.getToken(CParser.PlusPlus, i);
	}
	public MinusMinus_list(): TerminalNode[] {
	    	return this.getTokens(CParser.MinusMinus);
	}
	public MinusMinus(i: number): TerminalNode {
		return this.getToken(CParser.MinusMinus, i);
	}
	public Sizeof_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Sizeof);
	}
	public Sizeof(i: number): TerminalNode {
		return this.getToken(CParser.Sizeof, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_unaryExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public And(): TerminalNode {
		return this.getToken(CParser.And, 0);
	}
	public Star(): TerminalNode {
		return this.getToken(CParser.Star, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(CParser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(CParser.Minus, 0);
	}
	public Tilde(): TerminalNode {
		return this.getToken(CParser.Tilde, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(CParser.Not, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_unaryOperator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public DigitSequence(): TerminalNode {
		return this.getToken(CParser.DigitSequence, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_castExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public castExpression_list(): CastExpressionContext[] {
		return this.getTypedRuleContexts(CastExpressionContext) as CastExpressionContext[];
	}
	public castExpression(i: number): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, i) as CastExpressionContext;
	}
	public Star_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Star);
	}
	public Star(i: number): TerminalNode {
		return this.getToken(CParser.Star, i);
	}
	public Div_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Div);
	}
	public Div(i: number): TerminalNode {
		return this.getToken(CParser.Div, i);
	}
	public Mod_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Mod);
	}
	public Mod(i: number): TerminalNode {
		return this.getToken(CParser.Mod, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression_list(): MultiplicativeExpressionContext[] {
		return this.getTypedRuleContexts(MultiplicativeExpressionContext) as MultiplicativeExpressionContext[];
	}
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, i) as MultiplicativeExpressionContext;
	}
	public Plus_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Plus);
	}
	public Plus(i: number): TerminalNode {
		return this.getToken(CParser.Plus, i);
	}
	public Minus_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Minus);
	}
	public Minus(i: number): TerminalNode {
		return this.getToken(CParser.Minus, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_additiveExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression_list(): AdditiveExpressionContext[] {
		return this.getTypedRuleContexts(AdditiveExpressionContext) as AdditiveExpressionContext[];
	}
	public additiveExpression(i: number): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, i) as AdditiveExpressionContext;
	}
	public LeftShift_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LeftShift);
	}
	public LeftShift(i: number): TerminalNode {
		return this.getToken(CParser.LeftShift, i);
	}
	public RightShift_list(): TerminalNode[] {
	    	return this.getTokens(CParser.RightShift);
	}
	public RightShift(i: number): TerminalNode {
		return this.getToken(CParser.RightShift, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_shiftExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterShiftExpression) {
	 		listener.enterShiftExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitShiftExpression) {
	 		listener.exitShiftExpression(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shiftExpression_list(): ShiftExpressionContext[] {
		return this.getTypedRuleContexts(ShiftExpressionContext) as ShiftExpressionContext[];
	}
	public shiftExpression(i: number): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, i) as ShiftExpressionContext;
	}
	public Less_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Less);
	}
	public Less(i: number): TerminalNode {
		return this.getToken(CParser.Less, i);
	}
	public Greater_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Greater);
	}
	public Greater(i: number): TerminalNode {
		return this.getToken(CParser.Greater, i);
	}
	public LessEqual_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LessEqual);
	}
	public LessEqual(i: number): TerminalNode {
		return this.getToken(CParser.LessEqual, i);
	}
	public GreaterEqual_list(): TerminalNode[] {
	    	return this.getTokens(CParser.GreaterEqual);
	}
	public GreaterEqual(i: number): TerminalNode {
		return this.getToken(CParser.GreaterEqual, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_relationalExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression_list(): RelationalExpressionContext[] {
		return this.getTypedRuleContexts(RelationalExpressionContext) as RelationalExpressionContext[];
	}
	public relationalExpression(i: number): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, i) as RelationalExpressionContext;
	}
	public Equal_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Equal);
	}
	public Equal(i: number): TerminalNode {
		return this.getToken(CParser.Equal, i);
	}
	public NotEqual_list(): TerminalNode[] {
	    	return this.getTokens(CParser.NotEqual);
	}
	public NotEqual(i: number): TerminalNode {
		return this.getToken(CParser.NotEqual, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_equalityExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression_list(): EqualityExpressionContext[] {
		return this.getTypedRuleContexts(EqualityExpressionContext) as EqualityExpressionContext[];
	}
	public equalityExpression(i: number): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, i) as EqualityExpressionContext;
	}
	public And_list(): TerminalNode[] {
	    	return this.getTokens(CParser.And);
	}
	public And(i: number): TerminalNode {
		return this.getToken(CParser.And, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_andExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andExpression_list(): AndExpressionContext[] {
		return this.getTypedRuleContexts(AndExpressionContext) as AndExpressionContext[];
	}
	public andExpression(i: number): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, i) as AndExpressionContext;
	}
	public Caret_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Caret);
	}
	public Caret(i: number): TerminalNode {
		return this.getToken(CParser.Caret, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_exclusiveOrExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExclusiveOrExpression) {
	 		listener.enterExclusiveOrExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExclusiveOrExpression) {
	 		listener.exitExclusiveOrExpression(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exclusiveOrExpression_list(): ExclusiveOrExpressionContext[] {
		return this.getTypedRuleContexts(ExclusiveOrExpressionContext) as ExclusiveOrExpressionContext[];
	}
	public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext {
		return this.getTypedRuleContext(ExclusiveOrExpressionContext, i) as ExclusiveOrExpressionContext;
	}
	public Or_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Or);
	}
	public Or(i: number): TerminalNode {
		return this.getToken(CParser.Or, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_inclusiveOrExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInclusiveOrExpression) {
	 		listener.enterInclusiveOrExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInclusiveOrExpression) {
	 		listener.exitInclusiveOrExpression(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inclusiveOrExpression_list(): InclusiveOrExpressionContext[] {
		return this.getTypedRuleContexts(InclusiveOrExpressionContext) as InclusiveOrExpressionContext[];
	}
	public inclusiveOrExpression(i: number): InclusiveOrExpressionContext {
		return this.getTypedRuleContext(InclusiveOrExpressionContext, i) as InclusiveOrExpressionContext;
	}
	public AndAnd_list(): TerminalNode[] {
	    	return this.getTokens(CParser.AndAnd);
	}
	public AndAnd(i: number): TerminalNode {
		return this.getToken(CParser.AndAnd, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_logicalAndExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalAndExpression_list(): LogicalAndExpressionContext[] {
		return this.getTypedRuleContexts(LogicalAndExpressionContext) as LogicalAndExpressionContext[];
	}
	public logicalAndExpression(i: number): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, i) as LogicalAndExpressionContext;
	}
	public OrOr_list(): TerminalNode[] {
	    	return this.getTokens(CParser.OrOr);
	}
	public OrOr(i: number): TerminalNode {
		return this.getToken(CParser.OrOr, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_logicalOrExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
	public Question(): TerminalNode {
		return this.getToken(CParser.Question, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(CParser.Colon, 0);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_conditionalExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterConditionalExpression) {
	 		listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitConditionalExpression) {
	 		listener.exitConditionalExpression(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public DigitSequence(): TerminalNode {
		return this.getToken(CParser.DigitSequence, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_assignmentExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
	public StarAssign(): TerminalNode {
		return this.getToken(CParser.StarAssign, 0);
	}
	public DivAssign(): TerminalNode {
		return this.getToken(CParser.DivAssign, 0);
	}
	public ModAssign(): TerminalNode {
		return this.getToken(CParser.ModAssign, 0);
	}
	public PlusAssign(): TerminalNode {
		return this.getToken(CParser.PlusAssign, 0);
	}
	public MinusAssign(): TerminalNode {
		return this.getToken(CParser.MinusAssign, 0);
	}
	public LeftShiftAssign(): TerminalNode {
		return this.getToken(CParser.LeftShiftAssign, 0);
	}
	public RightShiftAssign(): TerminalNode {
		return this.getToken(CParser.RightShiftAssign, 0);
	}
	public AndAssign(): TerminalNode {
		return this.getToken(CParser.AndAssign, 0);
	}
	public XorAssign(): TerminalNode {
		return this.getToken(CParser.XorAssign, 0);
	}
	public OrAssign(): TerminalNode {
		return this.getToken(CParser.OrAssign, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_assignmentOperator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression_list(): AssignmentExpressionContext[] {
		return this.getTypedRuleContexts(AssignmentExpressionContext) as AssignmentExpressionContext[];
	}
	public assignmentExpression(i: number): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, i) as AssignmentExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_expression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_constantExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getTypedRuleContext(DeclarationSpecifiersContext, 0) as DeclarationSpecifiersContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
	public initDeclaratorList(): InitDeclaratorListContext {
		return this.getTypedRuleContext(InitDeclaratorListContext, 0) as InitDeclaratorListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
}


export class DeclarationSpecifiersContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarationSpecifier_list(): DeclarationSpecifierContext[] {
		return this.getTypedRuleContexts(DeclarationSpecifierContext) as DeclarationSpecifierContext[];
	}
	public declarationSpecifier(i: number): DeclarationSpecifierContext {
		return this.getTypedRuleContext(DeclarationSpecifierContext, i) as DeclarationSpecifierContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declarationSpecifiers;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclarationSpecifiers) {
	 		listener.enterDeclarationSpecifiers(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclarationSpecifiers) {
	 		listener.exitDeclarationSpecifiers(this);
		}
	}
}


export class DeclarationSpecifiers2Context extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarationSpecifier_list(): DeclarationSpecifierContext[] {
		return this.getTypedRuleContexts(DeclarationSpecifierContext) as DeclarationSpecifierContext[];
	}
	public declarationSpecifier(i: number): DeclarationSpecifierContext {
		return this.getTypedRuleContext(DeclarationSpecifierContext, i) as DeclarationSpecifierContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declarationSpecifiers2;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclarationSpecifiers2) {
	 		listener.enterDeclarationSpecifiers2(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclarationSpecifiers2) {
	 		listener.exitDeclarationSpecifiers2(this);
		}
	}
}


export class DeclarationSpecifierContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public storageClassSpecifier(): StorageClassSpecifierContext {
		return this.getTypedRuleContext(StorageClassSpecifierContext, 0) as StorageClassSpecifierContext;
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getTypedRuleContext(TypeSpecifierContext, 0) as TypeSpecifierContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declarationSpecifier;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclarationSpecifier) {
	 		listener.enterDeclarationSpecifier(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclarationSpecifier) {
	 		listener.exitDeclarationSpecifier(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public initDeclarator_list(): InitDeclaratorContext[] {
		return this.getTypedRuleContexts(InitDeclaratorContext) as InitDeclaratorContext[];
	}
	public initDeclarator(i: number): InitDeclaratorContext {
		return this.getTypedRuleContext(InitDeclaratorContext, i) as InitDeclaratorContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initDeclaratorList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitDeclaratorList) {
	 		listener.enterInitDeclaratorList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitDeclaratorList) {
	 		listener.exitInitDeclaratorList(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarator(): DeclaratorContext {
		return this.getTypedRuleContext(DeclaratorContext, 0) as DeclaratorContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
	public initializer(): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, 0) as InitializerContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initDeclarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitDeclarator) {
	 		listener.enterInitDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitDeclarator) {
	 		listener.exitInitDeclarator(this);
		}
	}
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Typedef(): TerminalNode {
		return this.getToken(CParser.Typedef, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_storageClassSpecifier;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStorageClassSpecifier) {
	 		listener.enterStorageClassSpecifier(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStorageClassSpecifier) {
	 		listener.exitStorageClassSpecifier(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Void(): TerminalNode {
		return this.getToken(CParser.Void, 0);
	}
	public Char(): TerminalNode {
		return this.getToken(CParser.Char, 0);
	}
	public Short(): TerminalNode {
		return this.getToken(CParser.Short, 0);
	}
	public Int(): TerminalNode {
		return this.getToken(CParser.Int, 0);
	}
	public Long(): TerminalNode {
		return this.getToken(CParser.Long, 0);
	}
	public Float(): TerminalNode {
		return this.getToken(CParser.Float, 0);
	}
	public Double(): TerminalNode {
		return this.getToken(CParser.Double, 0);
	}
	public Signed(): TerminalNode {
		return this.getToken(CParser.Signed, 0);
	}
	public Unsigned(): TerminalNode {
		return this.getToken(CParser.Unsigned, 0);
	}
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
		return this.getTypedRuleContext(StructOrUnionSpecifierContext, 0) as StructOrUnionSpecifierContext;
	}
	public enumSpecifier(): EnumSpecifierContext {
		return this.getTypedRuleContext(EnumSpecifierContext, 0) as EnumSpecifierContext;
	}
	public typedefName(): TypedefNameContext {
		return this.getTypedRuleContext(TypedefNameContext, 0) as TypedefNameContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_typeSpecifier;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTypeSpecifier) {
	 		listener.enterTypeSpecifier(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTypeSpecifier) {
	 		listener.exitTypeSpecifier(this);
		}
	}
}


export class StructOrUnionSpecifierContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structOrUnion(): StructOrUnionContext {
		return this.getTypedRuleContext(StructOrUnionContext, 0) as StructOrUnionContext;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(CParser.LeftBrace, 0);
	}
	public structDeclarationList(): StructDeclarationListContext {
		return this.getTypedRuleContext(StructDeclarationListContext, 0) as StructDeclarationListContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(CParser.RightBrace, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_structOrUnionSpecifier;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStructOrUnionSpecifier) {
	 		listener.enterStructOrUnionSpecifier(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStructOrUnionSpecifier) {
	 		listener.exitStructOrUnionSpecifier(this);
		}
	}
}


export class StructOrUnionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Struct(): TerminalNode {
		return this.getToken(CParser.Struct, 0);
	}
	public Union(): TerminalNode {
		return this.getToken(CParser.Union, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_structOrUnion;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStructOrUnion) {
	 		listener.enterStructOrUnion(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStructOrUnion) {
	 		listener.exitStructOrUnion(this);
		}
	}
}


export class StructDeclarationListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structDeclaration_list(): StructDeclarationContext[] {
		return this.getTypedRuleContexts(StructDeclarationContext) as StructDeclarationContext[];
	}
	public structDeclaration(i: number): StructDeclarationContext {
		return this.getTypedRuleContext(StructDeclarationContext, i) as StructDeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_structDeclarationList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStructDeclarationList) {
	 		listener.enterStructDeclarationList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStructDeclarationList) {
	 		listener.exitStructDeclarationList(this);
		}
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getTypedRuleContext(SpecifierQualifierListContext, 0) as SpecifierQualifierListContext;
	}
	public structDeclaratorList(): StructDeclaratorListContext {
		return this.getTypedRuleContext(StructDeclaratorListContext, 0) as StructDeclaratorListContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_structDeclaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStructDeclaration) {
	 		listener.enterStructDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStructDeclaration) {
	 		listener.exitStructDeclaration(this);
		}
	}
}


export class SpecifierQualifierListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getTypedRuleContext(TypeSpecifierContext, 0) as TypeSpecifierContext;
	}
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getTypedRuleContext(SpecifierQualifierListContext, 0) as SpecifierQualifierListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_specifierQualifierList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterSpecifierQualifierList) {
	 		listener.enterSpecifierQualifierList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitSpecifierQualifierList) {
	 		listener.exitSpecifierQualifierList(this);
		}
	}
}


export class StructDeclaratorListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structDeclarator_list(): StructDeclaratorContext[] {
		return this.getTypedRuleContexts(StructDeclaratorContext) as StructDeclaratorContext[];
	}
	public structDeclarator(i: number): StructDeclaratorContext {
		return this.getTypedRuleContext(StructDeclaratorContext, i) as StructDeclaratorContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_structDeclaratorList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStructDeclaratorList) {
	 		listener.enterStructDeclaratorList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStructDeclaratorList) {
	 		listener.exitStructDeclaratorList(this);
		}
	}
}


export class StructDeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarator(): DeclaratorContext {
		return this.getTypedRuleContext(DeclaratorContext, 0) as DeclaratorContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(CParser.Colon, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_structDeclarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStructDeclarator) {
	 		listener.enterStructDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStructDeclarator) {
	 		listener.exitStructDeclarator(this);
		}
	}
}


export class EnumSpecifierContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Enum(): TerminalNode {
		return this.getToken(CParser.Enum, 0);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(CParser.LeftBrace, 0);
	}
	public enumeratorList(): EnumeratorListContext {
		return this.getTypedRuleContext(EnumeratorListContext, 0) as EnumeratorListContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(CParser.RightBrace, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(CParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_enumSpecifier;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterEnumSpecifier) {
	 		listener.enterEnumSpecifier(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitEnumSpecifier) {
	 		listener.exitEnumSpecifier(this);
		}
	}
}


export class EnumeratorListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumerator_list(): EnumeratorContext[] {
		return this.getTypedRuleContexts(EnumeratorContext) as EnumeratorContext[];
	}
	public enumerator(i: number): EnumeratorContext {
		return this.getTypedRuleContext(EnumeratorContext, i) as EnumeratorContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_enumeratorList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterEnumeratorList) {
	 		listener.enterEnumeratorList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitEnumeratorList) {
	 		listener.exitEnumeratorList(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumerationConstant(): EnumerationConstantContext {
		return this.getTypedRuleContext(EnumerationConstantContext, 0) as EnumerationConstantContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_enumerator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterEnumerator) {
	 		listener.enterEnumerator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitEnumerator) {
	 		listener.exitEnumerator(this);
		}
	}
}


export class EnumerationConstantContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_enumerationConstant;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterEnumerationConstant) {
	 		listener.enterEnumerationConstant(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitEnumerationConstant) {
	 		listener.exitEnumerationConstant(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public directDeclarator(): DirectDeclaratorContext {
		return this.getTypedRuleContext(DirectDeclaratorContext, 0) as DirectDeclaratorContext;
	}
	public pointer(): PointerContext {
		return this.getTypedRuleContext(PointerContext, 0) as PointerContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclarator) {
	 		listener.enterDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclarator) {
	 		listener.exitDeclarator(this);
		}
	}
}


export class DirectDeclaratorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public declarator(): DeclaratorContext {
		return this.getTypedRuleContext(DeclaratorContext, 0) as DeclaratorContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public directDeclarator(): DirectDeclaratorContext {
		return this.getTypedRuleContext(DirectDeclaratorContext, 0) as DirectDeclaratorContext;
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(CParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(CParser.RightBracket, 0);
	}
	public DigitSequence(): TerminalNode {
		return this.getToken(CParser.DigitSequence, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_directDeclarator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDirectDeclarator) {
	 		listener.enterDirectDeclarator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDirectDeclarator) {
	 		listener.exitDirectDeclarator(this);
		}
	}
}


export class NestedParenthesesBlockContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftParen_list(): TerminalNode[] {
	    	return this.getTokens(CParser.LeftParen);
	}
	public LeftParen(i: number): TerminalNode {
		return this.getToken(CParser.LeftParen, i);
	}
	public nestedParenthesesBlock_list(): NestedParenthesesBlockContext[] {
		return this.getTypedRuleContexts(NestedParenthesesBlockContext) as NestedParenthesesBlockContext[];
	}
	public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext {
		return this.getTypedRuleContext(NestedParenthesesBlockContext, i) as NestedParenthesesBlockContext;
	}
	public RightParen_list(): TerminalNode[] {
	    	return this.getTokens(CParser.RightParen);
	}
	public RightParen(i: number): TerminalNode {
		return this.getToken(CParser.RightParen, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_nestedParenthesesBlock;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterNestedParenthesesBlock) {
	 		listener.enterNestedParenthesesBlock(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitNestedParenthesesBlock) {
	 		listener.exitNestedParenthesesBlock(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Star_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Star);
	}
	public Star(i: number): TerminalNode {
		return this.getToken(CParser.Star, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_pointer;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterPointer) {
	 		listener.enterPointer(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitPointer) {
	 		listener.exitPointer(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterDeclaration_list(): ParameterDeclarationContext[] {
		return this.getTypedRuleContexts(ParameterDeclarationContext) as ParameterDeclarationContext[];
	}
	public parameterDeclaration(i: number): ParameterDeclarationContext {
		return this.getTypedRuleContext(ParameterDeclarationContext, i) as ParameterDeclarationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_parameterList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getTypedRuleContext(DeclarationSpecifiersContext, 0) as DeclarationSpecifiersContext;
	}
	public declarator(): DeclaratorContext {
		return this.getTypedRuleContext(DeclaratorContext, 0) as DeclaratorContext;
	}
	public pointer(): PointerContext {
		return this.getTypedRuleContext(PointerContext, 0) as PointerContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_parameterDeclaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterParameterDeclaration) {
	 		listener.enterParameterDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitParameterDeclaration) {
	 		listener.exitParameterDeclaration(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(CParser.Identifier, i);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_identifierList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getTypedRuleContext(SpecifierQualifierListContext, 0) as SpecifierQualifierListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_typeName;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_typedefName;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterTypedefName) {
	 		listener.enterTypedefName(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitTypedefName) {
	 		listener.exitTypedefName(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(CParser.LeftBrace, 0);
	}
	public initializerList(): InitializerListContext {
		return this.getTypedRuleContext(InitializerListContext, 0) as InitializerListContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(CParser.RightBrace, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(CParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initializer;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitializer) {
	 		listener.enterInitializer(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitializer) {
	 		listener.exitInitializer(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public initializer_list(): InitializerContext[] {
		return this.getTypedRuleContexts(InitializerContext) as InitializerContext[];
	}
	public initializer(i: number): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, i) as InitializerContext;
	}
	public designation_list(): DesignationContext[] {
		return this.getTypedRuleContexts(DesignationContext) as DesignationContext[];
	}
	public designation(i: number): DesignationContext {
		return this.getTypedRuleContext(DesignationContext, i) as DesignationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_initializerList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterInitializerList) {
	 		listener.enterInitializerList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitInitializerList) {
	 		listener.exitInitializerList(this);
		}
	}
}


export class DesignationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public designatorList(): DesignatorListContext {
		return this.getTypedRuleContext(DesignatorListContext, 0) as DesignatorListContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(CParser.Assign, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_designation;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDesignation) {
	 		listener.enterDesignation(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDesignation) {
	 		listener.exitDesignation(this);
		}
	}
}


export class DesignatorListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public designator_list(): DesignatorContext[] {
		return this.getTypedRuleContexts(DesignatorContext) as DesignatorContext[];
	}
	public designator(i: number): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, i) as DesignatorContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_designatorList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDesignatorList) {
	 		listener.enterDesignatorList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDesignatorList) {
	 		listener.exitDesignatorList(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(CParser.LeftBracket, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public RightBracket(): TerminalNode {
		return this.getToken(CParser.RightBracket, 0);
	}
	public Dot(): TerminalNode {
		return this.getToken(CParser.Dot, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(CParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_designator;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDesignator) {
	 		listener.enterDesignator(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDesignator) {
	 		listener.exitDesignator(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labeledStatement(): LabeledStatementContext {
		return this.getTypedRuleContext(LabeledStatementContext, 0) as LabeledStatementContext;
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getTypedRuleContext(CompoundStatementContext, 0) as CompoundStatementContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public selectionStatement(): SelectionStatementContext {
		return this.getTypedRuleContext(SelectionStatementContext, 0) as SelectionStatementContext;
	}
	public iterationStatement(): IterationStatementContext {
		return this.getTypedRuleContext(IterationStatementContext, 0) as IterationStatementContext;
	}
	public jumpStatement(): JumpStatementContext {
		return this.getTypedRuleContext(JumpStatementContext, 0) as JumpStatementContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_statement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Case(): TerminalNode {
		return this.getToken(CParser.Case, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(CParser.Colon, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public Default(): TerminalNode {
		return this.getToken(CParser.Default, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_labeledStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterLabeledStatement) {
	 		listener.enterLabeledStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitLabeledStatement) {
	 		listener.exitLabeledStatement(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(CParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(CParser.RightBrace, 0);
	}
	public blockItemList(): BlockItemListContext {
		return this.getTypedRuleContext(BlockItemListContext, 0) as BlockItemListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_compoundStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterCompoundStatement) {
	 		listener.enterCompoundStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitCompoundStatement) {
	 		listener.exitCompoundStatement(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockItem_list(): BlockItemContext[] {
		return this.getTypedRuleContexts(BlockItemContext) as BlockItemContext[];
	}
	public blockItem(i: number): BlockItemContext {
		return this.getTypedRuleContext(BlockItemContext, i) as BlockItemContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_blockItemList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterBlockItemList) {
	 		listener.enterBlockItemList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitBlockItemList) {
	 		listener.exitBlockItemList(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_blockItem;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterBlockItem) {
	 		listener.enterBlockItem(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitBlockItem) {
	 		listener.exitBlockItem(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_expressionStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(CParser.If, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public Else(): TerminalNode {
		return this.getToken(CParser.Else, 0);
	}
	public Switch(): TerminalNode {
		return this.getToken(CParser.Switch, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_selectionStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterSelectionStatement) {
	 		listener.enterSelectionStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitSelectionStatement) {
	 		listener.exitSelectionStatement(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public While(): TerminalNode {
		return this.getToken(CParser.While, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(CParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(CParser.RightParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public Do(): TerminalNode {
		return this.getToken(CParser.Do, 0);
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
	public For(): TerminalNode {
		return this.getToken(CParser.For, 0);
	}
	public forCondition(): ForConditionContext {
		return this.getTypedRuleContext(ForConditionContext, 0) as ForConditionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_iterationStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterIterationStatement) {
	 		listener.enterIterationStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitIterationStatement) {
	 		listener.exitIterationStatement(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Semi_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Semi);
	}
	public Semi(i: number): TerminalNode {
		return this.getToken(CParser.Semi, i);
	}
	public forDeclaration(): ForDeclarationContext {
		return this.getTypedRuleContext(ForDeclarationContext, 0) as ForDeclarationContext;
	}
	public forExpression_list(): ForExpressionContext[] {
		return this.getTypedRuleContexts(ForExpressionContext) as ForExpressionContext[];
	}
	public forExpression(i: number): ForExpressionContext {
		return this.getTypedRuleContext(ForExpressionContext, i) as ForExpressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_forCondition;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterForCondition) {
	 		listener.enterForCondition(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitForCondition) {
	 		listener.exitForCondition(this);
		}
	}
}


export class ForDeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getTypedRuleContext(DeclarationSpecifiersContext, 0) as DeclarationSpecifiersContext;
	}
	public initDeclaratorList(): InitDeclaratorListContext {
		return this.getTypedRuleContext(InitDeclaratorListContext, 0) as InitDeclaratorListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_forDeclaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterForDeclaration) {
	 		listener.enterForDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitForDeclaration) {
	 		listener.exitForDeclaration(this);
		}
	}
}


export class ForExpressionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression_list(): AssignmentExpressionContext[] {
		return this.getTypedRuleContexts(AssignmentExpressionContext) as AssignmentExpressionContext[];
	}
	public assignmentExpression(i: number): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, i) as AssignmentExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(CParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(CParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_forExpression;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterForExpression) {
	 		listener.enterForExpression(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitForExpression) {
	 		listener.exitForExpression(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
	public Return(): TerminalNode {
		return this.getToken(CParser.Return, 0);
	}
	public Continue(): TerminalNode {
		return this.getToken(CParser.Continue, 0);
	}
	public Break(): TerminalNode {
		return this.getToken(CParser.Break, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_jumpStatement;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterJumpStatement) {
	 		listener.enterJumpStatement(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitJumpStatement) {
	 		listener.exitJumpStatement(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(CParser.EOF, 0);
	}
	public externalDeclaration_list(): ExternalDeclarationContext[] {
		return this.getTypedRuleContexts(ExternalDeclarationContext) as ExternalDeclarationContext[];
	}
	public externalDeclaration(i: number): ExternalDeclarationContext {
		return this.getTypedRuleContext(ExternalDeclarationContext, i) as ExternalDeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_compilationUnit;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterCompilationUnit) {
	 		listener.enterCompilationUnit(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitCompilationUnit) {
	 		listener.exitCompilationUnit(this);
		}
	}
}


export class ExternalDeclarationContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionDefinition(): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, 0) as FunctionDefinitionContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(CParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return CParser.RULE_externalDeclaration;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterExternalDeclaration) {
	 		listener.enterExternalDeclaration(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitExternalDeclaration) {
	 		listener.exitExternalDeclaration(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declarator(): DeclaratorContext {
		return this.getTypedRuleContext(DeclaratorContext, 0) as DeclaratorContext;
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getTypedRuleContext(CompoundStatementContext, 0) as CompoundStatementContext;
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getTypedRuleContext(DeclarationSpecifiersContext, 0) as DeclarationSpecifiersContext;
	}
	public declarationList(): DeclarationListContext {
		return this.getTypedRuleContext(DeclarationListContext, 0) as DeclarationListContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_functionDefinition;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterFunctionDefinition) {
	 		listener.enterFunctionDefinition(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitFunctionDefinition) {
	 		listener.exitFunctionDefinition(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	constructor(parser?: CParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return CParser.RULE_declarationList;
	}
	public enterRule(listener: CListener): void {
	    if(listener.enterDeclarationList) {
	 		listener.enterDeclarationList(this);
		}
	}
	public exitRule(listener: CListener): void {
	    if(listener.exitDeclarationList) {
	 		listener.exitDeclarationList(this);
		}
	}
}
