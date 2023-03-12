
type primitives = {typename: "int" | "char" | "void", size: number}
type arr        = {typename: "arr", ty: ty, n_elems: number | undefined}
type struct     = {typename: "struct", structname: string, fields: ty[], fieldnames: string[]}
type namedT     = {typename: "typedef", src: string, dst: string}

type ty = primitives | struct | arr | namedT

function get_type_name (ty: ty) : string {
    return  ty.typename === "int" ? ty.typename :
            ty.typename === "char" ? ty.typename :
            ty.typename === "void" ? ty.typename :
            ty.typename === "arr" ?  ty.typename + "_" + get_type_name(ty.ty) :
            ty.typename === "struct" ? ty.typename + "_" + ty.structname : 
            ty.typename === "typedef" ? ty.dst : "should not happen"
}

const int  : primitives = {typename: "int",  size: 8}
const char : primitives = {typename: "char", size: 1}

/*
typedef struct Books {
   char title[50];
   char author[];
   char subject[100];
   int book_id;
} Book;
*/

let struct_Books : struct = {
    typename: "struct",
    structname: "Books",
    fields: [
        {typename: "arr", ty: char, n_elems: 50},
        {typename: "arr", ty: char, n_elems: undefined},
        {typename: "arr", ty: char, n_elems: 100},
        int
    ],
    fieldnames: [
        "title",
        "author",
        "subject",
        "book_id"
    ]
}
let typedef_Book : namedT = {
    typename: "typedef",
    src: get_type_name(struct_Books),
    dst: "Book"
}


let types : Record<string, ty> = {
    int: {typename:"int", size:8},
    char: {typename:"char", size: 1},
}

function insert_type(ty : ty) {
    const typename = get_type_name(ty)
    if (typename !== undefined) types[typename] = ty
    else throw Error ("invalid type")
}

function get_ty_size(ty : ty) : number {
    if ("size" in ty) return ty.size
    if (ty.typename === "arr") {
        if (ty.n_elems === undefined) return 8;
        else return get_ty_size(ty.ty) * ty.n_elems
    }
    if (ty.typename === "struct") {
        return ty.fields.map(get_ty_size).reduce((a,b)=>a+b, 0)
    }
    if (ty.typename === "typedef") {
        return get_ty_size(types[ty.src])
    }
    throw Error("did not find type")
}

insert_type(struct_Books)
insert_type(typedef_Book)
console.log(get_ty_size(typedef_Book))