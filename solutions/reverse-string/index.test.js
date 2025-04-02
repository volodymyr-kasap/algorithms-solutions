const { reverse } = require('./index');
const { test, expect } = require('@jest/globals');


test('Reverse a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
