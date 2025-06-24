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
