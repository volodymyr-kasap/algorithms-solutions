const { moveZeroes } = require('./index'); // or import if using ES modules

describe('moveZeroes', () => {
  test('moves zeros in a mixed array', () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });

  test('works when no zeros are present', () => {
    const nums = [1, 2, 3];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3]);
  });

  test('works when all elements are zeros', () => {
    const nums = [0, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([0, 0, 0]);
  });

  test('works when zeros are already at the end', () => {
    const nums = [1, 2, 3, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 0, 0]);
  });

  test('works with single-element array (zero)', () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });

  test('works with single-element array (non-zero)', () => {
    const nums = [5];
    moveZeroes(nums);
    expect(nums).toEqual([5]);
  });

  test('keeps relative order of non-zeros', () => {
    const nums = [4, 0, 5, 0, 1];
    moveZeroes(nums);
    expect(nums).toEqual([4, 5, 1, 0, 0]);
  });
});
