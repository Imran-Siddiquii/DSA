const findPivot = (arr, first, last) => {
  // O(n)
  let pInd = first,
    i = pInd + 1,
    j = last;

  while (i <= j) {
    while (i <= last && arr[pInd] >= arr[i]) i++;
    while (j >= first && arr[pInd] < arr[j]) j--;

    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, j, pInd);
  return j;
};

const swap = (arr, i, j) => {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const quickSort = (arr, first, last) => {
  if (first >= last) return;
  //log(n)

  let pivotIndex = findPivot(arr, first, last);
  quickSort(arr, first, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, last);
};

const arr = [4, 3, 5, 1, 8, 12, 7, 6, 10];
quickSort(arr, 0, arr.length - 1);
console.log('==================================');
console.log(arr);
console.log('====================================');

// time complexity nlog(n)  , in best and average case,   n square in worst case,  if the array is sorted then , time complecity will be n square,
// space complexity  O(1), no extra space