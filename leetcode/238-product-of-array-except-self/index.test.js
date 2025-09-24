const { test, expect } = require('@jest/globals');
const { productExceptSelf } = require('./index');


test('test 1', () => {
  const input = [1,2,4,6];

  const result = productExceptSelf(input);

  expect(result).toEqual([48,24,12,8]);
});