const longestConsecutive = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let maxLength = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};


module.exports = { longestConsecutive };