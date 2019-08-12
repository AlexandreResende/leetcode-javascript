const assert = require('assert');

/**
 *   Definition for a binary tree node.
 *   function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const bstToGst = (root) => {
  // gotta improve before getting here again...
};

assert.deepEqual(
  bstToGst([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]),
  [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
);
