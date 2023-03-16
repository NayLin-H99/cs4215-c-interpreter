
// preprocess the instructions 

// if operand of & is a result of *, then do nothing as if they cancel each other out
// specification c11 6.5.3.2.3
// https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1548.pdf
const clean_addr_of_deref = (instrs:any[]) => {
    for (let i=0; i<instrs.length - 1; i++) {
        const i1 = instrs[i];
        const i2 = instrs[i+1];
        if (i1.tag === "DEREF" && i2.tag === "ADDR") {
            instrs[i].tag = "NOP"
            instrs[i+1].tag = "NOP"
        }
    }
    return instrs.filter(x => x.tag != "NOP");
}




let instrs : any = [
    {tag: "DEREF"},
    {tag: "ADDR"},
    {tag: "ADDR"},
    {tag: "DEREF"},
]


console.log(clean_addr_of_deref(instrs))


