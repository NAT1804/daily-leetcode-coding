/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

  let map = new Map()
  for (let i = 0; i < ransomNote.length; ++i) {
      map.set(ransomNote[i], (map.get(ransomNote[i]) || 0) + 1)
  }
  for (let i = 0; i < magazine.length; ++i) {
      if (map.get(magazine[i]) === undefined || map.get(magazine[i]) === 0) 
          continue;
      map.set(magazine[i], map.get(magazine[i]) - 1)
  }
  for (const v of [...map.values()]) {
      if (v > 0) return false
  }
  return true
};