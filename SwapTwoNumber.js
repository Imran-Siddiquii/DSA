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

// unary operator,
// increment
let e = 10;
let f = e++;
console.log('====================================');
console.log(e);
console.log(f);
console.log('====================================');

// decrement
let g = 5;
let h = g--;

console.log('====================================');
console.log(h);
console.log(g);
console.log('====================================');

// Q1

let i = 12;
i = i++ + ++i; // 12 + 14
console.log('====================================');
console.log(i); // 26
console.log('====================================');

// Q2

let o = 11;
let p = 12;
let q = o + p + o++ + p++ + ++o + ++p; // 11 + 12 +11 +12 + 13+ 14 = 73

console.log('====================================');
console.log('o=', o); //13
console.log('p=', p); //14
console.log('q=', q); //73

console.log('====================================');

// Q3

let r = true;
r++;
console.log('====================================');
console.log(r++); // 2 , because js engine will consider true as 1 ans false as 0 as soon as we use operation on that
console.log('====================================');

// Q4.
//  can not use unery operator directly to a constant number, will give you error

// let s =10++;
console.log('====================================');
// console.log(s);  // Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
console.log('====================================');

// Q5

// let t = 10;
console.log('====================================');
// console.log(++(++t));   // engine will solve inside the bracket value then ++10 will give the same error becuase that is constant. Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
console.log('====================================');

// Arthimetic operator,

// Q1
//  Generate 4 number OPT

console.log('====================================');
console.log(Math.trunc(Math.random() * 9000 + 1000)); // randon will  bring  value b/t 0 to 1, multiplying with 9000, so the value will be from 1000 to 9000, but it can bring 999 also, that why we are adding 1000, now value always will be b/w 1000 to 10000 , 1001 to 9999
console.log('====================================');
