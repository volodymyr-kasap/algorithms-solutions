function isValidParenthesis (str) {
  let count = 0;
  for (const char of str) {
    if (char === '(') {
      count++;
    }

    if (char === ')') {
      if (count === 0) return false;
      count--;
    }
  }

  return count === 0;
}

module.exports = {
  isValidParenthesis,
}
