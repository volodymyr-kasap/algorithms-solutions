function lengthOfLastWordNative(s) {
  let index = s.length - 1;
  while (index >= 0 && s[index] === ' ') {
    index--;
  }

  let length = 0;
  while (index >= 0 && s[index] !== ' ') {
    length++;
    index--;
  }

  return length;
}