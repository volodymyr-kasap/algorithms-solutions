/**
 * @param {number[]} nums
 * @return {number}
 */
const bitwiseSolutions = function(nums) {
    let res = 0;
    for (const num of nums) {
      res = num ^ res;
    }
    return res;
};


const bruteForceSolutions = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let flag = true;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return nums[i];
  }
}

const setSolutions = function(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) set.delete(nums[i]);
    else set.add(nums[i]);
  }

  return [...set][0];
}

const singleNumber = bitwiseSolutions;

module.exports = { singleNumber };