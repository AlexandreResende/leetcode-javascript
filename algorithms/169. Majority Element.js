const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
	const mappedNums = {};
	let max;

	for (let counter = 0; counter < nums.length; counter++) {
		if (mappedNums[nums[counter]] === undefined) {
			mappedNums[nums[counter]] = 1;
		} else {
			mappedNums[nums[counter]]++;
		}
	}

	const mappedNumsKeys = Object.keys(mappedNums);
	max = mappedNumsKeys[0];

	for (let counter = 1; counter < mappedNumsKeys.length; counter++) {
		if (mappedNums[mappedNumsKeys[counter]] > mappedNums[max]) {
			max = mappedNumsKeys[counter];
		}
	}

	return Number(max);
};

assert.equal(majorityElement([3,2,3]), 3);
assert.equal(majorityElement([2,2,1,1,1,2,2]), 2);
