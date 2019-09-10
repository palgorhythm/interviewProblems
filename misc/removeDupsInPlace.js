//* given an array of integers, remove duplicates.
//* in place: use splice.
const removeDuplicatesInPlace = arr => {
  const seen = new Set();
  let offsetBack = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      arr[i - offsetBack] = arr[i];
    } else {
      offsetBack++;
    }
  }
  arr.length -= offsetBack;
};

const x = [1, 1, 2, 3, 4, 5, 5, 3, 10, 12, 44, 10, 15, 5];
// console.log(x);
// removeDuplicatesInPlace(x);
// console.log('expect 1,2,3,4,5,10,12,44,15');
// console.log(x);
