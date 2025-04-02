const {  flatArray, recursiveFlatArray, recursiveFlatArray2 } = require('./index');
const { test, expect } = require('@jest/globals');


test('flatArray', () => {
  expect(flatArray([1,2,3])).toBeDefined();
});

test('recursiveFlatArray', () => {
  const result = recursiveFlatArray([1,2,[1,2,3],3,4,[1,2,[1,2,[1,2,3],3]],5]);
  expect(result).toEqual([
    1, 2, 1, 2, 3, 3,
    4, 1, 2, 1, 2, 1,
    2, 3, 3, 5
    ]);
});

test('recursiveFlatArray2', () => {
  const result = recursiveFlatArray2([1,2,[-1,-2,-3],3,4,[10,20,[100,200,[1000,2000,3000],300]],5]);
  expect(result).toEqual([
    1,    2,   -1,   -2,  -3,
    3,    4,   10,   20, 100,
    200, 1000, 2000, 3000, 300,
    5]
  );
});
