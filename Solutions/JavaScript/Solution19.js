/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  const n = arr.length
  let res = 0
  const arrUp = new Array(n).fill(0)
  const arrDown = new Array(n).fill(0)
  for (let i = 1; i < n; ++i) {
      if (arr[i] > arr[i-1]) {
          arrUp[i] = arrUp[i-1] + 1
      }
  }
  for (let i = n-2; i >= 0; --i) {
      if (arr[i] > arr[i+1]) {
          arrDown[i] = arrDown[i+1] + 1
      }
      if (arrUp[i] && arrDown[i]) res = Math.max(res, arrUp[i] + arrDown[i] + 1)
  }
  return res
};

/**
 * @pararm {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  let res = 0, up = 0, down = 0;
      for (let i = 1; i < arr.length; ++i) {
          if (down > 0 && arr[i - 1] < arr[i] || arr[i - 1] == arr[i]) up = down = 0;
          if (arr[i - 1] < arr[i]) up++;
          if (arr[i - 1] > arr[i]) down++;
          if (up > 0 && down > 0 && up + down + 1 > res) res = up + down + 1;
      }
      return res;
};