// Q1 return sum of 1 to n in recusrion method
let sum = 0;
function temp(n) {
  if (n == 0) return;
  sum += n;
  temp(n - 1);
  return sum;
}

console.log(temp(7));
