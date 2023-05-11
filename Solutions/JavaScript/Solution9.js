/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let strNumber = "", stStr = [], stNum = []
  for (let i = 0; i < s.length; ++i) {
      if (s[i] >= 0 && s[i] <= 9) {
          strNumber += s[i]
      } else if (s[i] == "[") {
          stNum.push(Number(strNumber))
          stStr.push(s[i])
          strNumber = ""
      } else if (s[i] == "]") {
          const num = stNum.pop()
          let tmp = ""
          while (stStr[stStr.length - 1] != "[") {
              tmp = stStr.pop() + tmp
          }
          stStr.pop()
          for (let i = 0; i < num; ++i) {
              stStr.push(tmp)
          }
      } else {
          stStr.push(s[i])
      }
  }
  return stStr.join("")
};