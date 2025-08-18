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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentBucket = function(nums, k) {
  const hashTable = {}
  // Create an array of buckets where index = frequency of elements (0 index is unused)
  const bucket = Array.from({ length: nums.length + 1 }, () => []);

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = (hashTable[nums[i]] || 0) + 1;
  }

  for (const n in hashTable) {
    bucket[hashTable[n]].push(+n);
  }

  const res = [];
  for (let i = bucket.length - 1; i > 0; i--) {
    for (const n of bucket[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
};

module.exports = {
  topKFrequent: topKFrequentBucket,
}
