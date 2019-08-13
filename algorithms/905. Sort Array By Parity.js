const assert = require('assert');

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	const evenNumbers = A.filter(number => number % 2 === 0);
	const oddNumbers = A.filter(number => number % 2 === 1);

	return evenNumbers.concat(oddNumbers);
};

assert.deepEqual(sortArrayByParity([3,1,2,4]), [2,4,3,1]);
