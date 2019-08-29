const findChange = (price, paid) => {
  if (price > paid) {
    return {};
  }
  const bills = [5000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let change = Math.round(paid * 100 - price * 100);
  console.log(change);
  const output = {};
  let i = 0;
  while (change > 0) {
    if (bills[i] <= change) {
      output[bills[i]] = output[bills[i]] ? output[bills[i]] + 1 : 1;
      change -= bills[i];
      if (bills[i] > change) {
        i++;
      }
    } else {
      i++;
    }
  }
  return output;
};

// const price = 12.5;
// const paid = 20;x

// console.log(findChange(price, paid)); // expect 1 five, 2 ones, and 2 quarters.

const price2 = 21.770000000045;
const paid2 = 22;

console.log(findChange(price2, paid2)); // expect 23 cents, which should be 2 dimes and 3 pennies
