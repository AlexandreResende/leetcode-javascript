const assert = require('assert');

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	const numsArray =[];
	const numsArrayConvertedToBinary = [];

	for (let counter = 0; counter <= num; counter++) numsArray.push(counter);

	for (let counter = 0; counter < numsArray.length; counter++)
		numsArrayConvertedToBinary.push(countOnesInBinaryNumber(counter));

	const result = numsArrayConvertedToBinary
		.map(binaryNum => binaryNum.split(''))
		.map(algarismsArray => algarismsArray.filter(algarism => algarism === '1'))
		.map(arrayOfOnes => arrayOfOnes.length);

	return result;
};

const countOnesInBinaryNumber = (num) => {
	if (num === 0) return '0';

	return countOnesInBinaryNumber(Math.floor(num/2)) + String(num % 2);
};

assert.deepEqual(countBits(2), [0, 1, 1]);
assert.deepEqual(countBits(5), [0, 1, 1, 2, 1, 2]);
