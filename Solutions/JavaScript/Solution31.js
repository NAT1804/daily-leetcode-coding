/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const n = nums.length
  const len = 2 * k + 1;
  let sum = 0, ans = [];
  for (let i = 0; i < len; ++i) {
      sum += nums[i]
  }
  for (let j = 0; j < n; ++j) {
      if (j < k || j > (n - k - 1)) {
          ans.push(-1)
      } else if (j == k) {
          ans.push(Math.floor(sum / len))
      } else {
          sum += nums[j + k]
          sum -= nums[j - k - 1]
          ans.push(Math.floor(sum / len))
      }
  }
  return ans
};