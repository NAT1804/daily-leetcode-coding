/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const arr = []
  let [start, end] = newInterval
  for (const interval of intervals) {
      if (interval[0] > end) {
          arr.push([start, end])
          start = interval[0]
          end = interval[1]
      } else if (interval[1] >= start) {
          start = Math.min(interval[0], start)
          end = Math.max(interval[1], end)
      } else arr.push(interval)
  }
  arr.push([start, end])
  return arr
};