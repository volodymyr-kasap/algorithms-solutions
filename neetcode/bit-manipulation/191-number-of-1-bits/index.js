/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const bitwiseSolutions = function(n) {
};

const bruteForceSolution = function(n) {
  let count = 0;

	const nStr = n.toString(2);

	for (let i = 0; i < nStr.length; i++) {
		if (+nStr[i] === 1) count++
	}

	return count;
}

const hammingWeight = bruteForceSolution;

module.exports = { hammingWeight };