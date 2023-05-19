/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  if (hand.length % groupSize != 0) return false
  let map = new Map()
  for (let i of hand) {
      map.set(i, (map.get(i) || 0) + 1)
  }
  hand.sort((a, b) => a - b)
  for (const i of hand) {
      if (map.get(i) == 0) continue
      for (let j=0; j<groupSize; ++j) {
          const curr = i + j
          if (map.get(curr) === undefined || map.get(curr) === 0) return false
          map.set(curr, map.get(curr) - 1)
      } 
  }
  return true
};