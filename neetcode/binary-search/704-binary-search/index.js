/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
const bruteForceSolution = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
};

/*
 * Time complexity: O(log n)
 * Space complexity: O(log n)
 */
const binarySearchRecursiveFind = (arr, target, start, end) => {
  if (start > end) return -1;
  
  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) return middle;

  if (arr[middle] > target) return binarySearchRecursiveFind(arr, target, start, middle - 1);

  if (arr[middle] < target) return binarySearchRecursiveFind(arr, target, middle + 1, end);

  return -1;
};

const binarySearchRecursive = (nums, target) => {
  return binarySearchRecursiveFind(nums, target, 0, nums.length);
};

const binarySearchIterative = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else return middle;
  }

  return -1;
};

const binarySearch = binarySearchIterative;

module.exports = { binarySearch };
