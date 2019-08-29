// const solution = n => {
//   let numChoices = 0;
//   const choices = [1, 2, 3];
//   const cache = {};
//   const recurse = n => {
//     cache[n] = numChoices;
//     if (n === 0) {
//       numChoices++;
//     } else if (n < 0) {
//       return;
//     } else {
//       choices.forEach(choice => {
//         recurse(n - choice);
//       });
//     }
//   };
//   recurse(n);
//   return numChoices;
// };

const solution = n => {
  const dpTable = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dpTable.push(dpTable[i - 1] + dpTable[i - 2] + dpTable[i - 3]);
  }
  return dpTable[n];
};

console.log(solution(10));
