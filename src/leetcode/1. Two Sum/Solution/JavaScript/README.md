## Solution 1.
- OJ: https://leetcode.com/problems/two-sum/
- Author: github.com/NAT1804

```js
// Time: O(N)
// Space: O(N)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    const num = target - nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
```