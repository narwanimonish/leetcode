/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return compareTree(p, q);
};

var compareTree = function (first, second) {
  if (first === null && second === null) {
    return true;
  }
  if (first === null || second === null) {
    return false;
  }
  if (first.val === second.val) {
    const leftResult = compareTree(first.left, second.left);
    if (leftResult) {
      return compareTree(first.right, second.right);
    }
  }
  return false;
};
