/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsackRecursively(items, weightAvailable) {
  let maxValue = -Infinity;
  const recurse = (knapsack, weightLeft, total, i) => {
    if (i === items.length) {
      // why does this have to be items.length and not - 1
      if (total > maxValue) {
        maxValue = total;
        bestKnapsack = knapsack;
        return;
      } else {
        return;
      }
    }
    if (weightLeft - items[i].weight >= 0) {
      recurse(
        knapsack.concat(items[i]),
        weightLeft - items[i].weight,
        total + items[i].value,
        i + 1
      );
    }
    recurse(knapsack, weightLeft, total, i + 1);
  };
  recurse([], weightAvailable, 0, 0);
  return maxValue;
}

const solveKnapsackWithDP = (items, weightAvailable) => {
  const dpTable = {};
  for (let i = 0; i <= weightAvailable; i++) {
    dpTable[`${0},${i}`] = 0;
  }
  for (let i = 0; i <= items.length; i++) {
    dpTable[`${i},${0}`] = 0;
  }
  for (let i = 1; i <= items.length; i++) {
    const itemIndex = i - 1;
    for (let curWeight = 1; curWeight <= weightAvailable; curWeight++) {
      const weightLeft = curWeight - items[itemIndex].weight;
      const maxValIfWeUsedThisItem =
        items[itemIndex].value + dpTable[`${i - 1},${weightLeft}`];
      const maxValIfWeDidntUseThisItem = dpTable[`${i - 1},${curWeight}`];
      if (
        weightLeft >= 0 &&
        maxValIfWeUsedThisItem > maxValIfWeDidntUseThisItem
      ) {
        dpTable[`${i},${curWeight}`] = maxValIfWeUsedThisItem;
      } else {
        dpTable[`${i},${curWeight}`] = maxValIfWeDidntUseThisItem;
      }
    }
  }
  return dpTable[`${items.length},${weightAvailable}`];
};

const items = [
  { weight: 1, value: 2 },
  { weight: 2, value: 4 },
  { weight: 3, value: 5 },
  { weight: 2, value: 9 }
];
console.log(solveKnapsackWithDP(items, 4), 'expect 13'); // returns 19

const bigKnapsack = [];

for (let i = 0; i < 100000; i++) {
  const weight = 1;
  const value = 1;
  bigKnapsack.push({ weight, value });
}
// console.log(bigKnapsack);
console.log(solveKnapsackWithDP(bigKnapsack, 100), 'expect 100');
//* too slow even for 100 items in knapsack. result should be 100 bc val of all items is 1.
module.exports = solveKnapsackWithDP;
