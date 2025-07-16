// Q1 return sum of 1 to n in recusrion method
let sum = 0;
function temp(n) {
  if (n == 0) return;
  sum += n;
  temp(n - 1);
  return sum;
}

console.log(temp(7));

// second method

function sumNumber(n) {
  if (n == 1) return n;
  return n + sumNumber(n - 1);
}
console.log('🚀 ~ sumNumber ~ ', sumNumber(5));

// factorial

function fact(n) {
  if (n == 1) return n;
  return n * fact(n - 1);
}
console.log('🚀 ~ fact ~ ', fact(5));

// fibonacci series

let first = 0,
  second = 1;
n = 15;
process.stdout.write(first + ' ' + second + ' ');
for (let i = 1; i <= n - 2; i++) {
  let third = first + second;
  first = second;
  second = third;
  process.stdout.write(third + ' ');
}

// recursion method

console.log('----------------------------------');

function fibo(r, f, s) {
  if (r == 2) return;

  third = f + s;
  process.stdout.write(third + ' ');

  fibo(r - 1, s, third);
}
let f = 0,
  s = 1,
  r = 15;

process.stdout.write(f + ' ' + s + ' ');
fibo(r, f, s);

console.log('----------------------------------');

function fiboNTerm(k) {
  if (k == 0 || k == 1) return k;

  return fiboNTerm(k - 1) + fiboNTerm(k - 2);
}

console.log(fiboNTerm(7));

// Highest common factor

let p = 100;
q = 20;

while (p != q) {
  if (p > q) {
    p = p - q;
  } else {
    q = q - p;
  }
}
console.log('====================================');
console.log(p, q);
console.log('====================================');

// recursion method

function HCD(x, y) {
  console.log('🚀 ~ HCD ~ x:', x, y);
  if (x == y) return x;
  if (x > y) {
    x = x - y;
  } else {
    y = y - x;
  }
  return HCD(x, y);
}

console.log('====================================');
console.log(HCD(125, 20));
console.log('====================================');

// efficient method
function HCD1(w, z) {
  if (z == 0) return w;
  return HCD1(z, w % z); // w=30 z= 50%30 = 20,   w=20, z = 30%20=10, w=10, z=20%10=0 == answer w=10
}

let w = 125,
  z = 20;
console.log('1====================================');
console.log(HCD1(w, z));
console.log('====================================');

//  time complexity  log(max(w,z))
