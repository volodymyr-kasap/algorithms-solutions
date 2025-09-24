// brute-force solutions
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = null;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (sum === null) sum = nums[j];
        else sum *= nums[j];
      }
    }
    output[i] = sum;
  }

  return output;
};

module.exports = { productExceptSelf };
