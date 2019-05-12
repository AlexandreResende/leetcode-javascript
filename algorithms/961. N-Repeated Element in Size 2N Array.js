const assert = require('assert');

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


// got TLE with this solution
// const repeatedNTimes = (arrayOfElements) => {
//   const occurrences = {};
//   let key;
//
//   for (let ans = 0; ans < arrayOfElements.length; ans++) {
//     if (!Object.keys(occurrences).includes(arrayOfElements[ans].toString())) {
//       occurrences[arrayOfElements[ans]] = 1;
//     } else {
//       occurrences[arrayOfElements[ans]]++;
//     }
//   }
//
//   const keys = Object.keys(occurrences);
//
//   key = keys[0];
//
//   for (let ans = 1; ans < keys.length; ans++) {
//     if (occurrences[key] < occurrences[keys[ans]]) {
//       key = keys[ans];
//     }
//   }
//
//   return Number(key);
// };

assert.equal(repeatedNTimes([1, 2, 3, 3]), 3);
assert.equal(repeatedNTimes([1, 2, 2, 2, 2, 3, 3, 3]), 2);
assert.equal(repeatedNTimes([1, 1, 1, 1, 1, 1, 2, 2]), 1);
assert.equal(repeatedNTimes([1, 2, 3, 4, 4, 4]), 4);
assert.equal(repeatedNTimes([12,62,62,30,62,96,97,62,62,6,73,62,62,5,62,8,64,62,18,62]), 62);
