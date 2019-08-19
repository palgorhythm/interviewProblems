// acdapmpomp 15 aca and pmpmp
// axbawbaseksqke 25 ababa ekske

//find the maximum product of two non-overlapping palindromic subsequences

const getNonOverlappingPairs = s => {
  const pairs = [];
  for (let i = 0; i < s.length - 1; i++) {
    pairs.push([`${0},${i}`, `${i + 1},${s.length - 1}`]);
  }
  return pairs;
};
function getScore(s) {
  const DPtable = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; i + j < s.length; j++) {
      const [x, y] = [j, i + j];
      const coord = `${x},${y}`;
      const leftCoord = `${x},${y - 1}`;
      const downCoord = `${x + 1},${y}`;
      const leftDownCoord = `${x + 1},${y - 1}`;
      let leftDownVal = DPtable.hasOwnProperty(leftDownCoord)
        ? DPtable[leftDownCoord]
        : 0;
      let leftVal = DPtable[leftCoord];
      let downVal = DPtable[downCoord];
      if (i === 0) {
        DPtable[coord] = 1;
      } else if (s[x] === s[y]) {
        DPtable[coord] = 2 + leftDownVal;
      } else {
        DPtable[coord] = Math.max(leftVal, downVal);
      }
    }
  }
  let maxVal = 1;
  getNonOverlappingPairs(s).forEach(pair => {
    const product = DPtable[pair[0]] * DPtable[pair[1]];
    if (product > maxVal) {
      maxVal = product;
    }
  });
  return maxVal;
}

// console.log(getScore('abccc')); // 3
// console.log(getScore('abaab')); // 4
// console.log(getScore('aieueh')); // 3
// console.log(getScore('attract')); // 4
// console.log(getScore('acdapmpomp')); // 15
// console.log(getScore('adaba')); // 3
// console.log(getScore('axbawbaseksqke')); // 25
// console.log(getScore('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb')); // 400

// const longInput =
//   'jdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutisjdheutjyiwlqkejgutis';

// console.log('input length', longInput.length, getScore(longInput)); // 400
