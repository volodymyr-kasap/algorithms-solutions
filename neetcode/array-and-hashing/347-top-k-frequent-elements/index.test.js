const { topKFrequent } = require('./index');
const { test, expect } = require('@jest/globals');


test('topKFrequent', () => {
  const result = topKFrequent([1,2,2,3,3,3,3,3], 2);
  expect(result.sort()).toEqual([2, 3].sort());
});

test('topKFrequent', () => {
  expect(topKFrequent([7,7], 1)).toEqual([7]);
});
