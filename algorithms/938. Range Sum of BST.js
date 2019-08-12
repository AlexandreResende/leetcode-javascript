const assert = require('assert');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let sum = 0;

const rangeSumBST = (root, L, R) => {
	sum = 0;
	sumInRangeOfBst(root, L, R);

	return sum;
};

const sumInRangeOfBst = (root, L, R) => {
	if (root === null) return;

	if (root.val >= L && root.val <= R) {
		sum += root.val;
	}

	sumInRangeOfBst(root.left, L, R);
	sumInRangeOfBst(root.right, L, R);
};

assert.equal(rangeSumBST({
	val: 10,
	left: {
		val: 5,
		left: {
			val: 3,
			left: {
				val: 1,
				left: null,
				right: null
			},
			right: null
		},
		right: {
			val: 7,
			left: {
				val: 6,
				left: null,
				right: null
			},
			right: null
		}
	},
	right: {
		val: 15,
		left: {
			val: 15,
			left: {
				val: 13,
				left: null,
				right: null
			},
			right: {
				val: 18,
				left: null,
				right: null
			}
		},
		right: null
	}
}, 6, 10), 23);
