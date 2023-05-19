/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let ans = new Array(n+1).fill(0)
  let k = 0
  for (let i=1; i<=n; ++i) {
      if (Math.pow(2, k) == i / 2) ++k
      ans[i] = ans[i % Math.pow(2, k)] + 1
  }
  return ans
};