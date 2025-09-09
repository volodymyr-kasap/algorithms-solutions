/**
 * @param {number} initialValue
 * @return {Function}
 */
function makeCounter(initialValue = 0) {
  const counter = () => {
    let returnValue = initialValue;
    initialValue++;
    return returnValue;
  };

  return counter;
}

module.exports = { makeCounter };