const assert = require('assert');

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => address.replace(/\./g, '[.]');

assert.equal(defangIPaddr('255.100.50.0'), '255[.]100[.]50[.]0');
assert.equal(defangIPaddr('1.1.1.1'), '1[.]1[.]1[.]1');
