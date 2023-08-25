## Solution 1.

```cpp
// OJ: https://leetcode.com/problems/add-two-numbers/
// Author: github.com/NAT1804
// Time: O(N)
// Space: O(1)
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int carry = 0;
        ListNode ans, *temp = &ans;
        while (l1 || l2 || carry) {
            if (l1) {
                carry += l1->val;
                l1 = l1->next;
            }
            if (l2) {
                carry += l2->val;
                l2 = l2->next;
            }
            temp->next = new ListNode(carry % 10);
            temp = temp->next;
            carry /= 10;
        }
        return ans.next;
    }
};
```
