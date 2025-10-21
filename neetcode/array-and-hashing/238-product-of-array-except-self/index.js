const bruteForceSolution = function(nums) {
  if (nums.length === 1) return [1];

  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = null;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      if (nums[j] === 0) {
        sum = 0;
        break;
      } else {
        if (sum === null) sum = nums[j];
        else sum *= nums[j];
      }
    }
    output[i] = sum;
  }

  return output;
};

const prefixSumSolution = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = i === 0 ? 1 : result[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightProduct = i === nums.length - 1 ? 1 : rightProduct * nums[i + 1];
    result[i] = result[i] * rightProduct;
  }

  return result;
};

module.exports = { productExceptSelf: prefixSumSolution };
