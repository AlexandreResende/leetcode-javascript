const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
	return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
};

assert.equal(reverseWords("the sky is blue"), "blue is sky the");
