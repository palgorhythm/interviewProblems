// const maxArea = heights => {
//   let maxA = 0;
//   for (let i = 0; i < heights.length; i++) {
//     for (let j = i; j < heights.length; j++) {
//       const curArea = (j - i) * Math.min(heights[j], heights[i]);
//       if (curArea > maxA) {
//         maxA = curArea;
//       }
//     }
//   }
//   return maxA;
// };

const maxArea = heights => {
  let i = 0;
  let j = heights.length - 1;
  let water = 0;
  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(heights[i], heights[j]));
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }
  return water;
};

const tests = [
  { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  { input: [1, 2, 4, 3], expected: 4 }
]; // false

tests.forEach(test => {
  console.log(
    'input:',
    test.input,
    'result:',
    maxArea(test.input),
    'expected:',
    test.expected
  );
});
