const isValidLetter = (char) => /^[A-Za-z0-9]$/.test(char);
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isValidLetter(s[left])) left++;
    while (left < right && !isValidLetter(s[right])) right--;
    console.log(s[left], s[right]);
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

module.exports = { isPalindrome };