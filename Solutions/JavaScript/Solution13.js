/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let arr = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
  arr[0] = 0
  let i = 1
  while (i * i <= n) {
      for (let j = i * i; j< n + 1; ++j) {
          arr[j] = Math.min(arr[j - i * i] + 1, arr[j])
      }
      i++
  }
  return arr[n]
};