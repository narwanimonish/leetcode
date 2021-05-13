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
  let prev = null,
    trav = head;
  while (trav?.next) {
    if (trav.next.val === trav.val) {
      while (trav.next && trav.val === trav.next.val) {
        trav.next = trav.next.next;
      }
      if (trav === head) {
        head = head.next;
      } else {
        trav = trav.next;
        prev.next = trav;
      }
    } else {
      prev = trav;
      trav = trav.next;
    }
  }

  return head;
};
