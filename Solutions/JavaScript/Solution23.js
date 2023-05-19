/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  const n = nums.length
  if (n % k != 0) return false
  let map = new Map()
  for (let i of nums) {
      map.set(i, (map.get(i) || 0) + 1)
  }
  nums.sort((a, b) => a - b)
  for (const i of nums) {
      if (map.get(i) == 0) continue
      for (let j=0; j<k; ++j) {
          const curr = i + j
          if (map.get(curr) === undefined || map.get(curr) === 0) return false
          map.set(curr, map.get(curr) - 1)
      } 
  }
  return true
};