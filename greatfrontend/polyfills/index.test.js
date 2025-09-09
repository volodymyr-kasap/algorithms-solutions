const { myMap, myFilter, myReduce } = require('./index');

describe("Array polyfills", () => {
  describe("myMap", () => {
    test("doubles numbers", () => {
      expect([1, 2, 3].myMap(x => x * 2)).toEqual([2, 4, 6]);
    });

    test("works with thisArg", () => {
      const context = { factor: 3 };
      const result = [1, 2].myMap(function(x) { return x * this.factor; }, context);
      expect(result).toEqual([3, 6]);
    });

    test("empty array returns empty", () => {
      expect([].myMap(x => x * 2)).toEqual([]);
    });
  });

  describe("myFilter", () => {
    test("filters even numbers", () => {
      expect([1, 2, 3, 4].myFilter(x => x % 2 === 0)).toEqual([2, 4]);
    });

    test("works with thisArg", () => {
      const context = { min: 3 };
      const result = [1, 3, 5].myFilter(function(x) { return x >= this.min; }, context);
      expect(result).toEqual([3, 5]);
    });

    test("empty array returns empty", () => {
      expect([].myFilter(x => x > 0)).toEqual([]);
    });
  });

  describe("myReduce", () => {
    test("sums numbers with initial value", () => {
      expect([1, 2, 3].myReduce((acc, cur) => acc + cur, 0)).toBe(6);
    });

    test("sums numbers without initial value", () => {
      expect([1, 2, 3].myReduce((acc, cur) => acc + cur)).toBe(6);
    });

    test("handles empty array with initial value", () => {
      expect([].myReduce((acc, cur) => acc + cur, 10)).toBe(10);
    });

    test("throws on empty array without initial value", () => {
      expect(() => [].myReduce((acc, cur) => acc + cur)).toThrow(
        "Reduce of empty array with no initial value"
      );
    });
  });
});
