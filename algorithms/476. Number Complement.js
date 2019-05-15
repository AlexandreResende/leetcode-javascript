const assert = require('assert');
/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  let baseTwo = 1;

  while (baseTwo < num) {
    baseTwo *= 2;
  }

  if (baseTwo === num) return num - 1;

  baseTwo -= 1;

  if (num === 1) return 0;

  return baseTwo === num ? 0 : baseTwo ^ num;
};

assert.equal(findComplement(5), 2);
assert.equal(findComplement(1), 0);
assert.equal(findComplement(7), 0);
