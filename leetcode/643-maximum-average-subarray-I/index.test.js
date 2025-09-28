const {findMaxAverage} = require('./index');

describe('findMaxAverage', () => {
  test('example case from LeetCode', () => {
    const nums = [1,12,-5,-6,50,3];
    expect(findMaxAverage(nums, 4)).toBeCloseTo(12.75, 5);
  });

  test('works with all positives', () => {
    const nums = [5, 5, 5, 5, 5];
    expect(findMaxAverage(nums, 2)).toBe(5);
  });

  test('works with all negatives', () => {
    const nums = [-1, -2, -3, -4];
    expect(findMaxAverage(nums, 2)).toBeCloseTo(-1.5, 5);
  });

  test('works when k equals array length', () => {
    const nums = [1, 2, 3, 4];
    expect(findMaxAverage(nums, 4)).toBe(2.5);
  });

  test('works with single element window', () => {
    const nums = [1, 12, -5, -6, 50, 3];
    expect(findMaxAverage(nums, 1)).toBe(50);
  });

  test('works with alternating positive and negative values', () => {
    const nums = [1, -1, 1, -1, 1];
    expect(findMaxAverage(nums, 2)).toBe(0);
  });

  test('handles large k', () => {
    const nums = Array(1000).fill(1);
    expect(findMaxAverage(nums, 1000)).toBe(1);
  });
});
