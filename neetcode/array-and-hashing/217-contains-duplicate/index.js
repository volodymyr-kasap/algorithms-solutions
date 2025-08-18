/**
 * The task can be solved using brute force
 * - Time complexity O(n2)
 * - Space complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

/**
 * A further optimization would be to use sorting before brute force.
 * nums.sort((a, b) => a - b);
 * - Time complexity: O(n log n)
 * - Space complexity: O(1) or O(n)depending on the sorting algorithm.
 * The best solution would be to use a Hash Set.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */
const containsDuplicate = function(nums) {
  const hashTable = {};
  for (const n of nums) {
    if (hashTable[n]) return true;
    hashTable[n] = 1;
  }

  return false;
};
