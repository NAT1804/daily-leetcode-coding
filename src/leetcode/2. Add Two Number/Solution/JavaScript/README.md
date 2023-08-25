## Solution 1.

```js
// OJ: https://leetcode.com/problems/add-two-numbers/
// Author: github.com/NAT1804
// Time: O(N)
// Space: O(1)

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
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0, null),
    temp = head,
    carry = 0;

  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    temp.next = new ListNode(Math.floor(carry % 10), null);
    temp = temp.next;
    carry = Math.floor(carry / 10);
  }

  return (head.nextode.next = new ListNode(surplus, null));
  return head.next;
};
```
