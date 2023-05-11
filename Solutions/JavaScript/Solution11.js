/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length
  let step = nums[0]
  for (let i = 1; i < n; ++i) {
      step--
      if (step < 0) return false
      if (step < nums[i]) step = nums[i]
  }
  return true
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length
  let lastGoodIndex = n - 1;
  for (let i = n-1; i >= 0; --i) {
      if (i + nums[i] >= lastGoodIndex) lastGoodIndex = i
  }
  return lastGoodIndex == 0
};