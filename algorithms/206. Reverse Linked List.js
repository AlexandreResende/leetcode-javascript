const assert = require('assert');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
	const listElements = [];

	while (head !== null) {
		listElements.unshift({ val: head.val, next: null });
		head = head.next;
	}
	listElements.push(null);
	let reversedList = listElements[0];
	const reversedListCopy = reversedList;

	for (let counter = 0; counter < listElements.length - 1; counter++) {
		reversedList.next = listElements[counter + 1];

		reversedList = reversedList.next;
	}

	return reversedListCopy;
};

assert.deepEqual(reverseList({ val: 1, next: null }), { val: 1, next:null });
assert.deepEqual(reverseList(
	{ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }
	), { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } });
