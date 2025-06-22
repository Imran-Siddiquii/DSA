// console.log('hello');

// Q1  Sum of N natural number

let n = Number(prompt('please input a valid number'));
if (isNaN(n)) {
  console.log('Invalid input');
} else {
  if (n > 0) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    console.log('Sum of N natural number', sum);
  } else {
    console.log('number should be positive and more than 0');
  }
}

// Q2.  Factorial of a number

if (isNaN(n)) {
  console.log('Invalid input');
} else {
  if (n > 0) {
    let fact = 1; // why we are defining the variable here, becuase if this does match with edgs case, and does not come to this line then there is no need to store variable in memory.
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log('Factorial of N natural number', fact);
  } else {
    console.log('number should be positive and more than 0');
  }
}

// Q3 factors of number

if (isNaN(n)) {
  console.log('Invalid input');
} else {
  if (n > 0) {
    // method 1
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        console.log('Factors of numbers', i);
      }
    }

    // method 2
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        console.log('Factors of numbers', i);
      }
    }
    console.log('Factors of numbers', n);
    // Method 2 explaination-->  every number can not be divide more than  its half value   ex-> 24/2 = 12 now 24 can not be devided with 13
    // that why we are runnig loop only half time, which is more efficient, because now loop will run only half time,
    // after loop we are printing input number because it will devide witht the same number

    // method 2 is more efficient
  } else {
    console.log('number should be positive and more than 0');
  }
}

// Q4 Prime number

// 1 is not prime number.
// A number is devide by 1 and itself are prime number such as --> 1 3 5 7 11 13 17 19 21 23 ...soon;

if (isNaN(n)) {
  console.log('Invalid input');
} else {
  if (n > 0) {
    let isPrime = true;
    if ((n > 2 && n % 2 === 0) || n === 1) {
      isPrime = false;
    } else {
      for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i === 0) {
          isPrime = false;
        }
      }
    }
    console.log(n, 'Number is prime?', isPrime);
  } else {
    console.log('number should be positive and more than 0');
  }
}

// while loop

// Q1 Reverse a number

// method 1; take as a string and do concatination
if (isNaN(n)) {
  console.log('Invalid input');
} else {
  if (n > 0) {
    let reverse = '';
    while (n > 0) {
      let rem = n % 10;
      n = Math.floor(n / 10);
      reverse = reverse + rem;
    }
    console.log(n, 'Reverse of a number. Method 1', reverse);
  } else {
    console.log('number should be positive and more than 0');
  }
}

// method second

if (isNaN(n)) {
  console.log('Invalid input');
} else {
  if (n > 0) {
    let reverse = 0;
    while (n > 0) {
      let rem = n % 10;
      reverse = reverse * 10 + rem;
      n = Math.floor(n / 10);
    }
    console.log(n, 'Reverse of a number. Method2', reverse);
  } else {
    console.log('number should be positive and more than 0');
  }
}
