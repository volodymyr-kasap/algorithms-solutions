const { test, expect } = require('@jest/globals');
const { singleNumber } = require('./index');


test('test 1', () => {
  const result = singleNumber([2,2,1]);
  expect(result).toEqual(1);
});


test('test 1', () => {
  const result = singleNumber([2,2,1]);
  expect(result).toEqual(1);
});

test('test 2', () => {
  const result = singleNumber([4,1,2,1,2]);
  expect(result).toEqual(4);
});

test('test 3', () => {
  const result = singleNumber([1]);
  expect(result).toEqual(1);
});