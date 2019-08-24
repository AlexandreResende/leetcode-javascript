const assert = require('assert');

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const splittedString = s.split('');
	const openedChars = [];
	const closedChars = [];
	const mapper = { '(': ')', '[': ']', '{': '}' };

	for (let counter = 0; counter < splittedString.length; counter++) {
		if (splittedString[counter] === '(' || splittedString[counter] === '[' || splittedString[counter] === '{') {
			openedChars.push(splittedString[counter]);
		} else {
			closedChars.push(splittedString[counter]);
		}
	}

	console.log(openedChars);
	console.log(closedChars);

	if (openedChars.length !== closedChars.length) return false;

	const arraySize = openedChars.length;

	for (let counter = openedChars.length - 1; counter >= 0; counter--) {
		if (mapper[openedChars[counter]] !== closedChars[arraySize - counter - 1]) {
			return false;
		}
	}

	return true;
};

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('(]'), false);
assert.equal(isValid('([)]'), false);
// assert.equal(isValid('{[]}'), true);
