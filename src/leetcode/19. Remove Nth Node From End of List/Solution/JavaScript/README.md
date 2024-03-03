## Solution 1.

```js
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
  let pSlow = head;
  let pFast = head;
  let i = 1;

  while (i <= n) {
    pFast = pFast.next;
    i++;
  }

  if (!pFast) return head.next;

  while (pFast !== null) {
    pFast = pFast.next;

    if (pFast === null) {
      pSlow.next = pSlow.next.next;
    } else {
      pSlow = pSlow.next;
    }
  }

  return head;
};
```
