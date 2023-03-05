import antlr4 from 'antlr4';
import CLexer from '../parser/CLexer.js';
import CParser from '../parser/CParser.js';
import { ExpressionTagger } from './ExpressionTagger.js';
import fs from 'fs';

const input = fs.readFileSync('./test/test_files/expression.c', 'utf8');

const chars = new antlr4.InputStream(input);
const lexer = new CLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CParser(tokens);
parser.buildParseTrees = true;
const tree = parser.compilationUnit()
var tagger = new ExpressionTagger()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(tagger, tree)  // DFS
