/**
 * @param {string} s
 * @return {boolean}
 */
// ()[]{}
const stackSolution = function(str) {
  const dictionary = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];

  for (const char of s) {
    if (char in dictionary) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const bracket = stack.pop();
      if (dictionary[bracket] !== char) return false;
    }
  }

  return stack.length === 0;
};

const isValid = stackSolution;

module.exports = { isValid };