const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
	const frequencyObject = {};

	for (let counter = 0; counter < nums.length; counter++) {
		if (frequencyObject[nums[counter]] === undefined) {
			frequencyObject[nums[counter]] = 1;
		} else {
			frequencyObject[nums[counter]]++;
		}
	}

	const frequencyObjectKeys = Object.keys(frequencyObject);
	const frequencyKeysAndValuesOnArray = frequencyObjectKeys.reduce((acc, value) => {
		return acc.concat([[value, frequencyObject[value]]]);
	}, []);

	const frequencyKeysAndValuesOnArraySorted = frequencyKeysAndValuesOnArray
		.sort((a,b) => b[1] - a[1]);

	return frequencyKeysAndValuesOnArraySorted.splice(0, k).map((arrayValues) => arrayValues[0]);
};

/* This solution uses Object.entries that returns an array with key, value of each element
*  of the object
* var topKFrequent = function(nums, k) {
    let res = [], map = new Map();

    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));

    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }

    return res;
	};
* */

assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2), [1, 2]);
assert.deepEqual(topKFrequent([1], 1), [1]);
