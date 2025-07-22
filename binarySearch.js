//  binary search

const arr = [1, 2, 3, 4, 5, 6, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88];

//  target element
let target = 88;
let first = 0;
last = arr.length;

while (first <= last) {
  let mid = Math.floor((first + last) / 2);

  if (arr[mid] === target) {
    return console.log('Target found at ' + mid + ' index');
  } else if (arr[mid] > target) {
    last = mid - 1;
  } else if (arr[mid] < target) {
    first = mid + 1;
  } else {
    return console.log('not found');
  }
}
