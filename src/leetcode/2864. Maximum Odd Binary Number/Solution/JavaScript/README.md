## Solution 1.

```js
/**
 * @param {string} s
 * @return {string}
 * Time: O(n)
 * Space: O(n)
 */
var maximumOddBinaryNumber = function (s) {
  const len = s.length;
  const result = new Array(len).fill(0);

  let idx = 0;
  for (let i = 0; i < len; ++i) {
    if (s[i] === "1") {
      result[idx++] = "1";
    }
  }

  // remove first item in array
  result.splice(0, 1);

  // add item "1" in last position
  result.push("1");

  return result.join("");
};
```
