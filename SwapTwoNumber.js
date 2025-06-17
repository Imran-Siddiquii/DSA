// Q1. Swap two numbers with different method

// 1. Method, with extra variable

let a = 13;
let b = 15;

let c;

c = a; // c=13

a = b; // a= 15

b = c; // b= 13

console.log('====================================');
console.log(a, b);
console.log('====================================');

// 2 . Method, without extra variable

let x = 63;
let y = 29;

x = x + y; // x = 92

y = x - y; // y = 63;

x = x - y; // x = 29;

console.log('====================================');
console.log(x, y);
console.log('====================================');

// 3, Method, Destructuring

let m = 48;
let n = 21;

[m, n] = [n, m];

console.log('====================================');
console.log(m, n);
console.log('====================================');
