// merging

const merging = (arr, first, mid, last) => {
  // time complexity 0(n)  space complexity = 0(n)
  const temp = new Array(last - first + 1);
  let i = first,
    j = mid + 1,
    k = 0;
  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else temp[k++] = arr[j++];
  }
  while (i <= mid) temp[k++] = arr[i++];
  while (j <= last) temp[k++] = arr[j++];

  // return temp;
  let p = 0,
    q = first;
  while (p < temp.length) {
    arr[q++] = temp[p++];
  }
  //   return arr;
};

const devide = (arr, first, last) => {
  // time complexity--> log(n)
  if (first >= last) return;
  let mid = Math.floor((first + last) / 2);
  devide(arr, first, mid);
  devide(arr, mid + 1, last);
  merging(arr, first, mid, last);
};

console.log('====================================');
const arr = [1, 5, 3, 2, 9, 8, 7, 4, 10, 6];
devide(arr, 0, arr.length - 1);
// console.log(merging(arr, 0, Math.floor(arr.length / 2), arr.length - 1));
console.log(arr, '====================================');

// total time complexity -> n*log(n)
