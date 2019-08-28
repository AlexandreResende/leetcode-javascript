const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */
const moveZeroes = (nums) => {
	const numsLength = nums.length;
	let counter = 0;

	while (counter < numsLength) {
		if (nums[counter] === 0) {
			nums.splice(counter, 1);
		} else {
			counter++;
		}
	}

	while (nums.length < numsLength) nums.push(0);
};

assert.deepEqual(moveZeroes([0,1,0,3,12]), [1,3,12,0,0]);
