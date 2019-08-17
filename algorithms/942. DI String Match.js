const assert = require('assert');

/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = (S) => {
	const splittedString = S.split('');
	let arrayFilledWithNumbers = [];
	let initialPosition = 0;

	for (let counter = 0; counter <= splittedString.length; counter++) {
		arrayFilledWithNumbers[counter] = counter;
	}

	const result = swapIfNecessary(arrayFilledWithNumbers, splittedString, initialPosition);

	console.log(splittedString);
	console.log(result);

	return result;
};

const swap = (numberArray, position) => {
	let aux;

	aux = numberArray[position];
	numberArray[position] = numberArray[position + 1];
	numberArray[position + 1] = aux;

	return numberArray;
}

const swapIfNecessary = (numberArray, operationArray, position) => {
	let swaped;
	if (position === 0) {
		if (operationArray[position] === 'I') {
			if (numberArray[position] > numberArray[position + 1]) {
				swaped = swap(numberArray, position);

				return swapIfNecessary(swaped, operationArray, position + 1);
			} else {
				return swapIfNecessary(numberArray, operationArray, position + 1);
			}
		} else {
			if (numberArray[position] < numberArray[position + 1]) {
				swaped = swap(numberArray, position);

				return swapIfNecessary(swaped, operationArray, position + 1);
			} else {
				return swapIfNecessary(numberArray, operationArray, position + 1);
			}
		}
	} else if (position < operationArray.length) {
		if (operationArray[position] === 'I') {
			if (numberArray[position] > numberArray[position + 1]) {
				swaped = swap(numberArray, position);

				return swapIfNecessary(swaped, operationArray, position - 1);
			} else {
				return swapIfNecessary(numberArray, operationArray, position + 1);
			}
		} else {
			if (numberArray[position] < numberArray[position + 1]) {
				swaped = swap(numberArray, position);

				return swapIfNecessary(swaped, operationArray, position - 1);
			} else {
				return swapIfNecessary(numberArray, operationArray, position + 1);
			}
		}
	} else {
		return numberArray;
	}
};

// assert.deepEqual(diStringMatch("IDID"), [0,4,1,3,2]);
assert.deepEqual(diStringMatch("III"), [0,1,2,3]);
assert.deepEqual(diStringMatch("DDI"), [3,2,0,1]);
