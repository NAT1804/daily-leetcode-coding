/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map(), ans = [], idx = 0
  for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1)
  }
  const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
  for (const [key, value] of mapSort) {
      if (idx == k) break
      ans.push(key)
      idx++
  }
  return ans
};