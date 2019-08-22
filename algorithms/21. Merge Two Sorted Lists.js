const assert = require('assert');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
	const l1Elements = [];
	const l2Elements = [];

	if (l1 === null && l2 === null) return null;

	while (l1 !== null) {
		l1Elements.push({ val: l1.val, next: null });
		l1 = l1.next;
	}

	while (l2 !== null) {
		l2Elements.push({ val: l2.val, next: null });
		l2 = l2.next;
	}

	const concatenatedResult = l1Elements.concat(l2Elements);
	const sortedConcatenatedResult = concatenatedResult.sort((a,b) => a.val - b.val);

	for (let counter = 0; counter < sortedConcatenatedResult.length; counter++) {
		if (counter === sortedConcatenatedResult.length -1) {
			sortedConcatenatedResult[counter].next = null;
		} else {
			sortedConcatenatedResult[counter].next = sortedConcatenatedResult[counter + 1];
		}
	}

	return sortedConcatenatedResult[0];
};

assert.deepEqual(mergeTwoLists(
	null,
	{ val: 4, next: { val: 5, next: { val: 6, next: null } } }
), { val: 4, next: { val: 5, next: { val: 6, next: null } } });

assert.deepEqual(mergeTwoLists(
	{ val: 1, next: { val: 2, next: { val: 3, next: null} } },
	{ val: 4, next: { val: 5, next: { val: 6, next: null} } }
), { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } });

assert.deepEqual(mergeTwoLists(
	{ val: 1, next: { val: 2, next: { val: 4, next: null} } },
	{ val: 1, next: { val: 3, next: { val: 4, next: null} } }
), { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null } } } } } });
