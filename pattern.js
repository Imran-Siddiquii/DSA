const prompt = require('prompt-sync')();

const n = prompt('enter a number');

// Q1.
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
  }
  console.log();
}

console.log('-------------------------');
// Q2.
// *****
// ****
// ***
// **
// *

//  n= 3
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
  }
  console.log();
}

// Q3.
// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j} `);
  }
  console.log();
}

// Q4
// A
// A B
// A B C
// A B C D
// A B C D E

for (let i = 1; i <= n; i++) {
  let ascii = 65; // 65 is code of A
  for (let j = 1; j <= i; j++) {
    // string.fromCharCode method convert code to character
    process.stdout.write(String.fromCharCode(ascii) + ' ');
    ascii++;
  }
  console.log();
}

// Q5
//     *
//    **
//   ***
//  ****
// *****

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write('  ');
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
  }
  console.log('');
}

// Q6
//     *
//    ***
//   *****
//  *******
// *********

// method has a problem
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i + j >= 6 && Math.abs(i - j) <= 4) {
      process.stdout.write('* ');
    } else {
      process.stdout.write('  ');
    }
  }
  console.log();
}

// fine method 
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i + j >= Number(n) + 1 && Math.abs(i - j) <= Number(n) - 1) {
      process.stdout.write('* ');
    } else {
      process.stdout.write('  ');
    }
  }
  console.log();
}
