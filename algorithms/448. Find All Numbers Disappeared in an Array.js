const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
	const mappedNums = {};
	const result = [];

	for (let counter = 0; counter < nums.length; counter++) {
		mappedNums[nums[counter]] = 0;
	}

	const mappedNumsKeys = Object.keys(mappedNums);

	for (let counter = 1; counter <= nums.length; counter++) {
		if (mappedNums[counter] === undefined) {
			result.push(counter);
		}
	}

	console.log(mappedNums);
	console.log(result);

	return result;
};

assert.deepEqual(findDisappearedNumbers([1,1]), [2]);
assert.deepEqual(findDisappearedNumbers([4,3,2,7,8,2,3,1]), [5,6]);
assert.deepEqual(findDisappearedNumbers([4,3,2,7,8,2,3,1,9,11]), [5,6,10]);
