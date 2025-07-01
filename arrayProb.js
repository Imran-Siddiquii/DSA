// reverser a array

const reverseArray = [1, 2, 3, 4, 5, 6];

reverseArr(0, reverseArray.length - 1);
console.log('====================================');
console.log('reverse Array', reverseArray);
console.log('====================================');
function reverseArr(i, j) {
  while (i < j) {
    let temp = reverseArray[i]; // temp = reverseArray[0] = 1
    reverseArray[i] = reverseArray[j]; // reverseArray[0] = reverseArray[5] == 6
    reverseArray[j] = temp; // reserveArray[5] = 1
    i++; // 1
    j--; // 4
  }
}

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

// left move with new space , this method taking extra space in memory which in efficient

let ar = [1, 2, 3, 4, 5];
let temp = new Array(ar.length);

let r = 3;
for (let i = 0; i < ar.length; i++) {
  temp[i] = ar[(i + r) % ar.length];
}
console.log('🚀 ~ temp:', temp);

let ark = [1, 2, 3, 4, 5];
let tempk = new Array(ar.length);

let rk = 3;
for (let i = 0; i < ark.length; i++) {
  tempk[(i + rk) % ark.length] = ark[i];
}
console.log('🚀 ~ tempk:', tempk);

// new method block reverse method with two pointer very efficient

let aR = [1, 2, 3, 4, 5];
let q = 2; // move by 2 element
// left output = [3,4,5,1,2]
// right output = [4,5,1,2,3]

// left move

aRL(0, q - 1); // [2,1,3,4,5]
aRL(q, aR.length - 1); //[2,1,5,4,3];
aRL(0, aR.length - 1); //[3,4,5,1,2]
function aRL(i, j) {
  while (i < j) {
    temp = aR[i];
    aR[i] = aR[j];
    aR[j] = temp;
    i++;
    j--;
  }
}
console.log(aR, 'left move');

let aRP = [1, 2, 3, 4, 5];
let s = 2; // move by 2 element
// left output = [3,4,5,1,2]
// right output = [4,5,1,2,3]

// left move

aRR(0, aRP.length - 1); //[5,4,3,2,1]
aRR(0, s - 1); // [4,5,3,2,1]
aRR(s, aRP.length - 1); //[4,5,1,2,3];
function aRR(i, j) {
  while (i < j) {
    temp = aRP[i];
    aRP[i] = aRP[j];
    aRP[j] = temp;
    i++;
    j--;
  }
}
console.log(aRP, 'right move');
