// bubble sort

let arr = [1, 4, 65, 12, 33, 10, 55];
let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log('Bubble Sort ~ arr:', arr);

// selection sort

for (let i = 0; i < n - 1; i++) {
  let minValue = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minValue] > arr[j]) {
      minValue = j;
    }
  }
  if (minValue != i) {
    temp = arr[minValue];
    arr[minValue] = arr[i];
    arr[i] = temp;
  }
}

console.log('Selection Sort ~ arr:', arr);
