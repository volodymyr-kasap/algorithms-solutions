function mean(array) {
  if (array.length === 0) return NaN;
  if (array.length === 1) return array[0];
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum / array.length;
}

module.exports = { mean };