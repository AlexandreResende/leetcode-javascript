const assert = require('assert');

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
	const greaterNumber = x > y ? x : y;
	const lowerNumber = x > y ? y : x;
	const xToBinaryArray = lowerNumber.toString(2).split('').map(Number);
	const yToBinaryArray = greaterNumber.toString(2).split('').map(Number);
	let xToBinaryArrayLength = xToBinaryArray.length;
	let yToBinaryArrayLegth = yToBinaryArray.length;
	let differentBitsCounter = 0;

	while (xToBinaryArrayLength < yToBinaryArrayLegth) {
		xToBinaryArray.unshift(0);
		xToBinaryArrayLength++;
	}

	for (let counter = yToBinaryArrayLegth; counter >= 0; counter--) {
		if (xToBinaryArray[counter] !== yToBinaryArray[counter]) {
			differentBitsCounter++;
		}
	}

	return differentBitsCounter;
};

assert.equal(hammingDistance(1, 4), 2);
assert.equal(hammingDistance(1, 3), 1);
assert.equal(hammingDistance(93, 73), 2);
