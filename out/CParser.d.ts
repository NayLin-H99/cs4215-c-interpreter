import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class CParser extends Parser {
    static readonly Auto = 1;
    static readonly Break = 2;
    static readonly Case = 3;
    static readonly Char = 4;
    static readonly Const = 5;
    static readonly Continue = 6;
    static readonly Default = 7;
    static readonly Do = 8;
    static readonly Double = 9;
    static readonly Else = 10;
    static readonly Enum = 11;
    static readonly Extern = 12;
    static readonly Float = 13;
    static readonly For = 14;
    static readonly Goto = 15;
    static readonly If = 16;
    static readonly Inline = 17;
    static readonly Int = 18;
    static readonly Long = 19;
    static readonly Register = 20;
    static readonly Restrict = 21;
    static readonly Return = 22;
    static readonly Short = 23;
    static readonly Signed = 24;
    static readonly Sizeof = 25;
    static readonly Static = 26;
    static readonly Struct = 27;
    static readonly Switch = 28;
    static readonly Typedef = 29;
    static readonly Union = 30;
    static readonly Unsigned = 31;
    static readonly Void = 32;
    static readonly Volatile = 33;
    static readonly While = 34;
    static readonly Alignas = 35;
    static readonly Alignof = 36;
    static readonly Atomic = 37;
    static readonly Bool = 38;
    static readonly Complex = 39;
    static readonly Generic = 40;
    static readonly Imaginary = 41;
    static readonly Noreturn = 42;
    static readonly StaticAssert = 43;
    static readonly ThreadLocal = 44;
    static readonly LeftParen = 45;
    static readonly RightParen = 46;
    static readonly LeftBracket = 47;
    static readonly RightBracket = 48;
    static readonly LeftBrace = 49;
    static readonly RightBrace = 50;
    static readonly Less = 51;
    static readonly LessEqual = 52;
    static readonly Greater = 53;
    static readonly GreaterEqual = 54;
    static readonly LeftShift = 55;
    static readonly RightShift = 56;
    static readonly Plus = 57;
    static readonly PlusPlus = 58;
    static readonly Minus = 59;
    static readonly MinusMinus = 60;
    static readonly Star = 61;
    static readonly Div = 62;
    static readonly Mod = 63;
    static readonly And = 64;
    static readonly Or = 65;
    static readonly AndAnd = 66;
    static readonly OrOr = 67;
    static readonly Caret = 68;
    static readonly Not = 69;
    static readonly Tilde = 70;
    static readonly Question = 71;
    static readonly Colon = 72;
    static readonly Semi = 73;
    static readonly Comma = 74;
    static readonly Assign = 75;
    static readonly StarAssign = 76;
    static readonly DivAssign = 77;
    static readonly ModAssign = 78;
    static readonly PlusAssign = 79;
    static readonly MinusAssign = 80;
    static readonly LeftShiftAssign = 81;
    static readonly RightShiftAssign = 82;
    static readonly AndAssign = 83;
    static readonly XorAssign = 84;
    static readonly OrAssign = 85;
    static readonly Equal = 86;
    static readonly NotEqual = 87;
    static readonly Arrow = 88;
    static readonly Dot = 89;
    static readonly Ellipsis = 90;
    static readonly Identifier = 91;
    static readonly Constant = 92;
    static readonly DigitSequence = 93;
    static readonly StringLiteral = 94;
    static readonly ComplexDefine = 95;
    static readonly IncludeDirective = 96;
    static readonly AsmBlock = 97;
    static readonly LineAfterPreprocessing = 98;
    static readonly LineDirective = 99;
    static readonly PragmaDirective = 100;
    static readonly Whitespace = 101;
    static readonly Newline = 102;
    static readonly BlockComment = 103;
    static readonly LineComment = 104;
    static readonly RULE_primaryExpression = 0;
    static readonly RULE_postfixExpression = 1;
    static readonly RULE_argumentExpressionList = 2;
    static readonly RULE_unaryExpression = 3;
    static readonly RULE_unaryOperator = 4;
    static readonly RULE_castExpression = 5;
    static readonly RULE_multiplicativeExpression = 6;
    static readonly RULE_additiveExpression = 7;
    static readonly RULE_shiftExpression = 8;
    static readonly RULE_relationalExpression = 9;
    static readonly RULE_equalityExpression = 10;
    static readonly RULE_andExpression = 11;
    static readonly RULE_exclusiveOrExpression = 12;
    static readonly RULE_inclusiveOrExpression = 13;
    static readonly RULE_logicalAndExpression = 14;
    static readonly RULE_logicalOrExpression = 15;
    static readonly RULE_conditionalExpression = 16;
    static readonly RULE_assignmentExpression = 17;
    static readonly RULE_assignmentOperator = 18;
    static readonly RULE_expression = 19;
    static readonly RULE_constantExpression = 20;
    static readonly RULE_declaration = 21;
    static readonly RULE_declarationSpecifiers = 22;
    static readonly RULE_declarationSpecifiers2 = 23;
    static readonly RULE_declarationSpecifier = 24;
    static readonly RULE_initDeclaratorList = 25;
    static readonly RULE_initDeclarator = 26;
    static readonly RULE_storageClassSpecifier = 27;
    static readonly RULE_typeSpecifier = 28;
    static readonly RULE_structOrUnionSpecifier = 29;
    static readonly RULE_structOrUnion = 30;
    static readonly RULE_structDeclarationList = 31;
    static readonly RULE_structDeclaration = 32;
    static readonly RULE_specifierQualifierList = 33;
    static readonly RULE_structDeclaratorList = 34;
    static readonly RULE_structDeclarator = 35;
    static readonly RULE_enumSpecifier = 36;
    static readonly RULE_enumeratorList = 37;
    static readonly RULE_enumerator = 38;
    static readonly RULE_enumerationConstant = 39;
    static readonly RULE_declarator = 40;
    static readonly RULE_directDeclarator = 41;
    static readonly RULE_nestedParenthesesBlock = 42;
    static readonly RULE_pointer = 43;
    static readonly RULE_parameterList = 44;
    static readonly RULE_parameterDeclaration = 45;
    static readonly RULE_identifierList = 46;
    static readonly RULE_typeName = 47;
    static readonly RULE_typedefName = 48;
    static readonly RULE_initializer = 49;
    static readonly RULE_initializerList = 50;
    static readonly RULE_designation = 51;
    static readonly RULE_designatorList = 52;
    static readonly RULE_designator = 53;
    static readonly RULE_statement = 54;
    static readonly RULE_labeledStatement = 55;
    static readonly RULE_compoundStatement = 56;
    static readonly RULE_blockItemList = 57;
    static readonly RULE_blockItem = 58;
    static readonly RULE_expressionStatement = 59;
    static readonly RULE_selectionStatement = 60;
    static readonly RULE_iterationStatement = 61;
    static readonly RULE_forCondition = 62;
    static readonly RULE_forDeclaration = 63;
    static readonly RULE_forExpression = 64;
    static readonly RULE_jumpStatement = 65;
    static readonly RULE_compilationUnit = 66;
    static readonly RULE_externalDeclaration = 67;
    static readonly RULE_functionDefinition = 68;
    static readonly RULE_declarationList = 69;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    primaryExpression(): PrimaryExpressionContext;
    postfixExpression(): PostfixExpressionContext;
    argumentExpressionList(): ArgumentExpressionListContext;
    unaryExpression(): UnaryExpressionContext;
    unaryOperator(): UnaryOperatorContext;
    castExpression(): CastExpressionContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    additiveExpression(): AdditiveExpressionContext;
    shiftExpression(): ShiftExpressionContext;
    relationalExpression(): RelationalExpressionContext;
    equalityExpression(): EqualityExpressionContext;
    andExpression(): AndExpressionContext;
    exclusiveOrExpression(): ExclusiveOrExpressionContext;
    inclusiveOrExpression(): InclusiveOrExpressionContext;
    logicalAndExpression(): LogicalAndExpressionContext;
    logicalOrExpression(): LogicalOrExpressionContext;
    conditionalExpression(): ConditionalExpressionContext;
    assignmentExpression(): AssignmentExpressionContext;
    assignmentOperator(): AssignmentOperatorContext;
    expression(): ExpressionContext;
    constantExpression(): ConstantExpressionContext;
    declaration(): DeclarationContext;
    declarationSpecifiers(): DeclarationSpecifiersContext;
    declarationSpecifiers2(): DeclarationSpecifiers2Context;
    declarationSpecifier(): DeclarationSpecifierContext;
    initDeclaratorList(): InitDeclaratorListContext;
    initDeclarator(): InitDeclaratorContext;
    storageClassSpecifier(): StorageClassSpecifierContext;
    typeSpecifier(): TypeSpecifierContext;
    structOrUnionSpecifier(): StructOrUnionSpecifierContext;
    structOrUnion(): StructOrUnionContext;
    structDeclarationList(): StructDeclarationListContext;
    structDeclaration(): StructDeclarationContext;
    specifierQualifierList(): SpecifierQualifierListContext;
    structDeclaratorList(): StructDeclaratorListContext;
    structDeclarator(): StructDeclaratorContext;
    enumSpecifier(): EnumSpecifierContext;
    enumeratorList(): EnumeratorListContext;
    enumerator(): EnumeratorContext;
    enumerationConstant(): EnumerationConstantContext;
    declarator(): DeclaratorContext;
    directDeclarator(): DirectDeclaratorContext;
    directDeclarator(_p: number): DirectDeclaratorContext;
    nestedParenthesesBlock(): NestedParenthesesBlockContext;
    pointer(): PointerContext;
    parameterList(): ParameterListContext;
    parameterDeclaration(): ParameterDeclarationContext;
    identifierList(): IdentifierListContext;
    typeName(): TypeNameContext;
    typedefName(): TypedefNameContext;
    initializer(): InitializerContext;
    initializerList(): InitializerListContext;
    designation(): DesignationContext;
    designatorList(): DesignatorListContext;
    designator(): DesignatorContext;
    statement(): StatementContext;
    labeledStatement(): LabeledStatementContext;
    compoundStatement(): CompoundStatementContext;
    blockItemList(): BlockItemListContext;
    blockItem(): BlockItemContext;
    expressionStatement(): ExpressionStatementContext;
    selectionStatement(): SelectionStatementContext;
    iterationStatement(): IterationStatementContext;
    forCondition(): ForConditionContext;
    forDeclaration(): ForDeclarationContext;
    forExpression(): ForExpressionContext;
    jumpStatement(): JumpStatementContext;
    compilationUnit(): CompilationUnitContext;
    externalDeclaration(): ExternalDeclarationContext;
    functionDefinition(): FunctionDefinitionContext;
    declarationList(): DeclarationListContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private directDeclarator_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class PrimaryExpressionContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    Constant(): TerminalNode | undefined;
    StringLiteral(): TerminalNode[];
    StringLiteral(i: number): TerminalNode;
    LeftParen(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class PostfixExpressionContext extends ParserRuleContext {
    primaryExpression(): PrimaryExpressionContext | undefined;
    LeftBracket(): TerminalNode[];
    LeftBracket(i: number): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RightBracket(): TerminalNode[];
    RightBracket(i: number): TerminalNode;
    LeftParen(): TerminalNode[];
    LeftParen(i: number): TerminalNode;
    RightParen(): TerminalNode[];
    RightParen(i: number): TerminalNode;
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    Dot(): TerminalNode[];
    Dot(i: number): TerminalNode;
    Arrow(): TerminalNode[];
    Arrow(i: number): TerminalNode;
    PlusPlus(): TerminalNode[];
    PlusPlus(i: number): TerminalNode;
    MinusMinus(): TerminalNode[];
    MinusMinus(i: number): TerminalNode;
    argumentExpressionList(): ArgumentExpressionListContext[];
    argumentExpressionList(i: number): ArgumentExpressionListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ArgumentExpressionListContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext[];
    assignmentExpression(i: number): AssignmentExpressionContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class UnaryExpressionContext extends ParserRuleContext {
    postfixExpression(): PostfixExpressionContext | undefined;
    unaryOperator(): UnaryOperatorContext | undefined;
    castExpression(): CastExpressionContext | undefined;
    LeftParen(): TerminalNode | undefined;
    typeName(): TypeNameContext | undefined;
    RightParen(): TerminalNode | undefined;
    PlusPlus(): TerminalNode[];
    PlusPlus(i: number): TerminalNode;
    MinusMinus(): TerminalNode[];
    MinusMinus(i: number): TerminalNode;
    Sizeof(): TerminalNode[];
    Sizeof(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class UnaryOperatorContext extends ParserRuleContext {
    And(): TerminalNode | undefined;
    Star(): TerminalNode | undefined;
    Plus(): TerminalNode | undefined;
    Minus(): TerminalNode | undefined;
    Tilde(): TerminalNode | undefined;
    Not(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class CastExpressionContext extends ParserRuleContext {
    LeftParen(): TerminalNode | undefined;
    typeName(): TypeNameContext | undefined;
    RightParen(): TerminalNode | undefined;
    castExpression(): CastExpressionContext | undefined;
    unaryExpression(): UnaryExpressionContext | undefined;
    DigitSequence(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class MultiplicativeExpressionContext extends ParserRuleContext {
    castExpression(): CastExpressionContext[];
    castExpression(i: number): CastExpressionContext;
    Star(): TerminalNode[];
    Star(i: number): TerminalNode;
    Div(): TerminalNode[];
    Div(i: number): TerminalNode;
    Mod(): TerminalNode[];
    Mod(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class AdditiveExpressionContext extends ParserRuleContext {
    multiplicativeExpression(): MultiplicativeExpressionContext[];
    multiplicativeExpression(i: number): MultiplicativeExpressionContext;
    Plus(): TerminalNode[];
    Plus(i: number): TerminalNode;
    Minus(): TerminalNode[];
    Minus(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ShiftExpressionContext extends ParserRuleContext {
    additiveExpression(): AdditiveExpressionContext[];
    additiveExpression(i: number): AdditiveExpressionContext;
    LeftShift(): TerminalNode[];
    LeftShift(i: number): TerminalNode;
    RightShift(): TerminalNode[];
    RightShift(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class RelationalExpressionContext extends ParserRuleContext {
    shiftExpression(): ShiftExpressionContext[];
    shiftExpression(i: number): ShiftExpressionContext;
    Less(): TerminalNode[];
    Less(i: number): TerminalNode;
    Greater(): TerminalNode[];
    Greater(i: number): TerminalNode;
    LessEqual(): TerminalNode[];
    LessEqual(i: number): TerminalNode;
    GreaterEqual(): TerminalNode[];
    GreaterEqual(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class EqualityExpressionContext extends ParserRuleContext {
    relationalExpression(): RelationalExpressionContext[];
    relationalExpression(i: number): RelationalExpressionContext;
    Equal(): TerminalNode[];
    Equal(i: number): TerminalNode;
    NotEqual(): TerminalNode[];
    NotEqual(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class AndExpressionContext extends ParserRuleContext {
    equalityExpression(): EqualityExpressionContext[];
    equalityExpression(i: number): EqualityExpressionContext;
    And(): TerminalNode[];
    And(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ExclusiveOrExpressionContext extends ParserRuleContext {
    andExpression(): AndExpressionContext[];
    andExpression(i: number): AndExpressionContext;
    Caret(): TerminalNode[];
    Caret(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class InclusiveOrExpressionContext extends ParserRuleContext {
    exclusiveOrExpression(): ExclusiveOrExpressionContext[];
    exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
    Or(): TerminalNode[];
    Or(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class LogicalAndExpressionContext extends ParserRuleContext {
    inclusiveOrExpression(): InclusiveOrExpressionContext[];
    inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
    AndAnd(): TerminalNode[];
    AndAnd(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class LogicalOrExpressionContext extends ParserRuleContext {
    logicalAndExpression(): LogicalAndExpressionContext[];
    logicalAndExpression(i: number): LogicalAndExpressionContext;
    OrOr(): TerminalNode[];
    OrOr(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ConditionalExpressionContext extends ParserRuleContext {
    logicalOrExpression(): LogicalOrExpressionContext;
    Question(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    Colon(): TerminalNode | undefined;
    conditionalExpression(): ConditionalExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class AssignmentExpressionContext extends ParserRuleContext {
    conditionalExpression(): ConditionalExpressionContext | undefined;
    unaryExpression(): UnaryExpressionContext | undefined;
    assignmentOperator(): AssignmentOperatorContext | undefined;
    assignmentExpression(): AssignmentExpressionContext | undefined;
    DigitSequence(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class AssignmentOperatorContext extends ParserRuleContext {
    Assign(): TerminalNode | undefined;
    StarAssign(): TerminalNode | undefined;
    DivAssign(): TerminalNode | undefined;
    ModAssign(): TerminalNode | undefined;
    PlusAssign(): TerminalNode | undefined;
    MinusAssign(): TerminalNode | undefined;
    LeftShiftAssign(): TerminalNode | undefined;
    RightShiftAssign(): TerminalNode | undefined;
    AndAssign(): TerminalNode | undefined;
    XorAssign(): TerminalNode | undefined;
    OrAssign(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ExpressionContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext[];
    assignmentExpression(i: number): AssignmentExpressionContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ConstantExpressionContext extends ParserRuleContext {
    conditionalExpression(): ConditionalExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DeclarationContext extends ParserRuleContext {
    declarationSpecifiers(): DeclarationSpecifiersContext;
    Semi(): TerminalNode;
    initDeclaratorList(): InitDeclaratorListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DeclarationSpecifiersContext extends ParserRuleContext {
    declarationSpecifier(): DeclarationSpecifierContext[];
    declarationSpecifier(i: number): DeclarationSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DeclarationSpecifiers2Context extends ParserRuleContext {
    declarationSpecifier(): DeclarationSpecifierContext[];
    declarationSpecifier(i: number): DeclarationSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DeclarationSpecifierContext extends ParserRuleContext {
    storageClassSpecifier(): StorageClassSpecifierContext | undefined;
    typeSpecifier(): TypeSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class InitDeclaratorListContext extends ParserRuleContext {
    initDeclarator(): InitDeclaratorContext[];
    initDeclarator(i: number): InitDeclaratorContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class InitDeclaratorContext extends ParserRuleContext {
    declarator(): DeclaratorContext;
    Assign(): TerminalNode | undefined;
    initializer(): InitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StorageClassSpecifierContext extends ParserRuleContext {
    Typedef(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class TypeSpecifierContext extends ParserRuleContext {
    Void(): TerminalNode | undefined;
    Char(): TerminalNode | undefined;
    Short(): TerminalNode | undefined;
    Int(): TerminalNode | undefined;
    Long(): TerminalNode | undefined;
    Float(): TerminalNode | undefined;
    Double(): TerminalNode | undefined;
    Signed(): TerminalNode | undefined;
    Unsigned(): TerminalNode | undefined;
    structOrUnionSpecifier(): StructOrUnionSpecifierContext | undefined;
    enumSpecifier(): EnumSpecifierContext | undefined;
    typedefName(): TypedefNameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StructOrUnionSpecifierContext extends ParserRuleContext {
    structOrUnion(): StructOrUnionContext;
    LeftBrace(): TerminalNode | undefined;
    structDeclarationList(): StructDeclarationListContext | undefined;
    RightBrace(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StructOrUnionContext extends ParserRuleContext {
    Struct(): TerminalNode | undefined;
    Union(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StructDeclarationListContext extends ParserRuleContext {
    structDeclaration(): StructDeclarationContext[];
    structDeclaration(i: number): StructDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StructDeclarationContext extends ParserRuleContext {
    specifierQualifierList(): SpecifierQualifierListContext;
    structDeclaratorList(): StructDeclaratorListContext | undefined;
    Semi(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class SpecifierQualifierListContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;
    specifierQualifierList(): SpecifierQualifierListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StructDeclaratorListContext extends ParserRuleContext {
    structDeclarator(): StructDeclaratorContext[];
    structDeclarator(i: number): StructDeclaratorContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StructDeclaratorContext extends ParserRuleContext {
    declarator(): DeclaratorContext | undefined;
    Colon(): TerminalNode | undefined;
    constantExpression(): ConstantExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class EnumSpecifierContext extends ParserRuleContext {
    Enum(): TerminalNode;
    LeftBrace(): TerminalNode | undefined;
    enumeratorList(): EnumeratorListContext | undefined;
    RightBrace(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class EnumeratorListContext extends ParserRuleContext {
    enumerator(): EnumeratorContext[];
    enumerator(i: number): EnumeratorContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class EnumeratorContext extends ParserRuleContext {
    enumerationConstant(): EnumerationConstantContext;
    Assign(): TerminalNode | undefined;
    constantExpression(): ConstantExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class EnumerationConstantContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DeclaratorContext extends ParserRuleContext {
    directDeclarator(): DirectDeclaratorContext;
    pointer(): PointerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DirectDeclaratorContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    LeftParen(): TerminalNode | undefined;
    declarator(): DeclaratorContext | undefined;
    RightParen(): TerminalNode | undefined;
    directDeclarator(): DirectDeclaratorContext | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    DigitSequence(): TerminalNode | undefined;
    parameterList(): ParameterListContext | undefined;
    identifierList(): IdentifierListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class NestedParenthesesBlockContext extends ParserRuleContext {
    LeftParen(): TerminalNode[];
    LeftParen(i: number): TerminalNode;
    nestedParenthesesBlock(): NestedParenthesesBlockContext[];
    nestedParenthesesBlock(i: number): NestedParenthesesBlockContext;
    RightParen(): TerminalNode[];
    RightParen(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class PointerContext extends ParserRuleContext {
    Star(): TerminalNode[];
    Star(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ParameterListContext extends ParserRuleContext {
    parameterDeclaration(): ParameterDeclarationContext[];
    parameterDeclaration(i: number): ParameterDeclarationContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ParameterDeclarationContext extends ParserRuleContext {
    declarationSpecifiers(): DeclarationSpecifiersContext;
    declarator(): DeclaratorContext | undefined;
    pointer(): PointerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class IdentifierListContext extends ParserRuleContext {
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class TypeNameContext extends ParserRuleContext {
    specifierQualifierList(): SpecifierQualifierListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class TypedefNameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class InitializerContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext | undefined;
    LeftBrace(): TerminalNode | undefined;
    initializerList(): InitializerListContext | undefined;
    RightBrace(): TerminalNode | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class InitializerListContext extends ParserRuleContext {
    initializer(): InitializerContext[];
    initializer(i: number): InitializerContext;
    designation(): DesignationContext[];
    designation(i: number): DesignationContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DesignationContext extends ParserRuleContext {
    designatorList(): DesignatorListContext;
    Assign(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DesignatorListContext extends ParserRuleContext {
    designator(): DesignatorContext[];
    designator(i: number): DesignatorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DesignatorContext extends ParserRuleContext {
    LeftBracket(): TerminalNode | undefined;
    constantExpression(): ConstantExpressionContext | undefined;
    RightBracket(): TerminalNode | undefined;
    Dot(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class StatementContext extends ParserRuleContext {
    labeledStatement(): LabeledStatementContext | undefined;
    compoundStatement(): CompoundStatementContext | undefined;
    expressionStatement(): ExpressionStatementContext | undefined;
    selectionStatement(): SelectionStatementContext | undefined;
    iterationStatement(): IterationStatementContext | undefined;
    jumpStatement(): JumpStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class LabeledStatementContext extends ParserRuleContext {
    Case(): TerminalNode | undefined;
    constantExpression(): ConstantExpressionContext | undefined;
    Colon(): TerminalNode;
    statement(): StatementContext;
    Default(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class CompoundStatementContext extends ParserRuleContext {
    LeftBrace(): TerminalNode;
    RightBrace(): TerminalNode;
    blockItemList(): BlockItemListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class BlockItemListContext extends ParserRuleContext {
    blockItem(): BlockItemContext[];
    blockItem(i: number): BlockItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class BlockItemContext extends ParserRuleContext {
    statement(): StatementContext | undefined;
    declaration(): DeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ExpressionStatementContext extends ParserRuleContext {
    Semi(): TerminalNode;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class SelectionStatementContext extends ParserRuleContext {
    If(): TerminalNode | undefined;
    LeftParen(): TerminalNode;
    expression(): ExpressionContext;
    RightParen(): TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    Else(): TerminalNode | undefined;
    Switch(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class IterationStatementContext extends ParserRuleContext {
    While(): TerminalNode | undefined;
    LeftParen(): TerminalNode;
    expression(): ExpressionContext | undefined;
    RightParen(): TerminalNode;
    statement(): StatementContext;
    Do(): TerminalNode | undefined;
    Semi(): TerminalNode | undefined;
    For(): TerminalNode | undefined;
    forCondition(): ForConditionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ForConditionContext extends ParserRuleContext {
    Semi(): TerminalNode[];
    Semi(i: number): TerminalNode;
    forDeclaration(): ForDeclarationContext | undefined;
    forExpression(): ForExpressionContext[];
    forExpression(i: number): ForExpressionContext;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ForDeclarationContext extends ParserRuleContext {
    declarationSpecifiers(): DeclarationSpecifiersContext;
    initDeclaratorList(): InitDeclaratorListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ForExpressionContext extends ParserRuleContext {
    assignmentExpression(): AssignmentExpressionContext[];
    assignmentExpression(i: number): AssignmentExpressionContext;
    Comma(): TerminalNode[];
    Comma(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class JumpStatementContext extends ParserRuleContext {
    Semi(): TerminalNode;
    Return(): TerminalNode | undefined;
    Continue(): TerminalNode | undefined;
    Break(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class CompilationUnitContext extends ParserRuleContext {
    EOF(): TerminalNode;
    externalDeclaration(): ExternalDeclarationContext[];
    externalDeclaration(i: number): ExternalDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class ExternalDeclarationContext extends ParserRuleContext {
    functionDefinition(): FunctionDefinitionContext | undefined;
    declaration(): DeclarationContext | undefined;
    Semi(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class FunctionDefinitionContext extends ParserRuleContext {
    declarator(): DeclaratorContext;
    compoundStatement(): CompoundStatementContext;
    declarationSpecifiers(): DeclarationSpecifiersContext | undefined;
    declarationList(): DeclarationListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
export declare class DeclarationListContext extends ParserRuleContext {
    declaration(): DeclarationContext[];
    declaration(i: number): DeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
}
