// acdapmpomp 15 aca and pmpmp
// axbawbaseksqke 25 ababa ekske

//find the maximum product of two non-overlapping palindromic subsequences

const isPalindrome = str => {
  if (str === '') {
    return false;
  }
  const halfIndex = Math.floor(str.length / 2);
  for (let i = 0; i < halfIndex; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};
const rangesOverlap = (r1, r2) => {
  if (r1[1] >= r2[0] && r1[0] <= r2[0]) {
    return true;
  } else if (r1[0] <= r2[1] && r1[1] >= r2[1]) {
    return true;
  } else if (r1[0] <= r2[0] && r1[1] >= r2[1]) {
    return true;
  }
  return false;
};

const findMaxNonOverlappingStrLenProduct = sArray => {
  let maxProduct = 1;
  let str1;
  let str2;
  for (let i = 0; i < sArray.length; i++) {
    str1 = sArray[i];
    for (let j = 0; j < sArray.length; j++) {
      str2 = sArray[j];
      if (!rangesOverlap([str1[1], str1[2]], [str2[1], str2[2]])) {
        const score = str1[0].length * str2[0].length;
        if (score > maxProduct) {
          maxProduct = score;
        }
      }
    }
  }
  return maxProduct;
};

function getScore(s) {
  // 2^(n+1) - 1 steps where n is s.length
  const palindromicSubstrings = []; // each el is array with 3 elements, string, startindex, endindex
  let count = 0;
  const cache = new Set();
  const recurse = (str, toAdd, startIndex, curIndex) => {
    count++;
    // console.log(str + toAdd, startIndex, curIndex);
    const curData = `${str + toAdd}${startIndex}${curIndex}`;
    if (cache.has(curData)) {
      return;
    } else {
      cache.add(`${str + toAdd}${startIndex}${curIndex}`);
    }
    if (isPalindrome(str + toAdd) && toAdd !== '') {
      palindromicSubstrings.push([str + toAdd, startIndex, curIndex - 1]);
    }
    if (curIndex === s.length) {
      return;
    }
    let newStartIndex = startIndex;
    if (str + toAdd === '') {
      newStartIndex = curIndex;
    }
    recurse(str + toAdd, s[curIndex], newStartIndex, curIndex + 1); //use current
    recurse(str + toAdd, '', startIndex, curIndex + 1); //don't use current
  };
  recurse('', '', 0, 0);
  console.log(count, ' is the count');
  return findMaxNonOverlappingStrLenProduct(palindromicSubstrings);
}

// console.log(rangesOverlap([1, 2], [2, 3])); // true
// console.log(rangesOverlap([3, 4], [2, 3])); // true
// console.log(rangesOverlap([1, 4], [2, 3])); // true
// console.log(rangesOverlap([1, 1], [2, 3])); // false

// getScore('acdapmpomp');
console.log(getScore('attract')); // 4
// console.log(getScore('adaba'));
// console.log(getScore('axbawbaseksqke'));
// console.log(getScore('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb'));
