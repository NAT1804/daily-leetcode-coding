## Solution 1.

```cpp
// OJ: https://leetcode.com/problems/two-sum/
// Author: github.com/NAT1804
// Time: O(NlogN)
// Space: O(N)
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<vector<int>> v; 
        int N = numbers.size(), L = 0, R = N - 1;
        for (int i = 0; i < N; ++i) v.push_back({ numbers[i], i });
        sort(begin(v), end(v));
        while (L < R) {
            int sum = v[L][0] + v[R][0];
            if (sum == target) return { v[L][1], v[R][1] };
            if (sum < target) ++L;
            else --R;
        }
        return {};
    }
};
```

## Solution 2.

```cpp
// OJ: https://leetcode.com/problems/two-sum/
// Author: github.com/NAT1804
// Time: O(N)
// Space: O(N)
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < numbers.size(); ++i) {
            int t = target - A[i];
            if (map.count(t)) return { map[t], i };
            map[numbers[i]] = i;
        }
        return {};
    }
};
```