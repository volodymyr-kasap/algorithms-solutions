/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s?.length !== t?.length) return false;

  const sArray = Array.from(s);
  const tArray = Array.from(t);

  const hashTable = {};
  for (const x of sArray) {
    if (!hashTable[x]) hashTable[x] = 1;
    else hashTable[x] = hashTable[x] + 1;
  }

  for (const x of tArray) {
    if (!hashTable[x]) return false;
    else {
      if (hashTable[x] === 1) delete hashTable[x];
      else hashTable[x] = hashTable[x] - 1;
    }
  }

  return true
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s?.length !== t?.length) return false;

  const hashTableS = {};
  const hashTableT = {};

  for (let i = 0; i < s.length; i++) {
    hashTableS[s[i]] = (hashTableS[s[i]] || 0) + 1;
    hashTableT[t[i]] = (hashTableT[t[i]] || 0) + 1;
  }

  for (const key in hashTableS) {
    if (hashTableS[key] !== hashTableT[key]) {
      return false;
    }
  }

  return true;
};
