const assert = require('assert');

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const splittedString = s.split('');
	const openedChars = [];

	if (splittedString.length % 2 === 1) return false;

	for (let counter = 0; counter < splittedString.length; counter++) {
		if (splittedString[counter] === '(' || splittedString[counter] === '[' || splittedString[counter] === '{') {
			openedChars.push(splittedString[counter]);
		} else {
			if (splittedString[counter] === ')' && openedChars[openedChars.length - 1] === '(') openedChars.pop();
			else if (splittedString[counter] === ']' && openedChars[openedChars.length - 1] === '[') openedChars.pop();
			else if (splittedString[counter] === '}' && openedChars[openedChars.length - 1] === '{') openedChars.pop();
			else  return false;
		}
	}

	if (openedChars.length > 0) return false;

	return true;
};

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('(]'), false);
assert.equal(isValid('([)]'), false);
assert.equal(isValid('{[]}'), true);
