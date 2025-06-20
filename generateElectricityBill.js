let units = prompt('Please enter the Units');

if (isNaN(units)) {
  console.log('please enter the valid units');
}

// convert string to number,

units = Number(units);

let totalBill = 0;
let remainingUnits = units;
// while loop will execute the code until remainingUnits become 0, and will calculate and  store totalBill amount
while (remainingUnits > 0) {
  if (remainingUnits > 400) {
    totalBill += (remainingUnits - 400) * 13;
    remainingUnits = 400;
  } else if (remainingUnits > 200 && remainingUnits <= 400) {
    totalBill += (remainingUnits - 200) * 9;
    remainingUnits = 200;
  } else if (remainingUnits > 100 && remainingUnits <= 200) {
    totalBill += (remainingUnits - 100) * 6;
    remainingUnits = 100;
  } else if (remainingUnits > 0 && remainingUnits <= 100) {
    totalBill += remainingUnits * 4.4;
    remainingUnits = 0;
  }
}

console.log('Total Units', units, 'Total bill amount', totalBill);
