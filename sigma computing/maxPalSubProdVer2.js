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

const longestPalindromicSubstring = s => {
  // BREADTH FIRST SEARCH
  let count = 0;
  let longest = '*';
  let done = false;
  const queue = [s];
  while (queue && !done) {
    count++;
    const cur = queue.shift();
    if (isPalindrome(cur)) {
      longest = cur;
      done = true;
    }
    if (cur.length === 1) done = true;
    for (let i = 0; i < cur.length; i++) {
      if (i === 0) {
        queue.push(cur.substring(1));
      } else {
        queue.push(cur.substring(0, i) + cur.substring(i + 1));
      }
    }
  }
  console.log(
    count,
    'iterations for string ',
    s,
    'longest sub pal is',
    longest
  );
  return longest;
};
// console.log(longestPalindromicSubstring('attract'));
console.log(
  longestPalindromicSubstring('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb')
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
