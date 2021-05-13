/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null) return;

  let trav = head,
    tail = head,
    middle = head;

  while (tail.next?.next) {
    middle = middle.next;
    tail = tail.next.next;
  }

  while (middle);
};
