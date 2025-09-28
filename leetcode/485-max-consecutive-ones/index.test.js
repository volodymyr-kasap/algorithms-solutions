const { findMaxConsecutiveOnes } = require('./index'); // or import if using ES modules


test('test 1', () => {
  const nums = [1,1,0,1,1,1];
  const result = findMaxConsecutiveOnes(nums);
  expect(result).toEqual(3);
});

test('test 1', () => {
  const nums = [1,0,1,1,0,1];
  const result = findMaxConsecutiveOnes(nums);
  expect(result).toEqual(2);
});