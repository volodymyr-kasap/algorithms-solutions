const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < (nums.length - i - 1); j++) {
      const current = nums[j];
      const candidate = nums[j + 1];

      if (current > candidate) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  console.log(nums);

  return nums;
};

module.exports = { bubbleSort };