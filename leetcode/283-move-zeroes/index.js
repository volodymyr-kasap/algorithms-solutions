// brute-force solutions
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var bruteForceSolution = function(nums) {
  let zeroValues = [];
  let notZeroValues = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroValues.push(nums[i]);
    else notZeroValues.push(nums[i]);
  }
  nums.length = 0;
  nums.push(...notZeroValues, ...zeroValues);
};

/**
 *
 * 👉 Instead of separating into two arrays and rebuilding, think about how you’d shift non-zero numbers forward while scanning once.
    Ask yourself: Where should the next non-zero go?
    Can you keep track of that position as you walk through the array?
    What happens to the leftover spots after all non-zeros are placed?
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0)  {
      nums[pos] = nums[i];
      pos++;
    }
  }
  
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};

  
var moveZeroesTwoPointer = function(nums) {
  const swap = (currIndex, lastZeroIndex) => {
    const currValue = nums[currIndex];
    nums[lastZeroIndex] = currValue;
    nums[currIndex] = 0;
  };

  let pos = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0)  {
      if (i !== pos) swap(i, pos);
      pos++;
    }
    i++;
  }
};


module.exports = { moveZeroes: moveZeroesTwoPointer };