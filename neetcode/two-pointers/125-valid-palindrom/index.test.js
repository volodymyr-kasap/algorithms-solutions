const { test, expect } = require('@jest/globals');
const { isPalindrome } = require('./index');


test('test 1', () => {
  const result = isPalindrome('Was it a car or a cat I saw?');
  expect(result).toEqual(true);
});


test('test 2', () => {
  const result = isPalindrome('tab a cat');
  expect(result).toEqual(false);
});

test('test 3', () => {
  const result = isPalindrome('A man, a plan, a canal: Panama');
  expect(result).toEqual(true);
});

test('test 4', () => {
  const result = isPalindrome('race a car');
  expect(result).toEqual(false);
});