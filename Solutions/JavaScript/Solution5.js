/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
      const a = str[left];
      const b = str[right];

      if (!((a >= 'a' && a <= 'z') || (a >= '0' && a <='9'))) {
          left++;
          continue;
      }

      if (!((b >= 'a' && b <= 'z') || (b >= '0' && b <='9'))) {
          right--;
          continue;
      }

      if (a !== b) return false

      left++;
      right--;
  }

  return true
};