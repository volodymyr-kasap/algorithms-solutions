/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const filteredStrs = strs.map((x) => {
    return {
      key: x,
      sorted: Array.from(x).sort().join(''),
    }
  });

  const hashMap =  filteredStrs.reduce((acc, curr) => {
    if (!acc[curr.sorted]) acc[curr.sorted] = [];
    acc[curr.sorted].push(curr.key);
    return acc;
  }, {})

  return Object.values(hashMap);
};
