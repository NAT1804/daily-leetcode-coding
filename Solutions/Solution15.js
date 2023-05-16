/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const n = nums.length, arr = new Array(n+1).fill(0)
  for (let i = 0; i< n; ++i) {
      arr[nums[i]]++
      if (arr[nums[i]] > 1) return nums[i]
  }
};