/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let ans = 0, tmp = 0
  for (let i = 0; i< gain.length; ++i) {
      tmp += gain[i]
      ans = Math.max(ans, tmp)
  }
  return ans
};