const { productExceptSelf } = require('./index');

describe('productExceptSelf', () => {
  test('should return correct products for positive numbers', () => {
    const nums = [1, 2, 3, 4];
    const result = productExceptSelf(nums);
    expect(result).toEqual([24, 12, 8, 6]);
  });

  test('should handle array with zeros', () => {
    const nums = [1, 2, 0, 4];
    const result = productExceptSelf(nums);
    expect(result).toEqual([0, 0, 8, 0]);
  });

  test('should handle array with multiple zeros', () => {
    const nums = [0, 2, 0, 4];
    const result = productExceptSelf(nums);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  test('should handle negative numbers', () => {
    const nums = [-1, 2, -3, 4];
    const result = productExceptSelf(nums);
    expect(result).toEqual([-24, 12, -8, 6]);
  });

  test('should handle single-element array', () => {
    const nums = [10];
    const result = productExceptSelf(nums);
    expect(result).toEqual([1]); // По условию, обычно результат для 1 элемента — [1]
  });

  test('should handle array with all ones', () => {
    const nums = [1, 1, 1, 1];
    const result = productExceptSelf(nums);
    expect(result).toEqual([1, 1, 1, 1]);
  });
});
