const assert = require('assert');

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
*/
const shortestToChar = (S, C) => {
  const charIndex = [];
  let result = new Array(S.length).fill(0);

  for (let ans = 0; ans < S.length; ans++) {
    if (S[ans] === C) {
      charIndex.push(ans);
    }
  }

  for (let ans = 0; ans < charIndex.length; ans++) {
    for (let ans2 = 0; ans2 <S.length; ans2++) {
      let difference = Math.abs(ans2 - charIndex[ans]);

      if (S[ans2] === C) {
        continue;
      } else if (result[ans2] !== C && result[ans2] === 0) {
        result[ans2] = difference;
      } else if (result[ans2] > difference) {
        result[ans2] = difference;
      }
    }
  }

  return result;
};

let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
shortestToChar('xloveleetc', 'x').map((element, index) => assert.equal(element, result[index]));

result = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]
shortestToChar('xloveleetcx', 'x').map((element, index) => assert.equal(element, result[index]));

result = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
shortestToChar('loveleetcode', 'e').map((element, index) => assert.equal(element, result[index]));
