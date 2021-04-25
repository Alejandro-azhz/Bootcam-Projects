// Let's interchange the values of a and b
// a should be 12 and b should be 6

let a = 6;
let b = 12;
let c = a;

a = b;
b = a;

a = b;
b = c;

console.log(a, b);