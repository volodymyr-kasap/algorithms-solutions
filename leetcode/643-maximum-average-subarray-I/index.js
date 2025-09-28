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

module.exports = { findMaxAverage: badSolution };