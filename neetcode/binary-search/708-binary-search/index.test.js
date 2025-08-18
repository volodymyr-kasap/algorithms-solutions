const { test, expect } = require('@jest/globals');
const { binarySearch } = require('./index');


test('test 1', () => {
  const result = binarySearch([-1,0,2,4,6,8], 4);
  expect(result).toEqual(3);
});


test('test 2', () => {
  const result = binarySearch([-1,0,2,4,6,8], 3);
  expect(result).toEqual(-1);
});

test('test 3', () => {
  const result = binarySearch([-1,0,3,5,9,12], 9);
  expect(result).toEqual(4);
});

test('test 4', () => {
  const result = binarySearch([-1,0,3,5,9,12], 2);
  expect(result).toEqual(-1);
});