const assert = require('assert');

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
*/
const numJewelsInStones = (jewels, stones) => {
  const jewelsInArray = jewelsAsArray(jewels);
  const stonesInArray = stonesAsArray(stones);

  const numberOfJewels = jewelsInArray.reduce((acc, jewel) => {
    const jewelCount = stonesInArray.filter(stone => stone === jewel).length;
    
    return acc + jewelCount;
  }, 0);

  return numberOfJewels;
};

const jewelsAsArray = (jewels) => {
  return jewels.split('');
};

const stonesAsArray = (stones) => {
  return stones.split('');
}

assert.equal(numJewelsInStones('aA', 'aAAbbb'), 3);
assert.equal(numJewelsInStones('z', 'ZZ'), 0);
