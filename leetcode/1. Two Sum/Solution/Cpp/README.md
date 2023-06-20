## Solution 1.
- OJ: https://leetcode.com/problems/two-sum/
- Author: github.com/NAT1804

```cpp
// Time: O(NlogN)
// Space: O(N)
class Solution {
public:
    vector<int> twoSum(vector<int>& A, int target) {
        vector<vector<int>> v; 
        int N = A.size(), L = 0, R = N - 1;
        for (int i = 0; i < N; ++i) v.push_back({ A[i], i });
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
// Time: O(N)
// Space: O(N)
class Solution {
public:
    vector<int> twoSum(vector<int>& A, int target) {
        unordered_map<int, int> m;
        for (int i = 0; i < A.size(); ++i) {
            int t = target - A[i];
            if (m.count(t)) return { m[t], i };
            m[A[i]] = i;
        }
        return {};
    }
};
```