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
 * @return {boolean}
 */
const isPalindrome = (head) => {
	const linkedListElements = [];

	while (head !== null) {
		linkedListElements.push(head.val);
		head = head.next;
	}

	console.log(linkedListElements);

	for (let counter = 0; counter <= linkedListElements.length / 2; counter++) {
		if (linkedListElements[counter] !== linkedListElements[linkedListElements.length - counter - 1]) {
			return false;
		}
	}

	return true;
};

assert.equal(isPalindrome({ val: 1, next: { val: 1, next: null } }), true);
assert.equal(isPalindrome({ val: 1, next: { val: 2, next: null } }), false);
assert.equal(isPalindrome({ val: 1, next: { val: 2, next: { val: 1, next: null } } }), true);
