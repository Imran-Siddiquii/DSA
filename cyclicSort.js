// when range given of array with unsorted array,  n= 8, so array length will be 8 with -> from 1 to 8 element will be in the array,

const arr = [4, 3, 5, 2, 1, 8, 7, 6];

// institution--> suppose we have sort the array = [1,2,3,4,5,6,7,8];
// now if we see each element index is array[element - 1] ==> array[4-1]= index = 3
// we will check that each element has its own index if not swap them to keep it right index
// will start loop from 0, if element are in correct index will increase i,
let i = 0;
while (i < arr.length) {
  let correctIndex = arr[i] - 1;
  if (arr[correctIndex] == arr[i]) {
    i++;
  } else {
    temp = arr[i];
    arr[i] = arr[correctIndex];
    arr[correctIndex] = temp;
  }
}
console.log('🚀 ~ arr:', arr);

var missingNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correctIdx = nums[i];
    if (nums[correctIdx] != nums[i] && nums[i] < nums.length) {
      temp = nums[correctIdx];
      nums[correctIdx] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }
  for (j = 0; j < nums.length; j++) {
    if (j != nums[j]) return j;
  }
  return nums.length;
};

let number = [1, 0, 2];
console.log('====================================');
console.log(missingNumber(number));
console.log('====================================');

//  missing number from array and return in array

//  [1-n]

function missing(array) {
  let i = 0;
  while (i < array.length) {
    let crtIdx = array[i] - 1;

    if (array[i] != array[crtIdx]) {
      temp = array[i];
      array[i] = array[crtIdx];
      array[crtIdx] = temp;
    } else {
      i++;
    }
  }
  let missingNumber = [];
  for (let j = 0; j < array.length; j++) {
    if (j + 1 != array[j] && !array[j]) {
      missingNumber.push(j + 1);
    } else if (j + 1 != array[j] && array[j]) {
      missingNumber.push(j + 1);
    }
  }
  return missingNumber;
}

const array = [2, 3, 5, 7, 9];
// const array = [1, 1];

console.log('====================================');
console.log(missing(array));
console.log('====================================');
