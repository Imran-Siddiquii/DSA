const prompt = require('prompt-sync')();

const n = Number(prompt('enter a number'));

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

// Q7

//  *       *
//    *   *
//      *
//   *     *
// *         *

//  work only for odd number
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || j + i == n + 1) {
      process.stdout.write('* ');
    } else {
      process.stdout.write('  ');
    }
  }
  console.log('');
}

// Q8
//  *       *
//    *   *
//      *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (i == j || i + j == n * 2) {
      process.stdout.write('* ');
    } else {
      process.stdout.write('  ');
    }
  }
  console.log('');
}

//  Q9
//    *
//  *   *
//*       *
//  *   *
//    *
//

console.log('---------------------------------');

for (let i = 1; i <= n * 2 - 1; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (
      i + j == n + 1 ||
      i - j == n - 1 ||
      i + j == n * 3 - 1 ||
      (i + j > n && Math.abs(i - j) == n - 1)
    ) {
      process.stdout.write('* ');
    } else {
      process.stdout.write('  ');
    }
  }

  console.log('');
}

// not completed
for (let i = 1; i <= n * 2 - 1; i++) {
  for (let j = 1; j <= n * 2 - 1; j++) {
    if (
      (i + j >= n + 1 && i + j > n && Math.abs(i - j) <= n - 1) ||
      (i - j == n - 1 && i + j >= n * 3 - 1)
    ) {
      process.stdout.write('* ');
    } else {
      process.stdout.write('  ');
    }
  }

  console.log('');
}
