/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }
  let traverse = head;
  while (traverse !== null && traverse.next !== null) {
    if (traverse.next.val === val) {
      traverse.next = traverse.next.next;
    } else {
      traverse = traverse.next;
    }
  }
  return head;
};

var removeElements = function (head, val) {
  if (!head) return null;
  let cur = head.next,
    prev = head;
  while (cur) {
    if (cur.val === val) {
      cur = cur.next;
      prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  if (head.val === val) return head.next;
  return head;
};
