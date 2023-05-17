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

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert2 = function (intervals, newInterval) {
  let n = intervals.length, i = 0, res = [], [start, end] = newInterval
  while (i < n && start > intervals[i][1]) {
      res.push(intervals[i])
      i++
  }
  while (i < n && end >= intervals[i][0]) {
      start = Math.min(intervals[i][0], start)
      end = Math.max(intervals[i][1], end)
      i++
  }
  res.push([start, end])
  while (i < n) {
      res.push(intervals[i])
      i++
  }
  return res
};