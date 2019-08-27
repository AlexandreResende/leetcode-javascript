const assert = require('assert');

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = (T) => {
	const result = [];
	let days = 0;

	for (let firstCounter = 0; firstCounter < T.length - 1; firstCounter++) {
		days = 0;
		for (let secondCounter = firstCounter + 1; secondCounter < T.length; secondCounter++) {
			days++;
			if (T[secondCounter] > T[firstCounter]) {
				result.push(days);
				break;
			} else if (secondCounter === T.length - 1) {
				result.push(0);
			}
		}
	}

	result.push(0);

	return result;
};

assert.deepEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
assert.deepEqual(dailyTemperatures([5, 4, 3, 2, 1]), [0, 0, 0, 0, 0]);
assert.deepEqual(dailyTemperatures([1, 2, 3, 4, 5]), [1, 1, 1, 1, 0]);
