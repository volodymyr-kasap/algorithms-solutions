const { countUniqueNumbers } = require('./index');
const { test, expect } = require('@jest/globals');


test('countUniqueNumbers', () => {
  const result = countUniqueNumbers([1,2,3,4,5,6,6,7,8,3,2,3,1,5]);
  expect(result).toEqual({ '1': 2, '2': 2, '3': 3, '4': 1, '5': 2, '6': 2, '7': 1, '8': 1 });
});
