/**
 * @param {number[]} nums
 * @return {number}
 */
var bruteForceSolution = function(nums) {
  let max = 0;
  let counter = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      counter++;
      if (counter > max) max = counter;
    } else {
      counter = 0;
    }
    i++;
  }

  return max;
};

module.exports = { findMaxConsecutiveOnes: bruteForceSolution };