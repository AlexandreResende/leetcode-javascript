const assert = require('assert');

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
	const result = [];

	for (let counter = left; counter <= right; counter++) {
		checkNumber(counter) === true ? result.push(counter) : false;
	}

	return result;
};

const checkNumber = (number) => {
	if (number < 10 && number > 0) return true;

	const numberToString = String(number);
	const numberToStringSplitted = numberToString.split('');

	if (!numberToStringSplitted.includes('0')) {
		const isNumberDivisibleByItsAlgarims = numberToStringSplitted.map(numberString => {
			if (number % Number(numberString) !== 0) return false;
			return true;
		})

		return isNumberDivisibleByItsAlgarims.every(isDivisible => isDivisible === true);
	}

	return false;
};

assert.deepEqual(selfDividingNumbers(1, 22), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
