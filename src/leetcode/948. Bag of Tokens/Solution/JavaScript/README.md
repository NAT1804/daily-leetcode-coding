## Solution 1.

```js
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  // Sorting tokens in asc
  tokens = tokens.sort((a, b) => a - b);

  let lPoint = 0,
    rPoint = tokens.length - 1,
    score = 0,
    result = 0;

  while (lPoint <= rPoint) {
    if (power >= tokens[lPoint]) {
      // face-up
      score++;
      power -= tokens[lPoint++];
      result = Math.max(result, score);
    } else if (score > 0) {
      // face-up
      power += tokens[rPoint--];
      score--;
    } else {
      // can't play continue
      break;
    }
  }

  return result;
};
```
