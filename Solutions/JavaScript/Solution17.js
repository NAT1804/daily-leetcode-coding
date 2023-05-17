/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let n = nums.length
  if (n <= 0) return 0
  let j = 0
  for (let i = 1; i < n; ++i) {
      if (nums[i] != nums[i-1]) nums[++j] = nums[i]
  }
  return j+1
};