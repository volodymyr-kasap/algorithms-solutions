/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hashTable = {}

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  }

  return Object.entries(hashTable)
    .sort(([key1, v1], [key2, v2]) => v2 - v1)
    .slice(0, k)
    .map(([key, v]) => Number(key));
};
