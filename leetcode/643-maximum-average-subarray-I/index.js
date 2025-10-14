/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time complexity = O(n * k)
 * Space complexity = O(n)
 */
var badSolution = function(nums, k) {
  const getAvg = (array) => {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
  };

  let avg = -Infinity;
  let currentAvg = 0;

  for (let i = 0; i <= nums.length - k; i++) {
    currentAvg = getAvg(nums.slice(i, i + k));
    if (currentAvg > avg) avg = currentAvg;
  }

  return avg;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time complexity = O(n)
 * Space complexity = O(1)
 */
const solution = function(nums, k) {
  const getSum = (array, firsIndex, count) => {
    let sum = 0;
    for (let i = firsIndex; i < firsIndex + count; i++) {
      sum += array[i];
    }
    return sum;
  };

  let best = getSum(nums, 0, k);
  let currentSum = best;

  for (let i = 1; i <= nums.length - k; i++) {
    currentSum = currentSum + nums[i - 1 + k] - nums[i - 1];
    if (currentSum > best) best = currentSum;
  }

  return best / k;
};

module.exports = { findMaxAverage: solution };