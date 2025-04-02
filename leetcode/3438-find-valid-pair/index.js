/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
  const hashTable = {};
  const strArray = Array.from(s);

  strArray.forEach((n) => {
    hashTable[n] = (hashTable[n] || 0) + 1;
  });

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];

    const digitCountCurrent = hashTable[current];
    const digitCountNext = hashTable[next];
    if (digitCountCurrent === +current && digitCountNext === +next && +current !== +next) {
      return '' + current + next;
    }
  }

  return ''
};
