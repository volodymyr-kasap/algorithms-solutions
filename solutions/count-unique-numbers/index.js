function countUniqueNumbers (arr) {
  const result = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!result.has(arr[i])) {
      result.set(arr[i], 1)
    } else {
      result.set(arr[i], result.get(arr[i]) + 1)
    }
  }

  return Object.fromEntries(result.entries());
}

module.exports = {
  countUniqueNumbers
}
