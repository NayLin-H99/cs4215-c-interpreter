# C-Lite Interpreter

An interpreter for a sub-language based on C11 standard.

https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1548.pdf

# Requirements

- node: known working version: 16.19.1

# Usage

```
git clone https://github.com/NayLin-H99/cs4215-c-interpreter.git
cd cs4215-c-interpreter
yarn
yarn run build
```

## As a package

To use this project as a package

```
cd dist
yarn link
```

Then in your other project repository, you can use the following sample code

```
cd test_project/
yarn link clite
```

```javascript
import {interpretClite} from 'clite'

interpretClite(`
    int a = 5;
    print (a);
`, console.log)
```

## As a shell repl

```
node dist/src/repl/repl.js
```

# Documentation

![image](https://i.redd.it/d33cnuj3zku91.jpg)

# Testing

We used jest for testing. To run the test suite, do

```
yarn test
```
