/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
      return [i, numMap[complement]];
    }
  }

  return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap[complement] !== undefined && numMap[complement] > -1) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return []
};
