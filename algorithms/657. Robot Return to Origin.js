const assert = require('assert');

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = (moves) => {
	const splittedMoves = moves.split('');
	let UDCount = 0;
	let LRCount = 0;

	splittedMoves.forEach(move => {
		if (move === 'U') UDCount++;
		else if (move === 'D') UDCount--;
		else if (move === 'L') LRCount++;
		else if (move === 'R') LRCount--;
	});

	return UDCount === 0 && LRCount === 0
};

assert.equal(judgeCircle('UD'), true);
assert.equal(judgeCircle('LL'), false);
