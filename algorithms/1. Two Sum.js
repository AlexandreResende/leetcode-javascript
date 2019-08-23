const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const mappedNums = {};
	let result;

	for (let counter = 0; counter < nums.length; counter++) {
		if (mappedNums[nums[counter]] === undefined) {
			mappedNums[nums[counter]] = [counter];
		} else {
			mappedNums[nums[counter]].push(counter);
		}
	}

	const mappedKeys = Object.keys(mappedNums);

	for (let counter = 0; counter < mappedKeys.length; counter++) {
		console.log();
		let difference = target - (Number(mappedKeys[counter]));

		if (target % 2 === 0 && difference === target / 2 && mappedNums[difference].length > 1) {
			return [mappedNums[difference][0], mappedNums[difference][1]];
		} else if (mappedNums[difference] !== undefined) {
			return [mappedNums[mappedKeys[counter]][0], mappedNums[difference][0]];
		}
	}
};

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([2, 3, 4, 2], 4), [0, 3]);
assert.deepEqual(twoSum([5, 7, 1, -1, 9], 0), [2, 3]);
