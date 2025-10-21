const { runningSum } = require('./index');

describe('runningSum', () => {
  test('test 1', () => {
    const nums = [1,2,3,4];
    const result = runningSum(nums);
    expect(result).toEqual([1,3,6,10]);
  });

  test('test 2', () => {
    const nums = [3,1,2,10,1];
    const result = runningSum(nums);
    expect(result).toEqual([3,4,6,16,17]);
  });

  test('test 3', () => {
    const nums = [1,1,1,1,1];
    const result = runningSum(nums);
    expect(result).toEqual([1,2,3,4,5]);
  });

});
