const assert = require('assert');

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = (A) => {
	return A.map(number => number * number).sort((a, b) => a-b);
};

assert.deepEqual(sortedSquares([-4,-1,0,3,10]), [0,1,9,16,100]);
assert.deepEqual(sortedSquares([-7,-3,2,3,11]), [4,9,9,49,121]);
