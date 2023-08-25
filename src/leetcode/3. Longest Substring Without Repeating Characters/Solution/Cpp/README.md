## Solution 1. Sliding Window (Non-shrinkable)

```cpp 
// OJ: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author: github.com/NAT1804
// Time: O(N)
// Space: O(C)
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int i = 0, j = 0, arr[128] = {}, dup = 0;
        for (; j < s.size(); ) {
            dup += ++arr[s[j++]] == 2;
            if (dup) dup -= --arr[s[i++]] == 1;
        }
        return j - i;
    }
};
```