const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
	const multiplicationOfElements = nums.reduce((acc, value) => acc * value, 1);
	const isThereMoreThanOneZero = nums.indexOf(0) !== nums.lastIndexOf(0) && nums.indexOf(0) !== -1;

	if (isThereMoreThanOneZero) {
		return Array.from(Array(nums.length), () => 0);
	}

	const multiplicationWithoutZero = nums
		.filter(value => value !== 0)
		.reduce((acc, value) => acc * value);

	return nums.reduce((acc, value) => {
		if (value === 0) return acc.concat([multiplicationWithoutZero]);

		return acc.concat([multiplicationOfElements / value]);
	}, []);
};

assert.deepEqual(productExceptSelf([1,2,3,4]), [24,12,8,6]);
assert.deepEqual(productExceptSelf([1,2,3,0]), [0,0,0,6]);
assert.deepEqual(productExceptSelf([1,2,0,0]), [0,0,0,0]);
