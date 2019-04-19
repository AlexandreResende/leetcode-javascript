const assert = require('assert');

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
*/
const main = (jewels, stones) => {
  const jewelsInArray = jewelsAsArray(jewels);
  const stonesInArray = stonesAsArray(stones);

  const numberOfJewels = jewelsInArray.reduce((acc, jewel) => {
    return acc + stonesInArray.filter(stone => stone === jewel).length;
  }, 0);

  return numberOfJewels;
};

const jewelsAsArray = (jewels) => {
  return jewels.split('');
};

const stonesAsArray = (stones) => {
  return stones.split('');
}

console.log(main('aA', 'aAAbbb'));
console.log(main('z', 'ZZ'));
