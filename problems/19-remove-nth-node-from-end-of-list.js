/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let trav1 = head,
    trav2 = null;

  let counter = 0;
  while (trav1.next !== null) {
    counter++;
    if (counter >= n) {
      if (trav2) trav2 = trav2.next;
      else trav2 = head;
    }
    trav1 = trav1.next;
  }
  if (trav2 === null) return head.next;

  trav2.next = trav2.next.next;
  return head;
};
