const { bubbleSort } = require('./index');

describe('bubbleSort', () => {
  test('sorts an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test('sorts an array with one element', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  test('sorts an already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts a reverse-sorted array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts a random array', () => {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  test('handles negative numbers', () => {
    expect(bubbleSort([0, -2, 5, -1, 3])).toEqual([-2, -1, 0, 3, 5]);
  });

  test('handles duplicate numbers', () => {
    expect(bubbleSort([4, 2, 7, 2, 4, 1])).toEqual([1, 2, 2, 4, 4, 7]);
  });

  test('handles all equal numbers', () => {
    expect(bubbleSort([3, 3, 3, 3])).toEqual([3, 3, 3, 3]);
  });

  test('handles floating point numbers', () => {
    expect(bubbleSort([3.2, 1.5, 2.7, 0.1])).toEqual([0.1, 1.5, 2.7, 3.2]);
  });

});
