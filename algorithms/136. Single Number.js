const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
	const mappedNums = {};

	for (let counter = 0; counter < nums.length; counter++) {
		if (mappedNums[nums[counter]] === undefined) {
			mappedNums[nums[counter]] = 1;
		} else {
			mappedNums[nums[counter]]++
		}
	}

	for (let num of Object.keys(mappedNums)) {
		if (mappedNums[num] === 1) return num;
	}
};

assert.deepEqual(singleNumber([2,2,1]), 1);
assert.deepEqual(singleNumber([4,1,2,1,2]), 4);
