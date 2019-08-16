const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
	const sortedArray = nums.sort((a, b) => a - b);
	let sum = 0;

	for (let counter = 0; counter < sortedArray.length; counter += 2) {
		sum += sortedArray[counter];
	}

	return sum;
};

assert.equal(arrayPairSum([1,4,3,2]), 4);
