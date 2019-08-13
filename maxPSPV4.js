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

const longestPalindromicSubstringLength = s => {
  const cache = {};
  const recurse = (i = 0, j = s.length - 1) => {
    // cleanest depth first search
    const iStr = `${i}${j}`;
    if (cache.hasOwnProperty(iStr)) {
      console.log(i, j);
      return cache[iStr];
    }
    if (i === j) {
      cache[iStr] = 1;
      return 1;
    }
    if (j - i === 1) {
      if (s[j] === s[i]) {
        cache[iStr] = 2;
        return 2;
      } else {
        cache[iStr] = 1;
        return 1;
      }
    }

    if (s[i] === s[j]) {
      return recurse(i + 1, j - 1) + 2;
    } else {
      return Math.max(recurse(i, j - 1), recurse(i + 1, j));
    }
  };
  return recurse();
};

// console.log(longestPalindromicSubstringLength('abccc'));
// console.log(longestPalindromicSubstringLength('aieueh'));
console.log(
  longestPalindromicSubstringLength('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb')
); // 400

function getScore(s) {
  // 2^(n+1) - 1 steps where n is s.length
  let count = 0;
  let maxProd = 1;
  for (let i = 1; i < s.length; i++) {
    const firstSubstring = s.substring(0, i);
    const secondSubstring = s.substring(i);
    if (firstSubstring.length * secondSubstring.length <= maxProd) {
      continue;
    }
    const result =
      longestPalindromicSubstring(firstSubstring).length *
      longestPalindromicSubstring(secondSubstring).length;
    if (result > maxProd) {
      maxProd = result;
    }
  }
  return maxProd;
}

// console.log(getScore('attract')); // 4
// console.log(getScore('acdapmpomp')); // 15
// console.log(getScore('adaba')); // 3
// console.log(getScore('axbawbaseksqke')); // 25
// console.log(getScore('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb')); // 400
