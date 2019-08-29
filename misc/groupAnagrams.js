// const groupAnagrams = strs => { // O(n^3) solution
//   const result = [];
//   strs.forEach(str => {
//     // pass thru every string
//     let foundBucket = false;
//     for (let i = 0; i < result.length; i++) {
//       //look through all arrays of strings
//       if (areAnagrams(str, result[i][0])) {
//         result[i].push(str);
//         foundBucket = true;
//       }
//     }
//     if (!foundBucket) {
//       result.push([str]);
//     }
//   });
//   return result;
// };

const groupAnagrams = strs => {
  //O(n^2) solution. O(n) space
  // transform each str into a sorted version so that anagrams map to the same sorted version.
  const result = {};
  strs.forEach(str => {
    // pass thru every string
    const sortedStr = str
      .split('')
      .sort()
      .join('');
    if (result.hasOwnProperty(sortedStr)) {
      result[sortedStr].push(str);
    } else {
      result[sortedStr] = [str];
    }
  });
  return Object.values(result);
};

const areAnagrams = (a, b) => {
  // create an obj with counts. O(n)
  if (a.length !== b.length) {
    return false;
  }
  const bObj = {};
  b.split('').forEach(char => {
    if (bObj.hasOwnProperty(char)) {
      bObj[char]++;
    } else {
      bObj[char] = 1;
    }
  });
  for (let i = 0; i < a.length; i++) {
    if (bObj[a[i]]) {
      bObj[a[i]]--;
    }
  }

  return Object.values(bObj).reduce((acc, cur) => acc + cur) === 0
    ? true
    : false;
};

const tests = [
  {
    input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    expected: [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']]
  },
  {
    input: ['abc', 'ccc', 'bac', 'aab', 'cccc', 'eba', 'abcd'],
    expected: [['abcd'], ['abc', 'bac'], ['aab'], ['eba'], ['ccc'], ['cccc']]
  },
  {
    input: ['abcd', 'dbac', 'bacd', 'bacd', 'dcab', 'dacbd', 'abdc'],
    expected: [['abcd', 'dbac', 'bacd', 'bacd', 'dcab', 'abdc'], ['dacbd']]
  }
]; // false

tests.forEach(test => {
  console.log(
    'input:',
    test.input,
    'result:',
    groupAnagrams(test.input),
    'expected:',
    test.expected
  );
});

const a = 'hello';
console.log(
  a
    .split('')
    .sort()
    .join('')
);
