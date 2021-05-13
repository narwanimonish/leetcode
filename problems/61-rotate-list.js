/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k <= 0 || head === null) return head;

  let count = 1;
  let trav = head;

  while (trav.next != null) {
    count++;
    trav = trav.next;
  }

  let rotate = k % count;
  if (rotate === 0) return head;

  let steps = count - rotate - 1;
  trav = head;
  trav2 = head;
  while (trav.next != null) {
    if (steps > 0) {
      steps--;
      trav2 = trav2.next;
    }
    trav = trav.next;
  }

  let temp = trav2.next;
  trav2.next = null;
  trav.next = head;
  head = temp;

  return head;
};
