/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let k = 0, n = nums.length
  for (let i = 0; i < n; ++i) {
      if (nums[i] != 0) {
          nums[k++] = nums[i]
      }
  }
  for (; k<n; ++k) {
      nums[k] = 0
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0, n = nums.length
  for (let i = 0; i < n; ++i) {
      count++
      if (nums[i] == 0) {
          nums.splice(i, 1)
          i--
          nums.push(0)
      }
      if (count == n) return
  }
  return
};