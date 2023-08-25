## Solution 1.

```js
// OJ: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author: github.com/NAT1804
// Time: O(N)
// Space: O(N)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), N = s.length, max = 0, count = 0
    for (let i = 0; i<N; ++i) {
        if (!map.get(s[i])) { 
            map.set(s[i], i + 1)
            max = Math.max(max, ++count)
        } else {
            i = map.get(s[i]) - 1
            map = new Map()
            count = 0
        }
    }
    return max
};
```