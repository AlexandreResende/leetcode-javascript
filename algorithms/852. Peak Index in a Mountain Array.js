/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = (A) => {
	const max = A.reduce(function(a, b) {
		return Math.max(a, b);
	});

	return A.indexOf(max);
};
