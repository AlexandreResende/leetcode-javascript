const assert = require('assert');
/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  // base case - num equals 1 complement equals 0
  if (num === 1) return 0;

  let baseTwo = 1;

  while (baseTwo < num) {
    baseTwo *= 2;
  }

  // if they are equal the num is a perfect base2 Number
  // so the complement is the number - 1
  if (baseTwo === num) return num - 1;

  baseTwo -= 1;

  // else
  return baseTwo === num ? 0 : baseTwo ^ num;
};

assert.equal(findComplement(5), 2);
assert.equal(findComplement(1), 0);
assert.equal(findComplement(7), 0);
