/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let trav = head;
  while (trav?.next) {
    if (trav.next.val === trav.val) {
      trav.next = trav.next.next;
    } else {
      trav = trav.next;
    }
  }
  return head;
};
