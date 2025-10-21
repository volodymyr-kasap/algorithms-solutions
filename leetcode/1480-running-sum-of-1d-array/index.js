/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const n = nums.length;
  const arr = Array(n).fill(0);
  arr[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    arr[i] = arr[i - 1] + nums[i];
  }

  return arr;
};

module.exports = { runningSum };

