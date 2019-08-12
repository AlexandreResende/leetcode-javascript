const assert = require('assert');

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (matrix) => {
	const matrixWithReversedRows = reverseRows(matrix);
	const matrixWithElementsFlipped = flipElements(matrixWithReversedRows);

	return matrixWithElementsFlipped;
};

const reverseRows = (matrix) => {
	return matrix.map(row => row.reverse());
}

const flipElements = (matrix) => {
	return matrix.map(row => {
		const flippedRow = row.map(element => {
			if (element === 1) return 0;
			else return 1;
		});

		return flippedRow;
	});
}

assert.deepEqual(
	flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]),
	[[1,0,0],[0,1,0],[1,1,1]]
);
