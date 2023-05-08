/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false
    let map = {}
    for (let i = 0; i < s.length; ++i) {
        const a = s[i]
        const b = t[i]
        map[a] = map[a] ? map[a] + 1 : 1
        map[b] = map[b] ? map[b] - 1 : -1
    }
    for (const tmp of Object.values(map)) {
        if (tmp != 0) {
            return false
        }
    }
    return true
};