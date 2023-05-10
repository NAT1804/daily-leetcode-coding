/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let curSum = nums[0]
  let max = curSum
  for (let i = 1; i < nums.length; ++i) {
    if (curSum < 0) curSum = 0
    curSum += nums[i]
    max = Math.max(curSum, max)
  }
  return max
};