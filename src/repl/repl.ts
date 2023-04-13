
import parse_and_compile from "../compiler/compiler"
import { eval_instr, init_vm } from "../evaluator/evaluator"
import * as readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function usage() {
    console.log("CLite interpreter 0.0.1")
    console.log("Double tap enter to evaluate what has been typed since last evaluation")
}

const start = async () => {
    usage()
    let code = ""
    init_vm(console.log)

    while (true) {
        const line : string = await new Promise(resolve => {
            rl.question("> ", resolve)
        })

        if (line.length === 0) {
            if (!code) continue;
            console.log(eval_instr(parse_and_compile(code)))
            code = ""
            continue
        }
        code += line + '\n'
    }
}

start()