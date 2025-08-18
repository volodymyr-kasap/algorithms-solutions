const { test, expect } = require('@jest/globals');
const { isValid } = require('./index');


test('test 1', () => {
  const result = isValid('()');
  expect(result).toEqual(true);
});


test('test 2', () => {
  const result = isValid('()[]{}');
  expect(result).toEqual(true);
});

test('test 3', () => {
  const result = isValid('(]');
  expect(result).toEqual(false);
});

test('test 4', () => {
  const result = isValid('([])');
  expect(result).toEqual(true);
});

test('test 5', () => {
  const result = isValid('([)]');
  expect(result).toEqual(false);
});
test('test 5', () => {
  const result = isValid('({[)');
  expect(result).toEqual(false);
});