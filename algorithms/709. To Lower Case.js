const assert = require('assert');

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  return str.toLowerCase();
};

assert.equal(toLowerCase('Hello'), 'hello');
assert.equal(toLowerCase('here'), 'here');
assert.equal(toLowerCase('LOVELY'), 'lovely');
