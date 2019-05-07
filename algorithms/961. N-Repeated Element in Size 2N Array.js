const assert = require('assert');

// solucao extra
// fazer um hash com os elementos e ir somando 1 por iteração
// se nao existir no hash, inserir

/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = (arrayOfElements) => {
  const occurrences = new Array(10000).fill(0);
  let element = 0;

  for (let ans = 0; ans < arrayOfElements.length; ans++) {
    occurrences[arrayOfElements[ans]] = occurrences[arrayOfElements[ans]] + 1;
  }

  for (let ans = 1; ans < occurrences.length; ans++) {
    if (occurrences[element] < occurrences[ans]) {
      element = ans;
    }
  }

  return element;
};

assert.equal(repeatedNTimes([1, 2, 3, 3]), 3);
assert.equal(repeatedNTimes([1, 2, 2, 2, 2, 3, 3, 3]), 2);
assert.equal(repeatedNTimes([1, 1, 1, 1, 1, 1, 2, 2]), 1);
assert.equal(repeatedNTimes([1, 2, 3, 4, 4, 4]), 4);
assert.equal(repeatedNTimes([12,62,62,30,62,96,97,62,62,6,73,62,62,5,62,8,64,62,18,62]), 62);
