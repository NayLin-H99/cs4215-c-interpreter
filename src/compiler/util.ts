
// align x to n bytes
export default function align(x:number, n:number) {
    return (x + n - 1) & ~(n - 1);
}