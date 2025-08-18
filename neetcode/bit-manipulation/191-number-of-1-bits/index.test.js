const { test, expect } = require('@jest/globals');
const { hammingWeight } = require('./index');


test('test 1', () => {
  const result = hammingWeight(11);
  expect(result).toEqual(3);
});


test('test 2', () => {
  const result = hammingWeight(128);
  expect(result).toEqual(1);
});

test('test 2', () => {
  const result = hammingWeight(2147483645);
  expect(result).toEqual(30);
});