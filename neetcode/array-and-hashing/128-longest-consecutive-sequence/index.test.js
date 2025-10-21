const { longestConsecutive } = require('./index');

describe('longestConsecutive', () => {
  test('test 1', () => {
    const nums = [100,4,200,1,3,2];
    const result = longestConsecutive(nums);
    expect(result).toEqual(4);
  });

  test('test 2', () => {
    const nums = [0,3,7,2,5,8,4,6,0,1];
    const result = longestConsecutive(nums);
    expect(result).toEqual(9);
  });

  test('test 3', () => {
    const nums = [1,0,1,2];
    const result = longestConsecutive(nums);
    expect(result).toEqual(3);
  });

});