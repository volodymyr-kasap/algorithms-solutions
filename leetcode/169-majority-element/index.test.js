const { test, expect } = require('@jest/globals');
const { solution } = require('./index');


test('test 1', () => {
  const input = [3,2,3];

  const result = solution(input);

  expect(result).toEqual(3);
});

test('test 2', () => {
  const input = [2,2,1,1,1,2,2];

  const result = solution(input);

  expect(result).toEqual(2);
});