//* use binary search to find the index of the closest value in an arr to an input value
//* use this function to allow for efficient inserts into an array that keep it sorted.
const findIndexOfClosestVal = (x, arr) => {
  let l = 0;
  let r = arr.length - 1;
  let m = l + Math.floor((r - l) / 2);
  while (l !== m && r !== m) {
    if (Math.abs(x - arr[l]) < Math.abs(x - arr[r])) {
      //* it's closer to the left val than the right
      r = m;
      m = l + Math.floor((r - l) / 2);
    } else {
      l = m;
      m = l + Math.floor((r - l) / 2);
    }
  }
  return m === r ? l : r;
};

const insertSorted = (val, arr) => {
  if (arr.length === 0) {
    arr.push(val);
  } else if (val <= arr[0]) {
    arr.unshift(val);
  } else if (val >= arr[arr.length - 1]) {
    arr.push(val);
  } else {
    const closestIndex = findIndexOfClosestVal(val, arr);
    if (val <= arr[closestIndex]) {
      arr.splice(closestIndex, 0, val);
    } else {
      arr.splice(closestIndex + 1, 0, val);
    }
  }
};
const test = [];
insertSorted(13, test);
console.log(test);
insertSorted(1, test);
console.log(test);
insertSorted(2, test);
console.log(test);
insertSorted(10, test);
console.log(test);
insertSorted(5, test);
console.log(test);
insertSorted(18, test);
console.log(test);
insertSorted(-2, test);
console.log(test);
insertSorted(-1, test);
console.log(test);

// const t = [1, 2, 3, 10, 13];
// insertSorted(5, t);
// console.log(t);

// const t2 = [1, 2, 10, 13];
// console.log(findIndexOfClosestVal(5, t2), 'expect 1');
