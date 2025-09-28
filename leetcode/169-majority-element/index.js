/**
 * @param {number[]} nums
 * @return {number}
 * Space complexity - O(n)
 * Time complexity - O(n)
 */
var majorityElementHashMap = function(nums) {
  const hashMap = {};
  const n = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) hashMap[nums[i]] = 1;
    else hashMap[nums[i]]++;
    
    if(hashMap[nums[i]] > n) return nums[i];
  }

  return null;
};

// Boyer–Moore Approach
var majorityElement = function(nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) candidate = nums[i];
    if (nums[i] === candidate) count++;
    else count--;
  }

  return candidate;
};


module.exports = { solution: majorityElement };