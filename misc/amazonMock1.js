var twoSum = function(nums, target) {
  const cache = {};
  nums.forEach((num, i) => {
    if (cache[target - num]) {
      cache[target - num].push(i);
    } else {
      cache[target - num] = [i];
    }
  });
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) {
      for (let j = 0; j < cache[nums[i]].length; j++) {
        if (i !== cache[nums[i]][j]) {
          return [i, cache[nums[i]][j]];
        }
      }
    }
  }
};

console.log(twoSum([2, 5, 5, 11], 10));
