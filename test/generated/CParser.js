"use strict";
// Generated from test/C.g4 by ANTLR 4.9.0-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TypedefNameContext = exports.TypeNameContext = exports.IdentifierListContext = exports.ParameterDeclarationContext = exports.ParameterListContext = exports.PointerContext = exports.NestedParenthesesBlockContext = exports.DirectDeclaratorContext = exports.DeclaratorContext = exports.EnumerationConstantContext = exports.EnumeratorContext = exports.EnumeratorListContext = exports.EnumSpecifierContext = exports.StructDeclaratorContext = exports.StructDeclaratorListContext = exports.SpecifierQualifierListContext = exports.StructDeclarationContext = exports.StructDeclarationListContext = exports.StructOrUnionContext = exports.StructOrUnionSpecifierContext = exports.TypeSpecifierContext = exports.StorageClassSpecifierContext = exports.InitDeclaratorContext = exports.InitDeclaratorListContext = exports.DeclarationSpecifierContext = exports.DeclarationSpecifiers2Context = exports.DeclarationSpecifiersContext = exports.DeclarationContext = exports.ConstantExpressionContext = exports.ExpressionContext = exports.AssignmentOperatorContext = exports.AssignmentExpressionContext = exports.ConditionalExpressionContext = exports.LogicalOrExpressionContext = exports.LogicalAndExpressionContext = exports.InclusiveOrExpressionContext = exports.ExclusiveOrExpressionContext = exports.AndExpressionContext = exports.EqualityExpressionContext = exports.RelationalExpressionContext = exports.ShiftExpressionContext = exports.AdditiveExpressionContext = exports.MultiplicativeExpressionContext = exports.CastExpressionContext = exports.UnaryOperatorContext = exports.UnaryExpressionContext = exports.ArgumentExpressionListContext = exports.PostfixExpressionContext = exports.PrimaryExpressionContext = exports.CParser = void 0;
exports.DeclarationListContext = exports.FunctionDefinitionContext = exports.ExternalDeclarationContext = exports.CompilationUnitContext = exports.JumpStatementContext = exports.ForExpressionContext = exports.ForDeclarationContext = exports.ForConditionContext = exports.IterationStatementContext = exports.SelectionStatementContext = exports.ExpressionStatementContext = exports.BlockItemContext = exports.BlockItemListContext = exports.CompoundStatementContext = exports.LabeledStatementContext = exports.StatementContext = exports.DesignatorContext = exports.DesignatorListContext = exports.DesignationContext = exports.InitializerListContext = exports.InitializerContext = void 0;
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var CParser = /** @class */ (function (_super) {
    __extends(CParser, _super);
    function CParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(CParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(CParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CParser.VOCABULARY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "C.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CParser.prototype, "ruleNames", {
        // @Override
        get: function () { return CParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CParser.prototype, "serializedATN", {
        // @Override
        get: function () { return CParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    CParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    };
    // @RuleVersion(0)
    CParser.prototype.primaryExpression = function () {
        var _localctx = new PrimaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CParser.RULE_primaryExpression);
        var _la;
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.postfixExpression = function () {
        var _localctx = new PostfixExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CParser.RULE_postfixExpression);
        var _la;
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
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.argumentExpressionList = function () {
        var _localctx = new ArgumentExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CParser.RULE_argumentExpressionList);
        var _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.unaryExpression = function () {
        var _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CParser.RULE_unaryExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 179;
                                _la = this._input.LA(1);
                                if (!(_la === CParser.Sizeof || _la === CParser.PlusPlus || _la === CParser.MinusMinus)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.unaryOperator = function () {
        var _localctx = new UnaryOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CParser.RULE_unaryOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                _la = this._input.LA(1);
                if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (CParser.Plus - 57)) | (1 << (CParser.Minus - 57)) | (1 << (CParser.Star - 57)) | (1 << (CParser.And - 57)) | (1 << (CParser.Not - 57)) | (1 << (CParser.Tilde - 57)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.castExpression = function () {
        var _localctx = new CastExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CParser.RULE_castExpression);
        try {
            this.state = 205;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
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
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 204;
                        this.match(CParser.DigitSequence);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.multiplicativeExpression = function () {
        var _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CParser.RULE_multiplicativeExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.castExpression();
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CParser.Star - 61)) | (1 << (CParser.Div - 61)) | (1 << (CParser.Mod - 61)))) !== 0)) {
                    {
                        {
                            this.state = 208;
                            _la = this._input.LA(1);
                            if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CParser.Star - 61)) | (1 << (CParser.Div - 61)) | (1 << (CParser.Mod - 61)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.additiveExpression = function () {
        var _localctx = new AdditiveExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CParser.RULE_additiveExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 215;
                this.multiplicativeExpression();
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Plus || _la === CParser.Minus) {
                    {
                        {
                            this.state = 216;
                            _la = this._input.LA(1);
                            if (!(_la === CParser.Plus || _la === CParser.Minus)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.shiftExpression = function () {
        var _localctx = new ShiftExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CParser.RULE_shiftExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.additiveExpression();
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.LeftShift || _la === CParser.RightShift) {
                    {
                        {
                            this.state = 224;
                            _la = this._input.LA(1);
                            if (!(_la === CParser.LeftShift || _la === CParser.RightShift)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.relationalExpression = function () {
        var _localctx = new RelationalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CParser.RULE_relationalExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.shiftExpression();
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CParser.Less - 51)) | (1 << (CParser.LessEqual - 51)) | (1 << (CParser.Greater - 51)) | (1 << (CParser.GreaterEqual - 51)))) !== 0)) {
                    {
                        {
                            this.state = 232;
                            _la = this._input.LA(1);
                            if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CParser.Less - 51)) | (1 << (CParser.LessEqual - 51)) | (1 << (CParser.Greater - 51)) | (1 << (CParser.GreaterEqual - 51)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.equalityExpression = function () {
        var _localctx = new EqualityExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CParser.RULE_equalityExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 239;
                this.relationalExpression();
                this.state = 244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Equal || _la === CParser.NotEqual) {
                    {
                        {
                            this.state = 240;
                            _la = this._input.LA(1);
                            if (!(_la === CParser.Equal || _la === CParser.NotEqual)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.andExpression = function () {
        var _localctx = new AndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CParser.RULE_andExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 247;
                this.equalityExpression();
                this.state = 252;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.And) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.exclusiveOrExpression = function () {
        var _localctx = new ExclusiveOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CParser.RULE_exclusiveOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.andExpression();
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Caret) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.inclusiveOrExpression = function () {
        var _localctx = new InclusiveOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CParser.RULE_inclusiveOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.exclusiveOrExpression();
                this.state = 268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Or) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.logicalAndExpression = function () {
        var _localctx = new LogicalAndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CParser.RULE_logicalAndExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this.inclusiveOrExpression();
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.AndAnd) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.logicalOrExpression = function () {
        var _localctx = new LogicalOrExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CParser.RULE_logicalOrExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this.logicalAndExpression();
                this.state = 284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.OrOr) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.conditionalExpression = function () {
        var _localctx = new ConditionalExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CParser.RULE_conditionalExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.logicalOrExpression();
                this.state = 293;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.Question) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.assignmentExpression = function () {
        var _localctx = new AssignmentExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CParser.RULE_assignmentExpression);
        try {
            this.state = 301;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 295;
                        this.conditionalExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
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
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 300;
                        this.match(CParser.DigitSequence);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.assignmentOperator = function () {
        var _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CParser.RULE_assignmentOperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 303;
                _la = this._input.LA(1);
                if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CParser.Assign - 75)) | (1 << (CParser.StarAssign - 75)) | (1 << (CParser.DivAssign - 75)) | (1 << (CParser.ModAssign - 75)) | (1 << (CParser.PlusAssign - 75)) | (1 << (CParser.MinusAssign - 75)) | (1 << (CParser.LeftShiftAssign - 75)) | (1 << (CParser.RightShiftAssign - 75)) | (1 << (CParser.AndAssign - 75)) | (1 << (CParser.XorAssign - 75)) | (1 << (CParser.OrAssign - 75)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.assignmentExpression();
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Comma) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.constantExpression = function () {
        var _localctx = new ConstantExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, CParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.conditionalExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, CParser.RULE_declaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 315;
                this.declarationSpecifiers();
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.LeftParen || _la === CParser.Star || _la === CParser.Identifier) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declarationSpecifiers = function () {
        var _localctx = new DeclarationSpecifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CParser.RULE_declarationSpecifiers);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
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
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 324;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declarationSpecifiers2 = function () {
        var _localctx = new DeclarationSpecifiers2Context(this._ctx, this.state);
        this.enterRule(_localctx, 46, CParser.RULE_declarationSpecifiers2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Typedef - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declarationSpecifier = function () {
        var _localctx = new DeclarationSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CParser.RULE_declarationSpecifier);
        try {
            this.state = 333;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.Typedef:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 331;
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
                        this.state = 332;
                        this.typeSpecifier();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.initDeclaratorList = function () {
        var _localctx = new InitDeclaratorListContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CParser.RULE_initDeclaratorList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this.initDeclarator();
                this.state = 340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Comma) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.initDeclarator = function () {
        var _localctx = new InitDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, CParser.RULE_initDeclarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this.declarator();
                this.state = 346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.Assign) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.storageClassSpecifier = function () {
        var _localctx = new StorageClassSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CParser.RULE_storageClassSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.match(CParser.Typedef);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.typeSpecifier = function () {
        var _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CParser.RULE_typeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CParser.Void:
                        {
                            this.state = 350;
                            this.match(CParser.Void);
                        }
                        break;
                    case CParser.Char:
                        {
                            this.state = 351;
                            this.match(CParser.Char);
                        }
                        break;
                    case CParser.Short:
                        {
                            this.state = 352;
                            this.match(CParser.Short);
                        }
                        break;
                    case CParser.Int:
                        {
                            this.state = 353;
                            this.match(CParser.Int);
                        }
                        break;
                    case CParser.Long:
                        {
                            this.state = 354;
                            this.match(CParser.Long);
                        }
                        break;
                    case CParser.Float:
                        {
                            this.state = 355;
                            this.match(CParser.Float);
                        }
                        break;
                    case CParser.Double:
                        {
                            this.state = 356;
                            this.match(CParser.Double);
                        }
                        break;
                    case CParser.Signed:
                        {
                            this.state = 357;
                            this.match(CParser.Signed);
                        }
                        break;
                    case CParser.Unsigned:
                        {
                            this.state = 358;
                            this.match(CParser.Unsigned);
                        }
                        break;
                    case CParser.Struct:
                    case CParser.Union:
                        {
                            this.state = 359;
                            this.structOrUnionSpecifier();
                        }
                        break;
                    case CParser.Enum:
                        {
                            this.state = 360;
                            this.enumSpecifier();
                        }
                        break;
                    case CParser.Identifier:
                        {
                            this.state = 361;
                            this.typedefName();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structOrUnionSpecifier = function () {
        var _localctx = new StructOrUnionSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CParser.RULE_structOrUnionSpecifier);
        var _la;
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 364;
                        this.structOrUnion();
                        this.state = 366;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Identifier) {
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
                    this.enterOuterAlt(_localctx, 2);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structOrUnion = function () {
        var _localctx = new StructOrUnionContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CParser.RULE_structOrUnion);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                _la = this._input.LA(1);
                if (!(_la === CParser.Struct || _la === CParser.Union)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structDeclarationList = function () {
        var _localctx = new StructDeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, CParser.RULE_structDeclarationList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structDeclaration = function () {
        var _localctx = new StructDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, CParser.RULE_structDeclaration);
        try {
            this.state = 391;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
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
                    this.enterOuterAlt(_localctx, 2);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.specifierQualifierList = function () {
        var _localctx = new SpecifierQualifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, CParser.RULE_specifierQualifierList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 393;
                this.typeSpecifier();
                this.state = 395;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structDeclaratorList = function () {
        var _localctx = new StructDeclaratorListContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, CParser.RULE_structDeclaratorList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.structDeclarator();
                this.state = 402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Comma) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.structDeclarator = function () {
        var _localctx = new StructDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, CParser.RULE_structDeclarator);
        var _la;
        try {
            this.state = 411;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 405;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 407;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.LeftParen || _la === CParser.Star || _la === CParser.Identifier) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.enumSpecifier = function () {
        var _localctx = new EnumSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, CParser.RULE_enumSpecifier);
        var _la;
        try {
            this.state = 426;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 413;
                        this.match(CParser.Enum);
                        this.state = 415;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Identifier) {
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
                        if (_la === CParser.Comma) {
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
                    this.enterOuterAlt(_localctx, 2);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.enumeratorList = function () {
        var _localctx = new EnumeratorListContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, CParser.RULE_enumeratorList);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.enumerator();
                this.state = 433;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.enumerator = function () {
        var _localctx = new EnumeratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, CParser.RULE_enumerator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.enumerationConstant();
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.Assign) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.enumerationConstant = function () {
        var _localctx = new EnumerationConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, CParser.RULE_enumerationConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 441;
                this.match(CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declarator = function () {
        var _localctx = new DeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, CParser.RULE_declarator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.Star) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.directDeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new DirectDeclaratorContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 82;
        this.enterRecursionRule(_localctx, 82, CParser.RULE_directDeclarator, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CParser.Identifier:
                        {
                            this.state = 449;
                            this.match(CParser.Identifier);
                        }
                        break;
                    case CParser.LeftParen:
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 475;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 473;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 456;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 457;
                                        this.match(CParser.LeftBracket);
                                        this.state = 459;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.DigitSequence) {
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
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
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
                                        _localctx = new DirectDeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_directDeclarator);
                                        this.state = 467;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 468;
                                        this.match(CParser.LeftParen);
                                        this.state = 470;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CParser.Identifier) {
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
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.nestedParenthesesBlock = function () {
        var _localctx = new NestedParenthesesBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, CParser.RULE_nestedParenthesesBlock);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Auto) | (1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Const) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Else) | (1 << CParser.Enum) | (1 << CParser.Extern) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.Goto) | (1 << CParser.If) | (1 << CParser.Inline) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Register) | (1 << CParser.Restrict) | (1 << CParser.Return) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Sizeof) | (1 << CParser.Static) | (1 << CParser.Struct) | (1 << CParser.Switch) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.Volatile - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.Alignas - 32)) | (1 << (CParser.Alignof - 32)) | (1 << (CParser.Atomic - 32)) | (1 << (CParser.Bool - 32)) | (1 << (CParser.Complex - 32)) | (1 << (CParser.Generic - 32)) | (1 << (CParser.Imaginary - 32)) | (1 << (CParser.Noreturn - 32)) | (1 << (CParser.StaticAssert - 32)) | (1 << (CParser.ThreadLocal - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBracket - 32)) | (1 << (CParser.RightBracket - 32)) | (1 << (CParser.LeftBrace - 32)) | (1 << (CParser.RightBrace - 32)) | (1 << (CParser.Less - 32)) | (1 << (CParser.LessEqual - 32)) | (1 << (CParser.Greater - 32)) | (1 << (CParser.GreaterEqual - 32)) | (1 << (CParser.LeftShift - 32)) | (1 << (CParser.RightShift - 32)) | (1 << (CParser.Plus - 32)) | (1 << (CParser.PlusPlus - 32)) | (1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)) | (1 << (CParser.Div - 32)) | (1 << (CParser.Mod - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.And - 64)) | (1 << (CParser.Or - 64)) | (1 << (CParser.AndAnd - 64)) | (1 << (CParser.OrOr - 64)) | (1 << (CParser.Caret - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Question - 64)) | (1 << (CParser.Colon - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Comma - 64)) | (1 << (CParser.Assign - 64)) | (1 << (CParser.StarAssign - 64)) | (1 << (CParser.DivAssign - 64)) | (1 << (CParser.ModAssign - 64)) | (1 << (CParser.PlusAssign - 64)) | (1 << (CParser.MinusAssign - 64)) | (1 << (CParser.LeftShiftAssign - 64)) | (1 << (CParser.RightShiftAssign - 64)) | (1 << (CParser.AndAssign - 64)) | (1 << (CParser.XorAssign - 64)) | (1 << (CParser.OrAssign - 64)) | (1 << (CParser.Equal - 64)) | (1 << (CParser.NotEqual - 64)) | (1 << (CParser.Arrow - 64)) | (1 << (CParser.Dot - 64)) | (1 << (CParser.Ellipsis - 64)) | (1 << (CParser.Identifier - 64)) | (1 << (CParser.Constant - 64)) | (1 << (CParser.DigitSequence - 64)) | (1 << (CParser.StringLiteral - 64)) | (1 << (CParser.ComplexDefine - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CParser.IncludeDirective - 96)) | (1 << (CParser.AsmBlock - 96)) | (1 << (CParser.LineAfterPreprocessing - 96)) | (1 << (CParser.LineDirective - 96)) | (1 << (CParser.PragmaDirective - 96)) | (1 << (CParser.Whitespace - 96)) | (1 << (CParser.Newline - 96)) | (1 << (CParser.BlockComment - 96)) | (1 << (CParser.LineComment - 96)))) !== 0)) {
                    {
                        this.state = 483;
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
                                    this.state = 478;
                                    _la = this._input.LA(1);
                                    if (_la <= 0 || (_la === CParser.LeftParen || _la === CParser.RightParen)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                            case CParser.LeftParen:
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
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 487;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.pointer = function () {
        var _localctx = new PointerContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, CParser.RULE_pointer);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while (_la === CParser.Star);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.parameterList = function () {
        var _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, CParser.RULE_parameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 493;
                this.parameterDeclaration();
                this.state = 498;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Comma) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.parameterDeclaration = function () {
        var _localctx = new ParameterDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, CParser.RULE_parameterDeclaration);
        var _la;
        try {
            this.state = 508;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 501;
                        this.declarationSpecifiers();
                        this.state = 502;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 504;
                        this.declarationSpecifiers();
                        this.state = 506;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Star) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.identifierList = function () {
        var _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, CParser.RULE_identifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 510;
                this.match(CParser.Identifier);
                this.state = 515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Comma) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, CParser.RULE_typeName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.specifierQualifierList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.typedefName = function () {
        var _localctx = new TypedefNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, CParser.RULE_typedefName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 520;
                this.match(CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.initializer = function () {
        var _localctx = new InitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, CParser.RULE_initializer);
        var _la;
        try {
            this.state = 530;
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
                        this.state = 522;
                        this.assignmentExpression();
                    }
                    break;
                case CParser.LeftBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 523;
                        this.match(CParser.LeftBrace);
                        this.state = 524;
                        this.initializerList();
                        this.state = 526;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CParser.Comma) {
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.initializerList = function () {
        var _localctx = new InitializerListContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, CParser.RULE_initializerList);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.LeftBracket || _la === CParser.Dot) {
                    {
                        this.state = 532;
                        this.designation();
                    }
                }
                this.state = 535;
                this.initializer();
                this.state = 543;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 536;
                                this.match(CParser.Comma);
                                this.state = 538;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === CParser.LeftBracket || _la === CParser.Dot) {
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
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.designation = function () {
        var _localctx = new DesignationContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, CParser.RULE_designation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 546;
                this.designatorList();
                this.state = 547;
                this.match(CParser.Assign);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.designatorList = function () {
        var _localctx = new DesignatorListContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, CParser.RULE_designatorList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while (_la === CParser.LeftBracket || _la === CParser.Dot);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.designator = function () {
        var _localctx = new DesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, CParser.RULE_designator);
        try {
            this.state = 560;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.LeftBracket:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 554;
                        this.match(CParser.LeftBracket);
                        this.state = 555;
                        this.constantExpression();
                        this.state = 556;
                        this.match(CParser.RightBracket);
                    }
                    break;
                case CParser.Dot:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 558;
                        this.match(CParser.Dot);
                        this.state = 559;
                        this.match(CParser.Identifier);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, CParser.RULE_statement);
        try {
            this.state = 568;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.Case:
                case CParser.Default:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 562;
                        this.labeledStatement();
                    }
                    break;
                case CParser.LeftBrace:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 563;
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
                        this.state = 564;
                        this.expressionStatement();
                    }
                    break;
                case CParser.If:
                case CParser.Switch:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 565;
                        this.selectionStatement();
                    }
                    break;
                case CParser.Do:
                case CParser.For:
                case CParser.While:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 566;
                        this.iterationStatement();
                    }
                    break;
                case CParser.Break:
                case CParser.Continue:
                case CParser.Return:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 567;
                        this.jumpStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.labeledStatement = function () {
        var _localctx = new LabeledStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, CParser.RULE_labeledStatement);
        try {
            this.state = 578;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.Case:
                    this.enterOuterAlt(_localctx, 1);
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
                case CParser.Default:
                    this.enterOuterAlt(_localctx, 2);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.compoundStatement = function () {
        var _localctx = new CompoundStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, CParser.RULE_compoundStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
                this.match(CParser.LeftBrace);
                this.state = 582;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Return) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Sizeof) | (1 << CParser.Struct) | (1 << CParser.Switch) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBrace - 32)) | (1 << (CParser.Plus - 32)) | (1 << (CParser.PlusPlus - 32)) | (1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.And - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Identifier - 64)) | (1 << (CParser.Constant - 64)) | (1 << (CParser.DigitSequence - 64)) | (1 << (CParser.StringLiteral - 64)))) !== 0)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.blockItemList = function () {
        var _localctx = new BlockItemListContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, CParser.RULE_blockItemList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Break) | (1 << CParser.Case) | (1 << CParser.Char) | (1 << CParser.Continue) | (1 << CParser.Default) | (1 << CParser.Do) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float) | (1 << CParser.For) | (1 << CParser.If) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Return) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Sizeof) | (1 << CParser.Struct) | (1 << CParser.Switch) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.While - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.LeftBrace - 32)) | (1 << (CParser.Plus - 32)) | (1 << (CParser.PlusPlus - 32)) | (1 << (CParser.Minus - 32)) | (1 << (CParser.MinusMinus - 32)) | (1 << (CParser.Star - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CParser.And - 64)) | (1 << (CParser.Not - 64)) | (1 << (CParser.Tilde - 64)) | (1 << (CParser.Semi - 64)) | (1 << (CParser.Identifier - 64)) | (1 << (CParser.Constant - 64)) | (1 << (CParser.DigitSequence - 64)) | (1 << (CParser.StringLiteral - 64)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.blockItem = function () {
        var _localctx = new BlockItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, CParser.RULE_blockItem);
        try {
            this.state = 593;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 591;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 592;
                        this.declaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.expressionStatement = function () {
        var _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, CParser.RULE_expressionStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.selectionStatement = function () {
        var _localctx = new SelectionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, CParser.RULE_selectionStatement);
        try {
            this.state = 615;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.If:
                    this.enterOuterAlt(_localctx, 1);
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
                        switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
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
                case CParser.Switch:
                    this.enterOuterAlt(_localctx, 2);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.iterationStatement = function () {
        var _localctx = new IterationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, CParser.RULE_iterationStatement);
        try {
            this.state = 637;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CParser.While:
                    this.enterOuterAlt(_localctx, 1);
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
                case CParser.Do:
                    this.enterOuterAlt(_localctx, 2);
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
                case CParser.For:
                    this.enterOuterAlt(_localctx, 3);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.forCondition = function () {
        var _localctx = new ForConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, CParser.RULE_forCondition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 643;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
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
                            if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
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
                if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
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
                if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
                    {
                        this.state = 650;
                        this.forExpression();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.forDeclaration = function () {
        var _localctx = new ForDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, CParser.RULE_forDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 653;
                this.declarationSpecifiers();
                this.state = 655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CParser.LeftParen || _la === CParser.Star || _la === CParser.Identifier) {
                    {
                        this.state = 654;
                        this.initDeclaratorList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.forExpression = function () {
        var _localctx = new ForExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, CParser.RULE_forExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
                this.assignmentExpression();
                this.state = 662;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CParser.Comma) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.jumpStatement = function () {
        var _localctx = new JumpStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, CParser.RULE_jumpStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 670;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CParser.Break:
                    case CParser.Continue:
                        {
                            this.state = 665;
                            _la = this._input.LA(1);
                            if (!(_la === CParser.Break || _la === CParser.Continue)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                    case CParser.Return:
                        {
                            this.state = 666;
                            this.match(CParser.Return);
                            this.state = 668;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === CParser.Sizeof || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CParser.LeftParen - 45)) | (1 << (CParser.Plus - 45)) | (1 << (CParser.PlusPlus - 45)) | (1 << (CParser.Minus - 45)) | (1 << (CParser.MinusMinus - 45)) | (1 << (CParser.Star - 45)) | (1 << (CParser.And - 45)) | (1 << (CParser.Not - 45)) | (1 << (CParser.Tilde - 45)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CParser.Identifier - 91)) | (1 << (CParser.Constant - 91)) | (1 << (CParser.DigitSequence - 91)) | (1 << (CParser.StringLiteral - 91)))) !== 0)) {
                                {
                                    this.state = 667;
                                    this.expression();
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 672;
                this.match(CParser.Semi);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.compilationUnit = function () {
        var _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, CParser.RULE_compilationUnit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.Char) | (1 << CParser.Double) | (1 << CParser.Enum) | (1 << CParser.Float) | (1 << CParser.Int) | (1 << CParser.Long) | (1 << CParser.Short) | (1 << CParser.Signed) | (1 << CParser.Struct) | (1 << CParser.Typedef) | (1 << CParser.Union) | (1 << CParser.Unsigned))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.Void - 32)) | (1 << (CParser.LeftParen - 32)) | (1 << (CParser.Star - 32)))) !== 0) || _la === CParser.Semi || _la === CParser.Identifier);
                this.state = 679;
                this.match(CParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.externalDeclaration = function () {
        var _localctx = new ExternalDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, CParser.RULE_externalDeclaration);
        try {
            this.state = 684;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 681;
                        this.functionDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 682;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 683;
                        this.match(CParser.Semi);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.functionDefinition = function () {
        var _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, CParser.RULE_functionDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
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
                if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Typedef - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    CParser.prototype.declarationList = function () {
        var _localctx = new DeclarationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, CParser.RULE_declarationList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
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
                } while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (CParser.Char - 4)) | (1 << (CParser.Double - 4)) | (1 << (CParser.Enum - 4)) | (1 << (CParser.Float - 4)) | (1 << (CParser.Int - 4)) | (1 << (CParser.Long - 4)) | (1 << (CParser.Short - 4)) | (1 << (CParser.Signed - 4)) | (1 << (CParser.Struct - 4)) | (1 << (CParser.Typedef - 4)) | (1 << (CParser.Union - 4)) | (1 << (CParser.Unsigned - 4)) | (1 << (CParser.Void - 4)))) !== 0) || _la === CParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    CParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 41:
                return this.directDeclarator_sempred(_localctx, predIndex);
        }
        return true;
    };
    CParser.prototype.directDeclarator_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 3);
            case 1:
                return this.precpred(this._ctx, 2);
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(CParser, "_ATN", {
        get: function () {
            if (!CParser.__ATN) {
                CParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
            }
            return CParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    CParser.Auto = 1;
    CParser.Break = 2;
    CParser.Case = 3;
    CParser.Char = 4;
    CParser.Const = 5;
    CParser.Continue = 6;
    CParser.Default = 7;
    CParser.Do = 8;
    CParser.Double = 9;
    CParser.Else = 10;
    CParser.Enum = 11;
    CParser.Extern = 12;
    CParser.Float = 13;
    CParser.For = 14;
    CParser.Goto = 15;
    CParser.If = 16;
    CParser.Inline = 17;
    CParser.Int = 18;
    CParser.Long = 19;
    CParser.Register = 20;
    CParser.Restrict = 21;
    CParser.Return = 22;
    CParser.Short = 23;
    CParser.Signed = 24;
    CParser.Sizeof = 25;
    CParser.Static = 26;
    CParser.Struct = 27;
    CParser.Switch = 28;
    CParser.Typedef = 29;
    CParser.Union = 30;
    CParser.Unsigned = 31;
    CParser.Void = 32;
    CParser.Volatile = 33;
    CParser.While = 34;
    CParser.Alignas = 35;
    CParser.Alignof = 36;
    CParser.Atomic = 37;
    CParser.Bool = 38;
    CParser.Complex = 39;
    CParser.Generic = 40;
    CParser.Imaginary = 41;
    CParser.Noreturn = 42;
    CParser.StaticAssert = 43;
    CParser.ThreadLocal = 44;
    CParser.LeftParen = 45;
    CParser.RightParen = 46;
    CParser.LeftBracket = 47;
    CParser.RightBracket = 48;
    CParser.LeftBrace = 49;
    CParser.RightBrace = 50;
    CParser.Less = 51;
    CParser.LessEqual = 52;
    CParser.Greater = 53;
    CParser.GreaterEqual = 54;
    CParser.LeftShift = 55;
    CParser.RightShift = 56;
    CParser.Plus = 57;
    CParser.PlusPlus = 58;
    CParser.Minus = 59;
    CParser.MinusMinus = 60;
    CParser.Star = 61;
    CParser.Div = 62;
    CParser.Mod = 63;
    CParser.And = 64;
    CParser.Or = 65;
    CParser.AndAnd = 66;
    CParser.OrOr = 67;
    CParser.Caret = 68;
    CParser.Not = 69;
    CParser.Tilde = 70;
    CParser.Question = 71;
    CParser.Colon = 72;
    CParser.Semi = 73;
    CParser.Comma = 74;
    CParser.Assign = 75;
    CParser.StarAssign = 76;
    CParser.DivAssign = 77;
    CParser.ModAssign = 78;
    CParser.PlusAssign = 79;
    CParser.MinusAssign = 80;
    CParser.LeftShiftAssign = 81;
    CParser.RightShiftAssign = 82;
    CParser.AndAssign = 83;
    CParser.XorAssign = 84;
    CParser.OrAssign = 85;
    CParser.Equal = 86;
    CParser.NotEqual = 87;
    CParser.Arrow = 88;
    CParser.Dot = 89;
    CParser.Ellipsis = 90;
    CParser.Identifier = 91;
    CParser.Constant = 92;
    CParser.DigitSequence = 93;
    CParser.StringLiteral = 94;
    CParser.ComplexDefine = 95;
    CParser.IncludeDirective = 96;
    CParser.AsmBlock = 97;
    CParser.LineAfterPreprocessing = 98;
    CParser.LineDirective = 99;
    CParser.PragmaDirective = 100;
    CParser.Whitespace = 101;
    CParser.Newline = 102;
    CParser.BlockComment = 103;
    CParser.LineComment = 104;
    CParser.RULE_primaryExpression = 0;
    CParser.RULE_postfixExpression = 1;
    CParser.RULE_argumentExpressionList = 2;
    CParser.RULE_unaryExpression = 3;
    CParser.RULE_unaryOperator = 4;
    CParser.RULE_castExpression = 5;
    CParser.RULE_multiplicativeExpression = 6;
    CParser.RULE_additiveExpression = 7;
    CParser.RULE_shiftExpression = 8;
    CParser.RULE_relationalExpression = 9;
    CParser.RULE_equalityExpression = 10;
    CParser.RULE_andExpression = 11;
    CParser.RULE_exclusiveOrExpression = 12;
    CParser.RULE_inclusiveOrExpression = 13;
    CParser.RULE_logicalAndExpression = 14;
    CParser.RULE_logicalOrExpression = 15;
    CParser.RULE_conditionalExpression = 16;
    CParser.RULE_assignmentExpression = 17;
    CParser.RULE_assignmentOperator = 18;
    CParser.RULE_expression = 19;
    CParser.RULE_constantExpression = 20;
    CParser.RULE_declaration = 21;
    CParser.RULE_declarationSpecifiers = 22;
    CParser.RULE_declarationSpecifiers2 = 23;
    CParser.RULE_declarationSpecifier = 24;
    CParser.RULE_initDeclaratorList = 25;
    CParser.RULE_initDeclarator = 26;
    CParser.RULE_storageClassSpecifier = 27;
    CParser.RULE_typeSpecifier = 28;
    CParser.RULE_structOrUnionSpecifier = 29;
    CParser.RULE_structOrUnion = 30;
    CParser.RULE_structDeclarationList = 31;
    CParser.RULE_structDeclaration = 32;
    CParser.RULE_specifierQualifierList = 33;
    CParser.RULE_structDeclaratorList = 34;
    CParser.RULE_structDeclarator = 35;
    CParser.RULE_enumSpecifier = 36;
    CParser.RULE_enumeratorList = 37;
    CParser.RULE_enumerator = 38;
    CParser.RULE_enumerationConstant = 39;
    CParser.RULE_declarator = 40;
    CParser.RULE_directDeclarator = 41;
    CParser.RULE_nestedParenthesesBlock = 42;
    CParser.RULE_pointer = 43;
    CParser.RULE_parameterList = 44;
    CParser.RULE_parameterDeclaration = 45;
    CParser.RULE_identifierList = 46;
    CParser.RULE_typeName = 47;
    CParser.RULE_typedefName = 48;
    CParser.RULE_initializer = 49;
    CParser.RULE_initializerList = 50;
    CParser.RULE_designation = 51;
    CParser.RULE_designatorList = 52;
    CParser.RULE_designator = 53;
    CParser.RULE_statement = 54;
    CParser.RULE_labeledStatement = 55;
    CParser.RULE_compoundStatement = 56;
    CParser.RULE_blockItemList = 57;
    CParser.RULE_blockItem = 58;
    CParser.RULE_expressionStatement = 59;
    CParser.RULE_selectionStatement = 60;
    CParser.RULE_iterationStatement = 61;
    CParser.RULE_forCondition = 62;
    CParser.RULE_forDeclaration = 63;
    CParser.RULE_forExpression = 64;
    CParser.RULE_jumpStatement = 65;
    CParser.RULE_compilationUnit = 66;
    CParser.RULE_externalDeclaration = 67;
    CParser.RULE_functionDefinition = 68;
    CParser.RULE_declarationList = 69;
    // tslint:disable:no-trailing-whitespace
    CParser.ruleNames = [
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
    CParser._LITERAL_NAMES = [
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
    CParser._SYMBOLIC_NAMES = [
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
    CParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);
    CParser._serializedATNSegments = 2;
    CParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03j\u02BF\x04\x02" +
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
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xD0\n" +
        "\x07\x03\b\x03\b\x03\b\x07\b\xD5\n\b\f\b\x0E\b\xD8\v\b\x03\t\x03\t\x03" +
        "\t\x07\t\xDD\n\t\f\t\x0E\t\xE0\v\t\x03\n\x03\n\x03\n\x07\n\xE5\n\n\f\n" +
        "\x0E\n\xE8\v\n\x03\v\x03\v\x03\v\x07\v\xED\n\v\f\v\x0E\v\xF0\v\v\x03\f" +
        "\x03\f\x03\f\x07\f\xF5\n\f\f\f\x0E\f\xF8\v\f\x03\r\x03\r\x03\r\x07\r\xFD" +
        "\n\r\f\r\x0E\r\u0100\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0105\n\x0E\f" +
        "\x0E\x0E\x0E\u0108\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u010D\n\x0F\f" +
        "\x0F\x0E\x0F\u0110\v\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0115\n\x10\f" +
        "\x10\x0E\x10\u0118\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\u011D\n\x11\f" +
        "\x11\x0E\x11\u0120\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x05\x12\u0128\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
        "\x13\u0130\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0137" +
        "\n\x15\f\x15\x0E\x15\u013A\v\x15\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17" +
        "\u0140\n\x17\x03\x17\x03\x17\x03\x18\x06\x18\u0145\n\x18\r\x18\x0E\x18" +
        "\u0146\x03\x19\x06\x19\u014A\n\x19\r\x19\x0E\x19\u014B\x03\x1A\x03\x1A" +
        "\x05\x1A\u0150\n\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0155\n\x1B\f\x1B" +
        "\x0E\x1B\u0158\v\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015D\n\x1C\x03\x1D" +
        "\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016D\n\x1E\x03\x1F\x03\x1F\x05" +
        "\x1F\u0171\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
        "\x05\x1F\u017A\n\x1F\x03 \x03 \x03!\x06!\u017F\n!\r!\x0E!\u0180\x03\"" +
        "\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u018A\n\"\x03#\x03#\x05#\u018E" +
        "\n#\x03$\x03$\x03$\x07$\u0193\n$\f$\x0E$\u0196\v$\x03%\x03%\x05%\u019A" +
        "\n%\x03%\x03%\x05%\u019E\n%\x03&\x03&\x05&\u01A2\n&\x03&\x03&\x03&\x05" +
        "&\u01A7\n&\x03&\x03&\x03&\x03&\x05&\u01AD\n&\x03\'\x03\'\x03\'\x07\'\u01B2" +
        "\n\'\f\'\x0E\'\u01B5\v\'\x03(\x03(\x03(\x05(\u01BA\n(\x03)\x03)\x03*\x05" +
        "*\u01BF\n*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01C9\n+\x03+" +
        "\x03+\x03+\x05+\u01CE\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
        "\x05+\u01D9\n+\x03+\x07+\u01DC\n+\f+\x0E+\u01DF\v+\x03,\x03,\x03,\x03" +
        ",\x03,\x07,\u01E6\n,\f,\x0E,\u01E9\v,\x03-\x06-\u01EC\n-\r-\x0E-\u01ED" +
        "\x03.\x03.\x03.\x07.\u01F3\n.\f.\x0E.\u01F6\v.\x03/\x03/\x03/\x03/\x03" +
        "/\x05/\u01FD\n/\x05/\u01FF\n/\x030\x030\x030\x070\u0204\n0\f0\x0E0\u0207" +
        "\v0\x031\x031\x032\x032\x033\x033\x033\x033\x053\u0211\n3\x033\x033\x05" +
        "3\u0215\n3\x034\x054\u0218\n4\x034\x034\x034\x054\u021D\n4\x034\x074\u0220" +
        "\n4\f4\x0E4\u0223\v4\x035\x035\x035\x036\x066\u0229\n6\r6\x0E6\u022A\x03" +
        "7\x037\x037\x037\x037\x037\x057\u0233\n7\x038\x038\x038\x038\x038\x03" +
        "8\x058\u023B\n8\x039\x039\x039\x039\x039\x039\x039\x039\x059\u0245\n9" +
        "\x03:\x03:\x05:\u0249\n:\x03:\x03:\x03;\x06;\u024E\n;\r;\x0E;\u024F\x03" +
        "<\x03<\x05<\u0254\n<\x03=\x05=\u0257\n=\x03=\x03=\x03>\x03>\x03>\x03>" +
        "\x03>\x03>\x03>\x05>\u0262\n>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u026A" +
        "\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
        "?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u0280\n?\x03@\x03@\x05@\u0284\n@" +
        "\x05@\u0286\n@\x03@\x03@\x05@\u028A\n@\x03@\x03@\x05@\u028E\n@\x03A\x03" +
        "A\x05A\u0292\nA\x03B\x03B\x03B\x07B\u0297\nB\fB\x0EB\u029A\vB\x03C\x03" +
        "C\x03C\x05C\u029F\nC\x05C\u02A1\nC\x03C\x03C\x03D\x06D\u02A6\nD\rD\x0E" +
        "D\u02A7\x03D\x03D\x03E\x03E\x03E\x05E\u02AF\nE\x03F\x05F\u02B2\nF\x03" +
        "F\x03F\x05F\u02B6\nF\x03F\x03F\x03G\x06G\u02BB\nG\rG\x0EG\u02BC\x03G\x02" +
        "\x02\x03TH\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x02\x0F\x03\x02Z[\x04\x02<<>>\x05\x02\x1B\x1B<<>>\x07\x02;;==??BBGH\x03" +
        "\x02?A\x04\x02;;==\x03\x029:\x03\x0258\x03\x02XY\x03\x02MW\x04\x02\x1D" +
        "\x1D  \x03\x02/0\x04\x02\x04\x04\b\b\x02\u02E4\x02\x99\x03\x02\x02\x02" +
        "\x04\x9B\x03\x02\x02\x02\x06\xAD\x03\x02\x02\x02\b\xB8\x03\x02\x02\x02" +
        "\n\xC6\x03\x02\x02\x02\f\xCF\x03\x02\x02\x02\x0E\xD1\x03\x02\x02\x02\x10" +
        "\xD9\x03\x02\x02\x02\x12\xE1\x03\x02\x02\x02\x14\xE9\x03\x02\x02\x02\x16" +
        "\xF1\x03\x02\x02\x02\x18\xF9\x03\x02\x02\x02\x1A\u0101\x03\x02\x02\x02" +
        "\x1C\u0109\x03\x02\x02\x02\x1E\u0111\x03\x02\x02\x02 \u0119\x03\x02\x02" +
        "\x02\"\u0121\x03\x02\x02\x02$\u012F\x03\x02\x02\x02&\u0131\x03\x02\x02" +
        "\x02(\u0133\x03\x02\x02\x02*\u013B\x03\x02\x02\x02,\u013D\x03\x02\x02" +
        "\x02.\u0144\x03\x02\x02\x020\u0149\x03\x02\x02\x022\u014F\x03\x02\x02" +
        "\x024\u0151\x03\x02\x02\x026\u0159\x03\x02\x02\x028\u015E\x03\x02\x02" +
        "\x02:\u016C\x03\x02\x02\x02<\u0179\x03\x02\x02\x02>\u017B\x03\x02\x02" +
        "\x02@\u017E\x03\x02\x02\x02B\u0189\x03\x02\x02\x02D\u018B\x03\x02\x02" +
        "\x02F\u018F\x03\x02\x02\x02H\u019D\x03\x02\x02\x02J\u01AC\x03\x02\x02" +
        "\x02L\u01AE\x03\x02\x02\x02N\u01B6\x03\x02\x02\x02P\u01BB\x03\x02\x02" +
        "\x02R\u01BE\x03\x02\x02\x02T\u01C8\x03\x02\x02\x02V\u01E7\x03\x02\x02" +
        "\x02X\u01EB\x03\x02\x02\x02Z\u01EF\x03\x02\x02\x02\\\u01FE\x03\x02\x02" +
        "\x02^\u0200\x03\x02\x02\x02`\u0208\x03\x02\x02\x02b\u020A\x03\x02\x02" +
        "\x02d\u0214\x03\x02\x02\x02f\u0217\x03\x02\x02\x02h\u0224\x03\x02\x02" +
        "\x02j\u0228\x03\x02\x02\x02l\u0232\x03\x02\x02\x02n\u023A\x03\x02\x02" +
        "\x02p\u0244\x03\x02\x02\x02r\u0246\x03\x02\x02\x02t\u024D\x03\x02\x02" +
        "\x02v\u0253\x03\x02\x02\x02x\u0256\x03\x02\x02\x02z\u0269\x03\x02\x02" +
        "\x02|\u027F\x03\x02\x02\x02~\u0285\x03\x02\x02\x02\x80\u028F\x03\x02\x02" +
        "\x02\x82\u0293\x03\x02\x02\x02\x84\u02A0\x03\x02\x02\x02\x86\u02A5\x03" +
        "\x02\x02\x02\x88\u02AE\x03\x02\x02\x02\x8A\u02B1\x03\x02\x02\x02\x8C\u02BA" +
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
        "\xCB\xCC\x05\f\x07\x02\xCC\xD0\x03\x02\x02\x02\xCD\xD0\x05\b\x05\x02\xCE" +
        "\xD0\x07_\x02\x02\xCF\xC8\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF" +
        "\xCE\x03\x02\x02\x02\xD0\r\x03\x02\x02\x02\xD1\xD6\x05\f\x07\x02\xD2\xD3" +
        "\t\x06\x02\x02\xD3\xD5\x05\f\x07\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8\x03" +
        "\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\x0F\x03" +
        "\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDE\x05\x0E\b\x02\xDA\xDB\t\x07" +
        "\x02\x02\xDB\xDD\x05\x0E\b\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE0\x03\x02" +
        "\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\x11\x03\x02" +
        "\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE6\x05\x10\t\x02\xE2\xE3\t\b\x02" +
        "\x02\xE3\xE5\x05\x10\t\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03\x02\x02" +
        "\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\x13\x03\x02\x02" +
        "\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEE\x05\x12\n\x02\xEA\xEB\t\t\x02\x02" +
        "\xEB\xED\x05\x12\n\x02\xEC\xEA\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02" +
        "\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\x15\x03\x02\x02\x02" +
        "\xF0\xEE\x03\x02\x02\x02\xF1\xF6\x05\x14\v\x02\xF2\xF3\t\n\x02\x02\xF3" +
        "\xF5\x05\x14\v\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6" +
        "\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\x17\x03\x02\x02\x02\xF8" +
        "\xF6\x03\x02\x02\x02\xF9\xFE\x05\x16\f\x02\xFA\xFB\x07B\x02\x02\xFB\xFD" +
        "\x05\x16\f\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC" +
        "\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\x19\x03\x02\x02\x02\u0100" +
        "\xFE\x03\x02\x02\x02\u0101\u0106\x05\x18\r\x02\u0102\u0103\x07F\x02\x02" +
        "\u0103\u0105\x05\x18\r\x02\u0104\u0102\x03\x02\x02\x02\u0105\u0108\x03" +
        "\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107" +
        "\x1B\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010E\x05\x1A\x0E" +
        "\x02\u010A\u010B\x07C\x02\x02\u010B\u010D\x05\x1A\x0E\x02\u010C\u010A" +
        "\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02" +
        "\u010E\u010F\x03\x02\x02\x02\u010F\x1D\x03\x02\x02\x02\u0110\u010E\x03" +
        "\x02\x02\x02\u0111\u0116\x05\x1C\x0F\x02\u0112\u0113\x07D\x02\x02\u0113" +
        "\u0115\x05\x1C\x0F\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0118\x03\x02" +
        "\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
        "\x1F\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011E\x05\x1E\x10" +
        "\x02\u011A\u011B\x07E\x02\x02\u011B\u011D\x05\x1E\x10\x02\u011C\u011A" +
        "\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02" +
        "\u011E\u011F\x03\x02\x02\x02\u011F!\x03\x02\x02\x02\u0120\u011E\x03\x02" +
        "\x02\x02\u0121\u0127\x05 \x11\x02\u0122\u0123\x07I\x02\x02\u0123\u0124" +
        "\x05(\x15\x02\u0124\u0125\x07J\x02\x02\u0125\u0126\x05\"\x12\x02\u0126" +
        "\u0128\x03\x02\x02\x02\u0127\u0122\x03\x02\x02\x02\u0127\u0128\x03\x02" +
        "\x02\x02\u0128#\x03\x02\x02\x02\u0129\u0130\x05\"\x12\x02\u012A\u012B" +
        "\x05\b\x05\x02\u012B\u012C\x05&\x14\x02\u012C\u012D\x05$\x13\x02\u012D" +
        "\u0130\x03\x02\x02\x02\u012E\u0130\x07_\x02\x02\u012F\u0129\x03\x02\x02" +
        "\x02\u012F\u012A\x03\x02\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130%\x03" +
        "\x02\x02\x02\u0131\u0132\t\v\x02\x02\u0132\'\x03\x02\x02\x02\u0133\u0138" +
        "\x05$\x13\x02\u0134\u0135\x07L\x02\x02\u0135\u0137\x05$\x13\x02\u0136" +
        "\u0134\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02" +
        "\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139)\x03\x02\x02\x02\u013A\u0138" +
        "\x03\x02\x02\x02\u013B\u013C\x05\"\x12\x02\u013C+\x03\x02\x02\x02\u013D" +
        "\u013F\x05.\x18\x02\u013E\u0140\x054\x1B\x02\u013F\u013E\x03\x02\x02\x02" +
        "\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x07" +
        "K\x02\x02\u0142-\x03\x02\x02\x02\u0143\u0145\x052\x1A\x02\u0144\u0143" +
        "\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02" +
        "\u0146\u0147\x03\x02\x02\x02\u0147/\x03\x02\x02\x02\u0148\u014A\x052\x1A" +
        "\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u0149" +
        "\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C1\x03\x02\x02\x02\u014D" +
        "\u0150\x058\x1D\x02\u014E\u0150\x05:\x1E\x02\u014F\u014D\x03\x02\x02\x02" +
        "\u014F\u014E\x03\x02\x02\x02\u01503\x03\x02\x02\x02\u0151\u0156\x056\x1C" +
        "\x02\u0152\u0153\x07L\x02\x02\u0153\u0155\x056\x1C\x02\u0154\u0152\x03" +
        "\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156" +
        "\u0157\x03\x02\x02\x02\u01575\x03\x02\x02\x02\u0158\u0156\x03\x02\x02" +
        "\x02\u0159\u015C\x05R*\x02\u015A\u015B\x07M\x02\x02\u015B\u015D\x05d3" +
        "\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D7\x03" +
        "\x02\x02\x02\u015E\u015F\x07\x1F\x02\x02\u015F9\x03\x02\x02\x02\u0160" +
        "\u016D\x07\"\x02\x02\u0161\u016D\x07\x06\x02\x02\u0162\u016D\x07\x19\x02" +
        "\x02\u0163\u016D\x07\x14\x02\x02\u0164\u016D\x07\x15\x02\x02\u0165\u016D" +
        "\x07\x0F\x02\x02\u0166\u016D\x07\v\x02\x02\u0167\u016D\x07\x1A\x02\x02" +
        "\u0168\u016D\x07!\x02\x02\u0169\u016D\x05<\x1F\x02\u016A\u016D\x05J&\x02" +
        "\u016B\u016D\x05b2\x02\u016C\u0160\x03\x02\x02\x02\u016C\u0161\x03\x02" +
        "\x02\x02\u016C\u0162\x03\x02\x02\x02\u016C\u0163\x03\x02\x02\x02\u016C" +
        "\u0164\x03\x02\x02\x02\u016C\u0165\x03\x02\x02\x02\u016C\u0166\x03\x02" +
        "\x02\x02\u016C\u0167\x03\x02\x02\x02\u016C\u0168\x03\x02\x02\x02\u016C" +
        "\u0169\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016B\x03\x02" +
        "\x02\x02\u016D;\x03\x02\x02\x02\u016E\u0170\x05> \x02\u016F\u0171\x07" +
        "]\x02\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171" +
        "\u0172\x03\x02\x02\x02\u0172\u0173\x073\x02\x02\u0173\u0174\x05@!\x02" +
        "\u0174\u0175\x074\x02\x02\u0175\u017A\x03\x02\x02\x02\u0176\u0177\x05" +
        "> \x02\u0177\u0178\x07]\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u016E" +
        "\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u017A=\x03\x02\x02\x02\u017B" +
        "\u017C\t\f\x02\x02\u017C?\x03\x02\x02\x02\u017D\u017F\x05B\"\x02\u017E" +
        "\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u017E\x03\x02" +
        "\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181A\x03\x02\x02\x02\u0182\u0183" +
        "\x05D#\x02\u0183\u0184\x05F$\x02\u0184\u0185\x07K\x02\x02\u0185\u018A" +
        "\x03\x02\x02\x02\u0186\u0187\x05D#\x02\u0187\u0188\x07K\x02\x02\u0188" +
        "\u018A\x03\x02\x02\x02\u0189\u0182\x03\x02\x02\x02\u0189\u0186\x03\x02" +
        "\x02\x02\u018AC\x03\x02\x02\x02\u018B\u018D\x05:\x1E\x02\u018C\u018E\x05" +
        "D#\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018EE" +
        "\x03\x02\x02\x02\u018F\u0194\x05H%\x02\u0190\u0191\x07L\x02\x02\u0191" +
        "\u0193\x05H%\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02" +
        "\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195G\x03\x02" +
        "\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019E\x05R*\x02\u0198\u019A" +
        "\x05R*\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A" +
        "\u019B\x03\x02\x02\x02\u019B\u019C\x07J\x02\x02\u019C\u019E\x05*\x16\x02" +
        "\u019D\u0197\x03\x02\x02\x02\u019D\u0199\x03\x02\x02\x02\u019EI\x03\x02" +
        "\x02\x02\u019F\u01A1\x07\r\x02\x02\u01A0\u01A2\x07]\x02\x02\u01A1\u01A0" +
        "\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02" +
        "\u01A3\u01A4\x073\x02\x02\u01A4\u01A6\x05L\'\x02\u01A5\u01A7\x07L\x02" +
        "\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8" +
        "\x03\x02\x02\x02\u01A8\u01A9\x074\x02\x02\u01A9\u01AD\x03\x02\x02\x02" +
        "\u01AA\u01AB\x07\r\x02\x02\u01AB\u01AD\x07]\x02\x02\u01AC\u019F\x03\x02" +
        "\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01ADK\x03\x02\x02\x02\u01AE\u01B3" +
        "\x05N(\x02\u01AF\u01B0\x07L\x02\x02\u01B0\u01B2\x05N(\x02\u01B1\u01AF" +
        "\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02" +
        "\u01B3\u01B4\x03\x02\x02\x02\u01B4M\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
        "\x02\x02\u01B6\u01B9\x05P)\x02\u01B7\u01B8\x07M\x02\x02\u01B8\u01BA\x05" +
        "*\x16\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
        "O\x03\x02\x02\x02\u01BB\u01BC\x07]\x02\x02\u01BCQ\x03\x02\x02\x02\u01BD" +
        "\u01BF\x05X-\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
        "\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x05T+\x02\u01C1S\x03\x02\x02" +
        "\x02\u01C2\u01C3\b+\x01\x02\u01C3\u01C9\x07]\x02\x02\u01C4\u01C5\x07/" +
        "\x02\x02\u01C5\u01C6\x05R*\x02\u01C6\u01C7\x070\x02\x02\u01C7\u01C9\x03" +
        "\x02\x02\x02\u01C8\u01C2\x03\x02\x02\x02\u01C8\u01C4\x03\x02\x02\x02\u01C9" +
        "\u01DD\x03\x02\x02\x02\u01CA\u01CB\f\x05\x02\x02\u01CB\u01CD\x071\x02" +
        "\x02\u01CC\u01CE\x07_\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE" +
        "\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01DC\x072\x02\x02" +
        "\u01D0\u01D1\f\x04\x02\x02\u01D1\u01D2\x07/\x02\x02\u01D2\u01D3\x05Z." +
        "\x02\u01D3\u01D4\x070\x02\x02\u01D4\u01DC\x03\x02\x02\x02\u01D5\u01D6" +
        "\f\x03\x02\x02\u01D6\u01D8\x07/\x02\x02\u01D7\u01D9\x05^0\x02\u01D8\u01D7" +
        "\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02" +
        "\u01DA\u01DC\x070\x02\x02\u01DB\u01CA\x03\x02\x02\x02\u01DB\u01D0\x03" +
        "\x02\x02\x02\u01DB\u01D5\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD" +
        "\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DEU\x03\x02\x02" +
        "\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E6\n\r\x02\x02\u01E1\u01E2\x07" +
        "/\x02\x02\u01E2\u01E3\x05V,\x02\u01E3\u01E4\x070\x02\x02\u01E4\u01E6\x03" +
        "\x02\x02\x02\u01E5\u01E0\x03\x02\x02\x02\u01E5\u01E1\x03\x02\x02\x02\u01E6" +
        "\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02" +
        "\x02\x02\u01E8W\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01EC" +
        "\x07?\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
        "\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EEY\x03\x02" +
        "\x02\x02\u01EF\u01F4\x05\\/\x02\u01F0\u01F1\x07L\x02\x02\u01F1\u01F3\x05" +
        "\\/\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4" +
        "\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5[\x03\x02\x02" +
        "\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01F8\x05.\x18\x02\u01F8\u01F9" +
        "\x05R*\x02\u01F9\u01FF\x03\x02\x02\x02\u01FA\u01FC\x05.\x18\x02\u01FB" +
        "\u01FD\x05X-\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
        "\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01F7\x03\x02\x02\x02\u01FE\u01FA\x03" +
        "\x02\x02\x02\u01FF]\x03\x02\x02\x02\u0200\u0205\x07]\x02\x02\u0201\u0202" +
        "\x07L\x02\x02\u0202\u0204\x07]\x02\x02\u0203\u0201\x03\x02\x02\x02\u0204" +
        "\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02" +
        "\x02\x02\u0206_\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u0209" +
        "\x05D#\x02\u0209a\x03\x02\x02\x02\u020A\u020B\x07]\x02\x02\u020Bc\x03" +
        "\x02\x02\x02\u020C\u0215\x05$\x13\x02\u020D\u020E\x073\x02\x02\u020E\u0210" +
        "\x05f4\x02\u020F\u0211\x07L\x02\x02\u0210\u020F\x03\x02\x02\x02\u0210" +
        "\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x074\x02" +
        "\x02\u0213\u0215\x03\x02\x02\x02\u0214\u020C\x03\x02\x02\x02\u0214\u020D" +
        "\x03\x02\x02\x02\u0215e\x03\x02\x02\x02\u0216\u0218\x05h5\x02\u0217\u0216" +
        "\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
        "\u0219\u0221\x05d3\x02";
    CParser._serializedATNSegment1 = "\u021A\u021C\x07L\x02\x02\u021B\u021D\x05h5\x02\u021C\u021B\x03\x02\x02" +
        "\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220" +
        "\x05d3\x02\u021F\u021A\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221" +
        "\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222g\x03\x02\x02" +
        "\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0225\x05j6\x02\u0225\u0226\x07" +
        "M\x02\x02\u0226i\x03\x02\x02\x02\u0227\u0229\x05l7\x02\u0228\u0227\x03" +
        "\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A" +
        "\u022B\x03\x02\x02\x02\u022Bk\x03\x02\x02\x02\u022C\u022D\x071\x02\x02" +
        "\u022D\u022E\x05*\x16\x02\u022E\u022F\x072\x02\x02\u022F\u0233\x03\x02" +
        "\x02\x02\u0230\u0231\x07[\x02\x02\u0231\u0233\x07]\x02\x02\u0232\u022C" +
        "\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0233m\x03\x02\x02\x02\u0234" +
        "\u023B\x05p9\x02\u0235\u023B\x05r:\x02\u0236\u023B\x05x=\x02\u0237\u023B" +
        "\x05z>\x02\u0238\u023B\x05|?\x02\u0239\u023B\x05\x84C\x02\u023A\u0234" +
        "\x03\x02\x02\x02\u023A\u0235\x03\x02\x02\x02\u023A\u0236\x03\x02\x02\x02" +
        "\u023A\u0237\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u0239\x03" +
        "\x02\x02\x02\u023Bo\x03\x02\x02\x02\u023C\u023D\x07\x05\x02\x02\u023D" +
        "\u023E\x05*\x16\x02\u023E\u023F\x07J\x02\x02\u023F\u0240\x05n8\x02\u0240" +
        "\u0245\x03\x02\x02\x02\u0241\u0242\x07\t\x02\x02\u0242\u0243\x07J\x02" +
        "\x02\u0243\u0245\x05n8\x02\u0244\u023C\x03\x02\x02\x02\u0244\u0241\x03" +
        "\x02\x02\x02\u0245q\x03\x02\x02\x02\u0246\u0248\x073\x02\x02\u0247\u0249" +
        "\x05t;\x02\u0248\u0247\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249" +
        "\u024A\x03\x02\x02\x02\u024A\u024B\x074\x02\x02\u024Bs\x03\x02\x02\x02" +
        "\u024C\u024E\x05v<\x02\u024D\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02" +
        "\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
        "u\x03\x02\x02\x02\u0251\u0254\x05n8\x02\u0252\u0254\x05,\x17\x02\u0253" +
        "\u0251\x03\x02\x02\x02\u0253\u0252\x03\x02\x02\x02\u0254w\x03\x02\x02" +
        "\x02\u0255\u0257\x05(\x15\x02\u0256\u0255\x03\x02\x02\x02\u0256\u0257" +
        "\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x07K\x02\x02" +
        "\u0259y\x03\x02\x02\x02\u025A\u025B\x07\x12\x02\x02\u025B\u025C\x07/\x02" +
        "\x02\u025C\u025D\x05(\x15\x02\u025D\u025E\x070\x02\x02\u025E\u0261\x05" +
        "n8\x02\u025F\u0260\x07\f\x02\x02\u0260\u0262\x05n8\x02\u0261\u025F\x03" +
        "\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u026A\x03\x02\x02\x02\u0263" +
        "\u0264\x07\x1E\x02\x02\u0264\u0265\x07/\x02\x02\u0265\u0266\x05(\x15\x02" +
        "\u0266\u0267\x070\x02\x02\u0267\u0268\x05n8\x02\u0268\u026A\x03\x02\x02" +
        "\x02\u0269\u025A\x03\x02\x02\x02\u0269\u0263\x03\x02\x02\x02\u026A{\x03" +
        "\x02\x02\x02\u026B\u026C\x07$\x02\x02\u026C\u026D\x07/\x02\x02\u026D\u026E" +
        "\x05(\x15\x02\u026E\u026F\x070\x02\x02\u026F\u0270\x05n8\x02\u0270\u0280" +
        "\x03\x02\x02\x02\u0271\u0272\x07\n\x02\x02\u0272\u0273\x05n8\x02\u0273" +
        "\u0274\x07$\x02\x02\u0274\u0275\x07/\x02\x02\u0275\u0276\x05(\x15\x02" +
        "\u0276\u0277\x070\x02\x02\u0277\u0278\x07K\x02\x02\u0278\u0280\x03\x02" +
        "\x02\x02\u0279\u027A\x07\x10\x02\x02\u027A\u027B\x07/\x02\x02\u027B\u027C" +
        "\x05~@\x02\u027C\u027D\x070\x02\x02\u027D\u027E\x05n8\x02\u027E\u0280" +
        "\x03\x02\x02\x02\u027F\u026B\x03\x02\x02\x02\u027F\u0271\x03\x02\x02\x02" +
        "\u027F\u0279\x03\x02\x02\x02\u0280}\x03\x02\x02\x02\u0281\u0286\x05\x80" +
        "A\x02\u0282\u0284\x05(\x15\x02\u0283\u0282\x03\x02\x02\x02\u0283\u0284" +
        "\x03\x02\x02\x02\u0284\u0286\x03\x02\x02\x02\u0285\u0281\x03\x02\x02\x02" +
        "\u0285\u0283\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0289\x07" +
        "K\x02\x02\u0288\u028A\x05\x82B\x02\u0289\u0288\x03\x02\x02\x02\u0289\u028A" +
        "\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028D\x07K\x02\x02" +
        "\u028C\u028E\x05\x82B\x02\u028D\u028C\x03\x02\x02\x02\u028D\u028E\x03" +
        "\x02\x02\x02\u028E\x7F\x03\x02\x02\x02\u028F\u0291\x05.\x18\x02\u0290" +
        "\u0292\x054\x1B\x02\u0291\u0290\x03\x02\x02\x02\u0291\u0292\x03\x02\x02" +
        "\x02\u0292\x81\x03\x02\x02\x02\u0293\u0298\x05$\x13\x02\u0294\u0295\x07" +
        "L\x02\x02\u0295\u0297\x05$\x13\x02\u0296\u0294\x03\x02\x02\x02\u0297\u029A" +
        "\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02" +
        "\u0299\x83\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B\u02A1\t\x0E" +
        "\x02\x02\u029C\u029E\x07\x18\x02\x02\u029D\u029F\x05(\x15\x02\u029E\u029D" +
        "\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02" +
        "\u02A0\u029B\x03\x02\x02\x02\u02A0\u029C\x03\x02\x02\x02\u02A1\u02A2\x03" +
        "\x02\x02\x02\u02A2\u02A3\x07K\x02\x02\u02A3\x85\x03\x02\x02\x02\u02A4" +
        "\u02A6\x05\x88E\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02" +
        "\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02A9" +
        "\x03\x02\x02\x02\u02A9\u02AA\x07\x02\x02\x03\u02AA\x87\x03\x02\x02\x02" +
        "\u02AB\u02AF\x05\x8AF\x02\u02AC\u02AF\x05,\x17\x02\u02AD\u02AF\x07K\x02" +
        "\x02\u02AE\u02AB\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AD" +
        "\x03\x02\x02\x02\u02AF\x89\x03\x02\x02\x02\u02B0\u02B2\x05.\x18\x02\u02B1" +
        "\u02B0\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3\x03\x02" +
        "\x02\x02\u02B3\u02B5\x05R*\x02\u02B4\u02B6\x05\x8CG\x02\u02B5\u02B4\x03" +
        "\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
        "\u02B8\x05r:\x02\u02B8\x8B\x03\x02\x02\x02\u02B9\u02BB\x05,\x17\x02\u02BA" +
        "\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BA\x03\x02" +
        "\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\x8D\x03\x02\x02\x02V\x93\x99" +
        "\xA2\xA8\xAA\xB2\xB8\xC4\xCF\xD6\xDE\xE6\xEE\xF6\xFE\u0106\u010E\u0116" +
        "\u011E\u0127\u012F\u0138\u013F\u0146\u014B\u014F\u0156\u015C\u016C\u0170" +
        "\u0179\u0180\u0189\u018D\u0194\u0199\u019D\u01A1\u01A6\u01AC\u01B3\u01B9" +
        "\u01BE\u01C8\u01CD\u01D8\u01DB\u01DD\u01E5\u01E7\u01ED\u01F4\u01FC\u01FE" +
        "\u0205\u0210\u0214\u0217\u021C\u0221\u022A\u0232\u023A\u0244\u0248\u024F" +
        "\u0253\u0256\u0261\u0269\u027F\u0283\u0285\u0289\u028D\u0291\u0298\u029E" +
        "\u02A0\u02A7\u02AE\u02B1\u02B5\u02BC";
    CParser._serializedATN = Utils.join([
        CParser._serializedATNSegment0,
        CParser._serializedATNSegment1,
    ], "");
    return CParser;
}(Parser_1.Parser));
exports.CParser = CParser;
var PrimaryExpressionContext = /** @class */ (function (_super) {
    __extends(PrimaryExpressionContext, _super);
    function PrimaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryExpressionContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    PrimaryExpressionContext.prototype.Constant = function () { return this.tryGetToken(CParser.Constant, 0); };
    PrimaryExpressionContext.prototype.StringLiteral = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.StringLiteral);
        }
        else {
            return this.getToken(CParser.StringLiteral, i);
        }
    };
    PrimaryExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    PrimaryExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    PrimaryExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    Object.defineProperty(PrimaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_primaryExpression; },
        enumerable: false,
        configurable: true
    });
    return PrimaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimaryExpressionContext = PrimaryExpressionContext;
var PostfixExpressionContext = /** @class */ (function (_super) {
    __extends(PostfixExpressionContext, _super);
    function PostfixExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixExpressionContext.prototype.primaryExpression = function () {
        return this.tryGetRuleContext(0, PrimaryExpressionContext);
    };
    PostfixExpressionContext.prototype.LeftBracket = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftBracket);
        }
        else {
            return this.getToken(CParser.LeftBracket, i);
        }
    };
    PostfixExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    PostfixExpressionContext.prototype.RightBracket = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightBracket);
        }
        else {
            return this.getToken(CParser.RightBracket, i);
        }
    };
    PostfixExpressionContext.prototype.LeftParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftParen);
        }
        else {
            return this.getToken(CParser.LeftParen, i);
        }
    };
    PostfixExpressionContext.prototype.RightParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightParen);
        }
        else {
            return this.getToken(CParser.RightParen, i);
        }
    };
    PostfixExpressionContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Identifier);
        }
        else {
            return this.getToken(CParser.Identifier, i);
        }
    };
    PostfixExpressionContext.prototype.Dot = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Dot);
        }
        else {
            return this.getToken(CParser.Dot, i);
        }
    };
    PostfixExpressionContext.prototype.Arrow = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Arrow);
        }
        else {
            return this.getToken(CParser.Arrow, i);
        }
    };
    PostfixExpressionContext.prototype.PlusPlus = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.PlusPlus);
        }
        else {
            return this.getToken(CParser.PlusPlus, i);
        }
    };
    PostfixExpressionContext.prototype.MinusMinus = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.MinusMinus);
        }
        else {
            return this.getToken(CParser.MinusMinus, i);
        }
    };
    PostfixExpressionContext.prototype.argumentExpressionList = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentExpressionListContext);
        }
        else {
            return this.getRuleContext(i, ArgumentExpressionListContext);
        }
    };
    Object.defineProperty(PostfixExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_postfixExpression; },
        enumerable: false,
        configurable: true
    });
    return PostfixExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PostfixExpressionContext = PostfixExpressionContext;
var ArgumentExpressionListContext = /** @class */ (function (_super) {
    __extends(ArgumentExpressionListContext, _super);
    function ArgumentExpressionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentExpressionListContext.prototype.assignmentExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentExpressionContext);
        }
        else {
            return this.getRuleContext(i, AssignmentExpressionContext);
        }
    };
    ArgumentExpressionListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(ArgumentExpressionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_argumentExpressionList; },
        enumerable: false,
        configurable: true
    });
    return ArgumentExpressionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentExpressionListContext = ArgumentExpressionListContext;
var UnaryExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryExpressionContext, _super);
    function UnaryExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryExpressionContext.prototype.postfixExpression = function () {
        return this.tryGetRuleContext(0, PostfixExpressionContext);
    };
    UnaryExpressionContext.prototype.unaryOperator = function () {
        return this.tryGetRuleContext(0, UnaryOperatorContext);
    };
    UnaryExpressionContext.prototype.castExpression = function () {
        return this.tryGetRuleContext(0, CastExpressionContext);
    };
    UnaryExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    UnaryExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    UnaryExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    UnaryExpressionContext.prototype.PlusPlus = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.PlusPlus);
        }
        else {
            return this.getToken(CParser.PlusPlus, i);
        }
    };
    UnaryExpressionContext.prototype.MinusMinus = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.MinusMinus);
        }
        else {
            return this.getToken(CParser.MinusMinus, i);
        }
    };
    UnaryExpressionContext.prototype.Sizeof = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Sizeof);
        }
        else {
            return this.getToken(CParser.Sizeof, i);
        }
    };
    Object.defineProperty(UnaryExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_unaryExpression; },
        enumerable: false,
        configurable: true
    });
    return UnaryExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryExpressionContext = UnaryExpressionContext;
var UnaryOperatorContext = /** @class */ (function (_super) {
    __extends(UnaryOperatorContext, _super);
    function UnaryOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryOperatorContext.prototype.And = function () { return this.tryGetToken(CParser.And, 0); };
    UnaryOperatorContext.prototype.Star = function () { return this.tryGetToken(CParser.Star, 0); };
    UnaryOperatorContext.prototype.Plus = function () { return this.tryGetToken(CParser.Plus, 0); };
    UnaryOperatorContext.prototype.Minus = function () { return this.tryGetToken(CParser.Minus, 0); };
    UnaryOperatorContext.prototype.Tilde = function () { return this.tryGetToken(CParser.Tilde, 0); };
    UnaryOperatorContext.prototype.Not = function () { return this.tryGetToken(CParser.Not, 0); };
    Object.defineProperty(UnaryOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_unaryOperator; },
        enumerable: false,
        configurable: true
    });
    return UnaryOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnaryOperatorContext = UnaryOperatorContext;
var CastExpressionContext = /** @class */ (function (_super) {
    __extends(CastExpressionContext, _super);
    function CastExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CastExpressionContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    CastExpressionContext.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    CastExpressionContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    CastExpressionContext.prototype.castExpression = function () {
        return this.tryGetRuleContext(0, CastExpressionContext);
    };
    CastExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    CastExpressionContext.prototype.DigitSequence = function () { return this.tryGetToken(CParser.DigitSequence, 0); };
    Object.defineProperty(CastExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_castExpression; },
        enumerable: false,
        configurable: true
    });
    return CastExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CastExpressionContext = CastExpressionContext;
var MultiplicativeExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeExpressionContext, _super);
    function MultiplicativeExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeExpressionContext.prototype.castExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CastExpressionContext);
        }
        else {
            return this.getRuleContext(i, CastExpressionContext);
        }
    };
    MultiplicativeExpressionContext.prototype.Star = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Star);
        }
        else {
            return this.getToken(CParser.Star, i);
        }
    };
    MultiplicativeExpressionContext.prototype.Div = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Div);
        }
        else {
            return this.getToken(CParser.Div, i);
        }
    };
    MultiplicativeExpressionContext.prototype.Mod = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Mod);
        }
        else {
            return this.getToken(CParser.Mod, i);
        }
    };
    Object.defineProperty(MultiplicativeExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_multiplicativeExpression; },
        enumerable: false,
        configurable: true
    });
    return MultiplicativeExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
var AdditiveExpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveExpressionContext, _super);
    function AdditiveExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveExpressionContext.prototype.multiplicativeExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    };
    AdditiveExpressionContext.prototype.Plus = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Plus);
        }
        else {
            return this.getToken(CParser.Plus, i);
        }
    };
    AdditiveExpressionContext.prototype.Minus = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Minus);
        }
        else {
            return this.getToken(CParser.Minus, i);
        }
    };
    Object.defineProperty(AdditiveExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_additiveExpression; },
        enumerable: false,
        configurable: true
    });
    return AdditiveExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveExpressionContext = AdditiveExpressionContext;
var ShiftExpressionContext = /** @class */ (function (_super) {
    __extends(ShiftExpressionContext, _super);
    function ShiftExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ShiftExpressionContext.prototype.additiveExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExpressionContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExpressionContext);
        }
    };
    ShiftExpressionContext.prototype.LeftShift = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftShift);
        }
        else {
            return this.getToken(CParser.LeftShift, i);
        }
    };
    ShiftExpressionContext.prototype.RightShift = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightShift);
        }
        else {
            return this.getToken(CParser.RightShift, i);
        }
    };
    Object.defineProperty(ShiftExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_shiftExpression; },
        enumerable: false,
        configurable: true
    });
    return ShiftExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ShiftExpressionContext = ShiftExpressionContext;
var RelationalExpressionContext = /** @class */ (function (_super) {
    __extends(RelationalExpressionContext, _super);
    function RelationalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalExpressionContext.prototype.shiftExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ShiftExpressionContext);
        }
        else {
            return this.getRuleContext(i, ShiftExpressionContext);
        }
    };
    RelationalExpressionContext.prototype.Less = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Less);
        }
        else {
            return this.getToken(CParser.Less, i);
        }
    };
    RelationalExpressionContext.prototype.Greater = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Greater);
        }
        else {
            return this.getToken(CParser.Greater, i);
        }
    };
    RelationalExpressionContext.prototype.LessEqual = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LessEqual);
        }
        else {
            return this.getToken(CParser.LessEqual, i);
        }
    };
    RelationalExpressionContext.prototype.GreaterEqual = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.GreaterEqual);
        }
        else {
            return this.getToken(CParser.GreaterEqual, i);
        }
    };
    Object.defineProperty(RelationalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_relationalExpression; },
        enumerable: false,
        configurable: true
    });
    return RelationalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationalExpressionContext = RelationalExpressionContext;
var EqualityExpressionContext = /** @class */ (function (_super) {
    __extends(EqualityExpressionContext, _super);
    function EqualityExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityExpressionContext.prototype.relationalExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationalExpressionContext);
        }
        else {
            return this.getRuleContext(i, RelationalExpressionContext);
        }
    };
    EqualityExpressionContext.prototype.Equal = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Equal);
        }
        else {
            return this.getToken(CParser.Equal, i);
        }
    };
    EqualityExpressionContext.prototype.NotEqual = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.NotEqual);
        }
        else {
            return this.getToken(CParser.NotEqual, i);
        }
    };
    Object.defineProperty(EqualityExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_equalityExpression; },
        enumerable: false,
        configurable: true
    });
    return EqualityExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EqualityExpressionContext = EqualityExpressionContext;
var AndExpressionContext = /** @class */ (function (_super) {
    __extends(AndExpressionContext, _super);
    function AndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AndExpressionContext.prototype.equalityExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityExpressionContext);
        }
        else {
            return this.getRuleContext(i, EqualityExpressionContext);
        }
    };
    AndExpressionContext.prototype.And = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.And);
        }
        else {
            return this.getToken(CParser.And, i);
        }
    };
    Object.defineProperty(AndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_andExpression; },
        enumerable: false,
        configurable: true
    });
    return AndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AndExpressionContext = AndExpressionContext;
var ExclusiveOrExpressionContext = /** @class */ (function (_super) {
    __extends(ExclusiveOrExpressionContext, _super);
    function ExclusiveOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExclusiveOrExpressionContext.prototype.andExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AndExpressionContext);
        }
        else {
            return this.getRuleContext(i, AndExpressionContext);
        }
    };
    ExclusiveOrExpressionContext.prototype.Caret = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Caret);
        }
        else {
            return this.getToken(CParser.Caret, i);
        }
    };
    Object.defineProperty(ExclusiveOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_exclusiveOrExpression; },
        enumerable: false,
        configurable: true
    });
    return ExclusiveOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExclusiveOrExpressionContext = ExclusiveOrExpressionContext;
var InclusiveOrExpressionContext = /** @class */ (function (_super) {
    __extends(InclusiveOrExpressionContext, _super);
    function InclusiveOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InclusiveOrExpressionContext.prototype.exclusiveOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExclusiveOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExclusiveOrExpressionContext);
        }
    };
    InclusiveOrExpressionContext.prototype.Or = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Or);
        }
        else {
            return this.getToken(CParser.Or, i);
        }
    };
    Object.defineProperty(InclusiveOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_inclusiveOrExpression; },
        enumerable: false,
        configurable: true
    });
    return InclusiveOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InclusiveOrExpressionContext = InclusiveOrExpressionContext;
var LogicalAndExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalAndExpressionContext, _super);
    function LogicalAndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalAndExpressionContext.prototype.inclusiveOrExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InclusiveOrExpressionContext);
        }
        else {
            return this.getRuleContext(i, InclusiveOrExpressionContext);
        }
    };
    LogicalAndExpressionContext.prototype.AndAnd = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.AndAnd);
        }
        else {
            return this.getToken(CParser.AndAnd, i);
        }
    };
    Object.defineProperty(LogicalAndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_logicalAndExpression; },
        enumerable: false,
        configurable: true
    });
    return LogicalAndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalAndExpressionContext = LogicalAndExpressionContext;
var LogicalOrExpressionContext = /** @class */ (function (_super) {
    __extends(LogicalOrExpressionContext, _super);
    function LogicalOrExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalOrExpressionContext.prototype.logicalAndExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicalAndExpressionContext);
        }
        else {
            return this.getRuleContext(i, LogicalAndExpressionContext);
        }
    };
    LogicalOrExpressionContext.prototype.OrOr = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.OrOr);
        }
        else {
            return this.getToken(CParser.OrOr, i);
        }
    };
    Object.defineProperty(LogicalOrExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_logicalOrExpression; },
        enumerable: false,
        configurable: true
    });
    return LogicalOrExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LogicalOrExpressionContext = LogicalOrExpressionContext;
var ConditionalExpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalExpressionContext, _super);
    function ConditionalExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalExpressionContext.prototype.logicalOrExpression = function () {
        return this.getRuleContext(0, LogicalOrExpressionContext);
    };
    ConditionalExpressionContext.prototype.Question = function () { return this.tryGetToken(CParser.Question, 0); };
    ConditionalExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    ConditionalExpressionContext.prototype.Colon = function () { return this.tryGetToken(CParser.Colon, 0); };
    ConditionalExpressionContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    Object.defineProperty(ConditionalExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_conditionalExpression; },
        enumerable: false,
        configurable: true
    });
    return ConditionalExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalExpressionContext = ConditionalExpressionContext;
var AssignmentExpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentExpressionContext, _super);
    function AssignmentExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentExpressionContext.prototype.conditionalExpression = function () {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    };
    AssignmentExpressionContext.prototype.unaryExpression = function () {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    };
    AssignmentExpressionContext.prototype.assignmentOperator = function () {
        return this.tryGetRuleContext(0, AssignmentOperatorContext);
    };
    AssignmentExpressionContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    AssignmentExpressionContext.prototype.DigitSequence = function () { return this.tryGetToken(CParser.DigitSequence, 0); };
    Object.defineProperty(AssignmentExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_assignmentExpression; },
        enumerable: false,
        configurable: true
    });
    return AssignmentExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentExpressionContext = AssignmentExpressionContext;
var AssignmentOperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentOperatorContext, _super);
    function AssignmentOperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentOperatorContext.prototype.Assign = function () { return this.tryGetToken(CParser.Assign, 0); };
    AssignmentOperatorContext.prototype.StarAssign = function () { return this.tryGetToken(CParser.StarAssign, 0); };
    AssignmentOperatorContext.prototype.DivAssign = function () { return this.tryGetToken(CParser.DivAssign, 0); };
    AssignmentOperatorContext.prototype.ModAssign = function () { return this.tryGetToken(CParser.ModAssign, 0); };
    AssignmentOperatorContext.prototype.PlusAssign = function () { return this.tryGetToken(CParser.PlusAssign, 0); };
    AssignmentOperatorContext.prototype.MinusAssign = function () { return this.tryGetToken(CParser.MinusAssign, 0); };
    AssignmentOperatorContext.prototype.LeftShiftAssign = function () { return this.tryGetToken(CParser.LeftShiftAssign, 0); };
    AssignmentOperatorContext.prototype.RightShiftAssign = function () { return this.tryGetToken(CParser.RightShiftAssign, 0); };
    AssignmentOperatorContext.prototype.AndAssign = function () { return this.tryGetToken(CParser.AndAssign, 0); };
    AssignmentOperatorContext.prototype.XorAssign = function () { return this.tryGetToken(CParser.XorAssign, 0); };
    AssignmentOperatorContext.prototype.OrAssign = function () { return this.tryGetToken(CParser.OrAssign, 0); };
    Object.defineProperty(AssignmentOperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_assignmentOperator; },
        enumerable: false,
        configurable: true
    });
    return AssignmentOperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentOperatorContext = AssignmentOperatorContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignmentExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentExpressionContext);
        }
        else {
            return this.getRuleContext(i, AssignmentExpressionContext);
        }
    };
    ExpressionContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_expression; },
        enumerable: false,
        configurable: true
    });
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var ConstantExpressionContext = /** @class */ (function (_super) {
    __extends(ConstantExpressionContext, _super);
    function ConstantExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantExpressionContext.prototype.conditionalExpression = function () {
        return this.getRuleContext(0, ConditionalExpressionContext);
    };
    Object.defineProperty(ConstantExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_constantExpression; },
        enumerable: false,
        configurable: true
    });
    return ConstantExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantExpressionContext = ConstantExpressionContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.declarationSpecifiers = function () {
        return this.getRuleContext(0, DeclarationSpecifiersContext);
    };
    DeclarationContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    DeclarationContext.prototype.initDeclaratorList = function () {
        return this.tryGetRuleContext(0, InitDeclaratorListContext);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declaration; },
        enumerable: false,
        configurable: true
    });
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var DeclarationSpecifiersContext = /** @class */ (function (_super) {
    __extends(DeclarationSpecifiersContext, _super);
    function DeclarationSpecifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationSpecifiersContext.prototype.declarationSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, DeclarationSpecifierContext);
        }
    };
    Object.defineProperty(DeclarationSpecifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationSpecifiers; },
        enumerable: false,
        configurable: true
    });
    return DeclarationSpecifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationSpecifiersContext = DeclarationSpecifiersContext;
var DeclarationSpecifiers2Context = /** @class */ (function (_super) {
    __extends(DeclarationSpecifiers2Context, _super);
    function DeclarationSpecifiers2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationSpecifiers2Context.prototype.declarationSpecifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, DeclarationSpecifierContext);
        }
    };
    Object.defineProperty(DeclarationSpecifiers2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationSpecifiers2; },
        enumerable: false,
        configurable: true
    });
    return DeclarationSpecifiers2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationSpecifiers2Context = DeclarationSpecifiers2Context;
var DeclarationSpecifierContext = /** @class */ (function (_super) {
    __extends(DeclarationSpecifierContext, _super);
    function DeclarationSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationSpecifierContext.prototype.storageClassSpecifier = function () {
        return this.tryGetRuleContext(0, StorageClassSpecifierContext);
    };
    DeclarationSpecifierContext.prototype.typeSpecifier = function () {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    };
    Object.defineProperty(DeclarationSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationSpecifier; },
        enumerable: false,
        configurable: true
    });
    return DeclarationSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationSpecifierContext = DeclarationSpecifierContext;
var InitDeclaratorListContext = /** @class */ (function (_super) {
    __extends(InitDeclaratorListContext, _super);
    function InitDeclaratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitDeclaratorListContext.prototype.initDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, InitDeclaratorContext);
        }
    };
    InitDeclaratorListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(InitDeclaratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initDeclaratorList; },
        enumerable: false,
        configurable: true
    });
    return InitDeclaratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitDeclaratorListContext = InitDeclaratorListContext;
var InitDeclaratorContext = /** @class */ (function (_super) {
    __extends(InitDeclaratorContext, _super);
    function InitDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitDeclaratorContext.prototype.declarator = function () {
        return this.getRuleContext(0, DeclaratorContext);
    };
    InitDeclaratorContext.prototype.Assign = function () { return this.tryGetToken(CParser.Assign, 0); };
    InitDeclaratorContext.prototype.initializer = function () {
        return this.tryGetRuleContext(0, InitializerContext);
    };
    Object.defineProperty(InitDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initDeclarator; },
        enumerable: false,
        configurable: true
    });
    return InitDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitDeclaratorContext = InitDeclaratorContext;
var StorageClassSpecifierContext = /** @class */ (function (_super) {
    __extends(StorageClassSpecifierContext, _super);
    function StorageClassSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StorageClassSpecifierContext.prototype.Typedef = function () { return this.getToken(CParser.Typedef, 0); };
    Object.defineProperty(StorageClassSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_storageClassSpecifier; },
        enumerable: false,
        configurable: true
    });
    return StorageClassSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StorageClassSpecifierContext = StorageClassSpecifierContext;
var TypeSpecifierContext = /** @class */ (function (_super) {
    __extends(TypeSpecifierContext, _super);
    function TypeSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSpecifierContext.prototype.Void = function () { return this.tryGetToken(CParser.Void, 0); };
    TypeSpecifierContext.prototype.Char = function () { return this.tryGetToken(CParser.Char, 0); };
    TypeSpecifierContext.prototype.Short = function () { return this.tryGetToken(CParser.Short, 0); };
    TypeSpecifierContext.prototype.Int = function () { return this.tryGetToken(CParser.Int, 0); };
    TypeSpecifierContext.prototype.Long = function () { return this.tryGetToken(CParser.Long, 0); };
    TypeSpecifierContext.prototype.Float = function () { return this.tryGetToken(CParser.Float, 0); };
    TypeSpecifierContext.prototype.Double = function () { return this.tryGetToken(CParser.Double, 0); };
    TypeSpecifierContext.prototype.Signed = function () { return this.tryGetToken(CParser.Signed, 0); };
    TypeSpecifierContext.prototype.Unsigned = function () { return this.tryGetToken(CParser.Unsigned, 0); };
    TypeSpecifierContext.prototype.structOrUnionSpecifier = function () {
        return this.tryGetRuleContext(0, StructOrUnionSpecifierContext);
    };
    TypeSpecifierContext.prototype.enumSpecifier = function () {
        return this.tryGetRuleContext(0, EnumSpecifierContext);
    };
    TypeSpecifierContext.prototype.typedefName = function () {
        return this.tryGetRuleContext(0, TypedefNameContext);
    };
    Object.defineProperty(TypeSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typeSpecifier; },
        enumerable: false,
        configurable: true
    });
    return TypeSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSpecifierContext = TypeSpecifierContext;
var StructOrUnionSpecifierContext = /** @class */ (function (_super) {
    __extends(StructOrUnionSpecifierContext, _super);
    function StructOrUnionSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructOrUnionSpecifierContext.prototype.structOrUnion = function () {
        return this.getRuleContext(0, StructOrUnionContext);
    };
    StructOrUnionSpecifierContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    StructOrUnionSpecifierContext.prototype.structDeclarationList = function () {
        return this.tryGetRuleContext(0, StructDeclarationListContext);
    };
    StructOrUnionSpecifierContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    StructOrUnionSpecifierContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    Object.defineProperty(StructOrUnionSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structOrUnionSpecifier; },
        enumerable: false,
        configurable: true
    });
    return StructOrUnionSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructOrUnionSpecifierContext = StructOrUnionSpecifierContext;
var StructOrUnionContext = /** @class */ (function (_super) {
    __extends(StructOrUnionContext, _super);
    function StructOrUnionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructOrUnionContext.prototype.Struct = function () { return this.tryGetToken(CParser.Struct, 0); };
    StructOrUnionContext.prototype.Union = function () { return this.tryGetToken(CParser.Union, 0); };
    Object.defineProperty(StructOrUnionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structOrUnion; },
        enumerable: false,
        configurable: true
    });
    return StructOrUnionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructOrUnionContext = StructOrUnionContext;
var StructDeclarationListContext = /** @class */ (function (_super) {
    __extends(StructDeclarationListContext, _super);
    function StructDeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclarationListContext.prototype.structDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructDeclarationContext);
        }
        else {
            return this.getRuleContext(i, StructDeclarationContext);
        }
    };
    Object.defineProperty(StructDeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclarationList; },
        enumerable: false,
        configurable: true
    });
    return StructDeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclarationListContext = StructDeclarationListContext;
var StructDeclarationContext = /** @class */ (function (_super) {
    __extends(StructDeclarationContext, _super);
    function StructDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclarationContext.prototype.specifierQualifierList = function () {
        return this.getRuleContext(0, SpecifierQualifierListContext);
    };
    StructDeclarationContext.prototype.structDeclaratorList = function () {
        return this.tryGetRuleContext(0, StructDeclaratorListContext);
    };
    StructDeclarationContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    Object.defineProperty(StructDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclaration; },
        enumerable: false,
        configurable: true
    });
    return StructDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclarationContext = StructDeclarationContext;
var SpecifierQualifierListContext = /** @class */ (function (_super) {
    __extends(SpecifierQualifierListContext, _super);
    function SpecifierQualifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecifierQualifierListContext.prototype.typeSpecifier = function () {
        return this.getRuleContext(0, TypeSpecifierContext);
    };
    SpecifierQualifierListContext.prototype.specifierQualifierList = function () {
        return this.tryGetRuleContext(0, SpecifierQualifierListContext);
    };
    Object.defineProperty(SpecifierQualifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_specifierQualifierList; },
        enumerable: false,
        configurable: true
    });
    return SpecifierQualifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecifierQualifierListContext = SpecifierQualifierListContext;
var StructDeclaratorListContext = /** @class */ (function (_super) {
    __extends(StructDeclaratorListContext, _super);
    function StructDeclaratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclaratorListContext.prototype.structDeclarator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StructDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, StructDeclaratorContext);
        }
    };
    StructDeclaratorListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(StructDeclaratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclaratorList; },
        enumerable: false,
        configurable: true
    });
    return StructDeclaratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclaratorListContext = StructDeclaratorListContext;
var StructDeclaratorContext = /** @class */ (function (_super) {
    __extends(StructDeclaratorContext, _super);
    function StructDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructDeclaratorContext.prototype.declarator = function () {
        return this.tryGetRuleContext(0, DeclaratorContext);
    };
    StructDeclaratorContext.prototype.Colon = function () { return this.tryGetToken(CParser.Colon, 0); };
    StructDeclaratorContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    Object.defineProperty(StructDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_structDeclarator; },
        enumerable: false,
        configurable: true
    });
    return StructDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructDeclaratorContext = StructDeclaratorContext;
var EnumSpecifierContext = /** @class */ (function (_super) {
    __extends(EnumSpecifierContext, _super);
    function EnumSpecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumSpecifierContext.prototype.Enum = function () { return this.getToken(CParser.Enum, 0); };
    EnumSpecifierContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    EnumSpecifierContext.prototype.enumeratorList = function () {
        return this.tryGetRuleContext(0, EnumeratorListContext);
    };
    EnumSpecifierContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    EnumSpecifierContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    EnumSpecifierContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(EnumSpecifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumSpecifier; },
        enumerable: false,
        configurable: true
    });
    return EnumSpecifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumSpecifierContext = EnumSpecifierContext;
var EnumeratorListContext = /** @class */ (function (_super) {
    __extends(EnumeratorListContext, _super);
    function EnumeratorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorListContext.prototype.enumerator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumeratorContext);
        }
        else {
            return this.getRuleContext(i, EnumeratorContext);
        }
    };
    EnumeratorListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(EnumeratorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumeratorList; },
        enumerable: false,
        configurable: true
    });
    return EnumeratorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratorListContext = EnumeratorListContext;
var EnumeratorContext = /** @class */ (function (_super) {
    __extends(EnumeratorContext, _super);
    function EnumeratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorContext.prototype.enumerationConstant = function () {
        return this.getRuleContext(0, EnumerationConstantContext);
    };
    EnumeratorContext.prototype.Assign = function () { return this.tryGetToken(CParser.Assign, 0); };
    EnumeratorContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    Object.defineProperty(EnumeratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumerator; },
        enumerable: false,
        configurable: true
    });
    return EnumeratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumeratorContext = EnumeratorContext;
var EnumerationConstantContext = /** @class */ (function (_super) {
    __extends(EnumerationConstantContext, _super);
    function EnumerationConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumerationConstantContext.prototype.Identifier = function () { return this.getToken(CParser.Identifier, 0); };
    Object.defineProperty(EnumerationConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_enumerationConstant; },
        enumerable: false,
        configurable: true
    });
    return EnumerationConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumerationConstantContext = EnumerationConstantContext;
var DeclaratorContext = /** @class */ (function (_super) {
    __extends(DeclaratorContext, _super);
    function DeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclaratorContext.prototype.directDeclarator = function () {
        return this.getRuleContext(0, DirectDeclaratorContext);
    };
    DeclaratorContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    Object.defineProperty(DeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarator; },
        enumerable: false,
        configurable: true
    });
    return DeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclaratorContext = DeclaratorContext;
var DirectDeclaratorContext = /** @class */ (function (_super) {
    __extends(DirectDeclaratorContext, _super);
    function DirectDeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectDeclaratorContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    DirectDeclaratorContext.prototype.LeftParen = function () { return this.tryGetToken(CParser.LeftParen, 0); };
    DirectDeclaratorContext.prototype.declarator = function () {
        return this.tryGetRuleContext(0, DeclaratorContext);
    };
    DirectDeclaratorContext.prototype.RightParen = function () { return this.tryGetToken(CParser.RightParen, 0); };
    DirectDeclaratorContext.prototype.directDeclarator = function () {
        return this.tryGetRuleContext(0, DirectDeclaratorContext);
    };
    DirectDeclaratorContext.prototype.LeftBracket = function () { return this.tryGetToken(CParser.LeftBracket, 0); };
    DirectDeclaratorContext.prototype.RightBracket = function () { return this.tryGetToken(CParser.RightBracket, 0); };
    DirectDeclaratorContext.prototype.DigitSequence = function () { return this.tryGetToken(CParser.DigitSequence, 0); };
    DirectDeclaratorContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    DirectDeclaratorContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    Object.defineProperty(DirectDeclaratorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_directDeclarator; },
        enumerable: false,
        configurable: true
    });
    return DirectDeclaratorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectDeclaratorContext = DirectDeclaratorContext;
var NestedParenthesesBlockContext = /** @class */ (function (_super) {
    __extends(NestedParenthesesBlockContext, _super);
    function NestedParenthesesBlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NestedParenthesesBlockContext.prototype.LeftParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.LeftParen);
        }
        else {
            return this.getToken(CParser.LeftParen, i);
        }
    };
    NestedParenthesesBlockContext.prototype.nestedParenthesesBlock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NestedParenthesesBlockContext);
        }
        else {
            return this.getRuleContext(i, NestedParenthesesBlockContext);
        }
    };
    NestedParenthesesBlockContext.prototype.RightParen = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.RightParen);
        }
        else {
            return this.getToken(CParser.RightParen, i);
        }
    };
    Object.defineProperty(NestedParenthesesBlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_nestedParenthesesBlock; },
        enumerable: false,
        configurable: true
    });
    return NestedParenthesesBlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NestedParenthesesBlockContext = NestedParenthesesBlockContext;
var PointerContext = /** @class */ (function (_super) {
    __extends(PointerContext, _super);
    function PointerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerContext.prototype.Star = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Star);
        }
        else {
            return this.getToken(CParser.Star, i);
        }
    };
    Object.defineProperty(PointerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_pointer; },
        enumerable: false,
        configurable: true
    });
    return PointerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointerContext = PointerContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.parameterDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ParameterDeclarationContext);
        }
    };
    ParameterListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_parameterList; },
        enumerable: false,
        configurable: true
    });
    return ParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterListContext = ParameterListContext;
var ParameterDeclarationContext = /** @class */ (function (_super) {
    __extends(ParameterDeclarationContext, _super);
    function ParameterDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterDeclarationContext.prototype.declarationSpecifiers = function () {
        return this.getRuleContext(0, DeclarationSpecifiersContext);
    };
    ParameterDeclarationContext.prototype.declarator = function () {
        return this.tryGetRuleContext(0, DeclaratorContext);
    };
    ParameterDeclarationContext.prototype.pointer = function () {
        return this.tryGetRuleContext(0, PointerContext);
    };
    Object.defineProperty(ParameterDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_parameterDeclaration; },
        enumerable: false,
        configurable: true
    });
    return ParameterDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterDeclarationContext = ParameterDeclarationContext;
var IdentifierListContext = /** @class */ (function (_super) {
    __extends(IdentifierListContext, _super);
    function IdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierListContext.prototype.Identifier = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Identifier);
        }
        else {
            return this.getToken(CParser.Identifier, i);
        }
    };
    IdentifierListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(IdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_identifierList; },
        enumerable: false,
        configurable: true
    });
    return IdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierListContext = IdentifierListContext;
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.specifierQualifierList = function () {
        return this.getRuleContext(0, SpecifierQualifierListContext);
    };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typeName; },
        enumerable: false,
        configurable: true
    });
    return TypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNameContext = TypeNameContext;
var TypedefNameContext = /** @class */ (function (_super) {
    __extends(TypedefNameContext, _super);
    function TypedefNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedefNameContext.prototype.Identifier = function () { return this.getToken(CParser.Identifier, 0); };
    Object.defineProperty(TypedefNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_typedefName; },
        enumerable: false,
        configurable: true
    });
    return TypedefNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedefNameContext = TypedefNameContext;
var InitializerContext = /** @class */ (function (_super) {
    __extends(InitializerContext, _super);
    function InitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerContext.prototype.assignmentExpression = function () {
        return this.tryGetRuleContext(0, AssignmentExpressionContext);
    };
    InitializerContext.prototype.LeftBrace = function () { return this.tryGetToken(CParser.LeftBrace, 0); };
    InitializerContext.prototype.initializerList = function () {
        return this.tryGetRuleContext(0, InitializerListContext);
    };
    InitializerContext.prototype.RightBrace = function () { return this.tryGetToken(CParser.RightBrace, 0); };
    InitializerContext.prototype.Comma = function () { return this.tryGetToken(CParser.Comma, 0); };
    Object.defineProperty(InitializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initializer; },
        enumerable: false,
        configurable: true
    });
    return InitializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializerContext = InitializerContext;
var InitializerListContext = /** @class */ (function (_super) {
    __extends(InitializerListContext, _super);
    function InitializerListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerListContext.prototype.initializer = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InitializerContext);
        }
        else {
            return this.getRuleContext(i, InitializerContext);
        }
    };
    InitializerListContext.prototype.designation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DesignationContext);
        }
        else {
            return this.getRuleContext(i, DesignationContext);
        }
    };
    InitializerListContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(InitializerListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_initializerList; },
        enumerable: false,
        configurable: true
    });
    return InitializerListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitializerListContext = InitializerListContext;
var DesignationContext = /** @class */ (function (_super) {
    __extends(DesignationContext, _super);
    function DesignationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignationContext.prototype.designatorList = function () {
        return this.getRuleContext(0, DesignatorListContext);
    };
    DesignationContext.prototype.Assign = function () { return this.getToken(CParser.Assign, 0); };
    Object.defineProperty(DesignationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_designation; },
        enumerable: false,
        configurable: true
    });
    return DesignationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignationContext = DesignationContext;
var DesignatorListContext = /** @class */ (function (_super) {
    __extends(DesignatorListContext, _super);
    function DesignatorListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignatorListContext.prototype.designator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DesignatorContext);
        }
        else {
            return this.getRuleContext(i, DesignatorContext);
        }
    };
    Object.defineProperty(DesignatorListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_designatorList; },
        enumerable: false,
        configurable: true
    });
    return DesignatorListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignatorListContext = DesignatorListContext;
var DesignatorContext = /** @class */ (function (_super) {
    __extends(DesignatorContext, _super);
    function DesignatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesignatorContext.prototype.LeftBracket = function () { return this.tryGetToken(CParser.LeftBracket, 0); };
    DesignatorContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    DesignatorContext.prototype.RightBracket = function () { return this.tryGetToken(CParser.RightBracket, 0); };
    DesignatorContext.prototype.Dot = function () { return this.tryGetToken(CParser.Dot, 0); };
    DesignatorContext.prototype.Identifier = function () { return this.tryGetToken(CParser.Identifier, 0); };
    Object.defineProperty(DesignatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_designator; },
        enumerable: false,
        configurable: true
    });
    return DesignatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DesignatorContext = DesignatorContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.labeledStatement = function () {
        return this.tryGetRuleContext(0, LabeledStatementContext);
    };
    StatementContext.prototype.compoundStatement = function () {
        return this.tryGetRuleContext(0, CompoundStatementContext);
    };
    StatementContext.prototype.expressionStatement = function () {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    };
    StatementContext.prototype.selectionStatement = function () {
        return this.tryGetRuleContext(0, SelectionStatementContext);
    };
    StatementContext.prototype.iterationStatement = function () {
        return this.tryGetRuleContext(0, IterationStatementContext);
    };
    StatementContext.prototype.jumpStatement = function () {
        return this.tryGetRuleContext(0, JumpStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_statement; },
        enumerable: false,
        configurable: true
    });
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var LabeledStatementContext = /** @class */ (function (_super) {
    __extends(LabeledStatementContext, _super);
    function LabeledStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabeledStatementContext.prototype.Case = function () { return this.tryGetToken(CParser.Case, 0); };
    LabeledStatementContext.prototype.constantExpression = function () {
        return this.tryGetRuleContext(0, ConstantExpressionContext);
    };
    LabeledStatementContext.prototype.Colon = function () { return this.getToken(CParser.Colon, 0); };
    LabeledStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    LabeledStatementContext.prototype.Default = function () { return this.tryGetToken(CParser.Default, 0); };
    Object.defineProperty(LabeledStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_labeledStatement; },
        enumerable: false,
        configurable: true
    });
    return LabeledStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabeledStatementContext = LabeledStatementContext;
var CompoundStatementContext = /** @class */ (function (_super) {
    __extends(CompoundStatementContext, _super);
    function CompoundStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompoundStatementContext.prototype.LeftBrace = function () { return this.getToken(CParser.LeftBrace, 0); };
    CompoundStatementContext.prototype.RightBrace = function () { return this.getToken(CParser.RightBrace, 0); };
    CompoundStatementContext.prototype.blockItemList = function () {
        return this.tryGetRuleContext(0, BlockItemListContext);
    };
    Object.defineProperty(CompoundStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_compoundStatement; },
        enumerable: false,
        configurable: true
    });
    return CompoundStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompoundStatementContext = CompoundStatementContext;
var BlockItemListContext = /** @class */ (function (_super) {
    __extends(BlockItemListContext, _super);
    function BlockItemListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockItemListContext.prototype.blockItem = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockItemContext);
        }
        else {
            return this.getRuleContext(i, BlockItemContext);
        }
    };
    Object.defineProperty(BlockItemListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_blockItemList; },
        enumerable: false,
        configurable: true
    });
    return BlockItemListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockItemListContext = BlockItemListContext;
var BlockItemContext = /** @class */ (function (_super) {
    __extends(BlockItemContext, _super);
    function BlockItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockItemContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    BlockItemContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    Object.defineProperty(BlockItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_blockItem; },
        enumerable: false,
        configurable: true
    });
    return BlockItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockItemContext = BlockItemContext;
var ExpressionStatementContext = /** @class */ (function (_super) {
    __extends(ExpressionStatementContext, _super);
    function ExpressionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionStatementContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    ExpressionStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_expressionStatement; },
        enumerable: false,
        configurable: true
    });
    return ExpressionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionStatementContext = ExpressionStatementContext;
var SelectionStatementContext = /** @class */ (function (_super) {
    __extends(SelectionStatementContext, _super);
    function SelectionStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectionStatementContext.prototype.If = function () { return this.tryGetToken(CParser.If, 0); };
    SelectionStatementContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    SelectionStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    SelectionStatementContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    SelectionStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    SelectionStatementContext.prototype.Else = function () { return this.tryGetToken(CParser.Else, 0); };
    SelectionStatementContext.prototype.Switch = function () { return this.tryGetToken(CParser.Switch, 0); };
    Object.defineProperty(SelectionStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_selectionStatement; },
        enumerable: false,
        configurable: true
    });
    return SelectionStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectionStatementContext = SelectionStatementContext;
var IterationStatementContext = /** @class */ (function (_super) {
    __extends(IterationStatementContext, _super);
    function IterationStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IterationStatementContext.prototype.While = function () { return this.tryGetToken(CParser.While, 0); };
    IterationStatementContext.prototype.LeftParen = function () { return this.getToken(CParser.LeftParen, 0); };
    IterationStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    IterationStatementContext.prototype.RightParen = function () { return this.getToken(CParser.RightParen, 0); };
    IterationStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    IterationStatementContext.prototype.Do = function () { return this.tryGetToken(CParser.Do, 0); };
    IterationStatementContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    IterationStatementContext.prototype.For = function () { return this.tryGetToken(CParser.For, 0); };
    IterationStatementContext.prototype.forCondition = function () {
        return this.tryGetRuleContext(0, ForConditionContext);
    };
    Object.defineProperty(IterationStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_iterationStatement; },
        enumerable: false,
        configurable: true
    });
    return IterationStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterationStatementContext = IterationStatementContext;
var ForConditionContext = /** @class */ (function (_super) {
    __extends(ForConditionContext, _super);
    function ForConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForConditionContext.prototype.Semi = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Semi);
        }
        else {
            return this.getToken(CParser.Semi, i);
        }
    };
    ForConditionContext.prototype.forDeclaration = function () {
        return this.tryGetRuleContext(0, ForDeclarationContext);
    };
    ForConditionContext.prototype.forExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ForExpressionContext);
        }
        else {
            return this.getRuleContext(i, ForExpressionContext);
        }
    };
    ForConditionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ForConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_forCondition; },
        enumerable: false,
        configurable: true
    });
    return ForConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForConditionContext = ForConditionContext;
var ForDeclarationContext = /** @class */ (function (_super) {
    __extends(ForDeclarationContext, _super);
    function ForDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForDeclarationContext.prototype.declarationSpecifiers = function () {
        return this.getRuleContext(0, DeclarationSpecifiersContext);
    };
    ForDeclarationContext.prototype.initDeclaratorList = function () {
        return this.tryGetRuleContext(0, InitDeclaratorListContext);
    };
    Object.defineProperty(ForDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_forDeclaration; },
        enumerable: false,
        configurable: true
    });
    return ForDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForDeclarationContext = ForDeclarationContext;
var ForExpressionContext = /** @class */ (function (_super) {
    __extends(ForExpressionContext, _super);
    function ForExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForExpressionContext.prototype.assignmentExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentExpressionContext);
        }
        else {
            return this.getRuleContext(i, AssignmentExpressionContext);
        }
    };
    ForExpressionContext.prototype.Comma = function (i) {
        if (i === undefined) {
            return this.getTokens(CParser.Comma);
        }
        else {
            return this.getToken(CParser.Comma, i);
        }
    };
    Object.defineProperty(ForExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_forExpression; },
        enumerable: false,
        configurable: true
    });
    return ForExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForExpressionContext = ForExpressionContext;
var JumpStatementContext = /** @class */ (function (_super) {
    __extends(JumpStatementContext, _super);
    function JumpStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JumpStatementContext.prototype.Semi = function () { return this.getToken(CParser.Semi, 0); };
    JumpStatementContext.prototype.Return = function () { return this.tryGetToken(CParser.Return, 0); };
    JumpStatementContext.prototype.Continue = function () { return this.tryGetToken(CParser.Continue, 0); };
    JumpStatementContext.prototype.Break = function () { return this.tryGetToken(CParser.Break, 0); };
    JumpStatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(JumpStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_jumpStatement; },
        enumerable: false,
        configurable: true
    });
    return JumpStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.JumpStatementContext = JumpStatementContext;
var CompilationUnitContext = /** @class */ (function (_super) {
    __extends(CompilationUnitContext, _super);
    function CompilationUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompilationUnitContext.prototype.EOF = function () { return this.getToken(CParser.EOF, 0); };
    CompilationUnitContext.prototype.externalDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExternalDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ExternalDeclarationContext);
        }
    };
    Object.defineProperty(CompilationUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_compilationUnit; },
        enumerable: false,
        configurable: true
    });
    return CompilationUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompilationUnitContext = CompilationUnitContext;
var ExternalDeclarationContext = /** @class */ (function (_super) {
    __extends(ExternalDeclarationContext, _super);
    function ExternalDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExternalDeclarationContext.prototype.functionDefinition = function () {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    };
    ExternalDeclarationContext.prototype.declaration = function () {
        return this.tryGetRuleContext(0, DeclarationContext);
    };
    ExternalDeclarationContext.prototype.Semi = function () { return this.tryGetToken(CParser.Semi, 0); };
    Object.defineProperty(ExternalDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_externalDeclaration; },
        enumerable: false,
        configurable: true
    });
    return ExternalDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExternalDeclarationContext = ExternalDeclarationContext;
var FunctionDefinitionContext = /** @class */ (function (_super) {
    __extends(FunctionDefinitionContext, _super);
    function FunctionDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDefinitionContext.prototype.declarator = function () {
        return this.getRuleContext(0, DeclaratorContext);
    };
    FunctionDefinitionContext.prototype.compoundStatement = function () {
        return this.getRuleContext(0, CompoundStatementContext);
    };
    FunctionDefinitionContext.prototype.declarationSpecifiers = function () {
        return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
    };
    FunctionDefinitionContext.prototype.declarationList = function () {
        return this.tryGetRuleContext(0, DeclarationListContext);
    };
    Object.defineProperty(FunctionDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_functionDefinition; },
        enumerable: false,
        configurable: true
    });
    return FunctionDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDefinitionContext = FunctionDefinitionContext;
var DeclarationListContext = /** @class */ (function (_super) {
    __extends(DeclarationListContext, _super);
    function DeclarationListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationListContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    Object.defineProperty(DeclarationListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return CParser.RULE_declarationList; },
        enumerable: false,
        configurable: true
    });
    return DeclarationListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationListContext = DeclarationListContext;
