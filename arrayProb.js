// Q1  [0,1,1,0,1,0,0];  output --> [0,0,0,0,1,1,1];

let array = [0, 1, 1, 0, 1, 0, 0];
let i = 0;
let j = 0;

while (i < array.length) {
  if (array[i] == 0) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j++;
  }
  i++;
}
console.log('====================================');
console.log(array);
console.log('====================================');

// Q2  move 1 element from right to left in array

let mArr = [1, 2, 3, 4, 5, 6, 7, 8];

let zeroIndex = mArr[0];

for (let i = 0; i < mArr.length - 1; i++) {
  mArr[i] = mArr[i + 1];
}
mArr[mArr.length - 1] = zeroIndex;

console.log('====================================');
console.log(mArr);
console.log('====================================');

// Q3  move 1 element from left  to righ in array

// let moveArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let lastIndex = moveArr[moveArr.length - 1];

// for (let k = 0; k < moveArr.length - 2; k++) {
//   console.log('🚀 ~ moveArr[k]:', moveArr[k], moveArr[k + 1]);
//   moveArr[k + 1] = moveArr[k];
// }

// moveArr[moveArr.length - 1] = lastIndex;

// console.log('====================================');
// console.log(moveArr);
// console.log('====================================');

let moveArr = [1, 2, 3, 4, 5, 6, 7, 8];
let lastIndex1 = moveArr[moveArr.length - 1];

for (let k = moveArr.length - 2; k >= 0; k--) {
  moveArr[k + 1] = moveArr[k];
}

moveArr[0] = lastIndex1;

console.log('====================================');
console.log(moveArr); // Output: [8, 1, 2, 3, 4, 5, 6, 7]
console.log('====================================');
console.log('----------------------------------------------------');

// Q  Move left and right by k element

// move left
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
let last = arr[0];
for (let i = 0; i < k; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = last;
  last = arr[0];
}

console.log('====================================');
console.log(arr, 'left move array');
console.log('====================================');

// move right
console.log('----------------------------------------------------');
let arrRight = [1, 2, 3, 4, 5, 6, 7];
let m = 3;
let firstEle = arrRight[arrRight.length - 1];
for (let i = 0; i < m; i++) {
  for (let j = arrRight.length - 1; j >= 0; j--) {
    arrRight[j] = arrRight[j - 1];
  }
  arrRight[0] = firstEle;
  firstEle = arrRight[arrRight.length - 1];
}

console.log('====================================');
console.log(arrRight, 'right move array');
console.log('====================================');
