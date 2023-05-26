/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0, null)
  let tempNode = head;
  let surplus = 0, temp = 0
  while (l1 && l2) {
      temp = l1.val + l2.val + surplus
      l1.val = temp >= 10 ? temp - 10 : temp
      surplus = temp >= 10 ? 1 : 0
      tempNode.next = l1
      l1 = l1.next
      l2 = l2.next
      tempNode = tempNode.next
  }
  while (l1) {
      temp = l1.val + surplus
      l1.val = temp >= 10 ? temp - 10 : temp
      surplus = temp >= 10 ? 1 : 0
      tempNode.next = l1
      l1 = l1.next
      tempNode = tempNode.next
  }
  while (l2) {
      temp = l2.val + surplus
      l2.val = temp >= 10 ? temp - 10 : temp
      surplus = temp >= 10 ? 1 : 0
      tempNode.next = l2
      l2 = l2.next
      tempNode = tempNode.next
  }
  if (surplus) tempNode.next = new ListNode(surplus, null)
  return head.next
};