## Solution 1.

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // Split sorted array into two sorted array
  let nums1 = [...nums],
    nums2 = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= 0) {
      nums1 = nums.slice(0, i);
      nums2 = nums.slice(i, nums.length);
      break;
    }
  }

  // Merge two sorted array
  let i = nums1.length - 1,
    j = 0,
    result = [];
  while (i >= 0 && j < nums2.length) {
    if (Math.abs(nums1[i]) < nums2[j]) {
      result.push(nums1[i--]);
    } else {
      result.push(nums2[j++]);
    }
  }

  // add remaining items of array nums1
  while (i >= 0) {
    result.push(nums1[i--]);
  }

  // add remaining items of array nums2
  while (j < nums2.length) {
    result.push(nums2[j++]);
  }

  return result.map((i) => i * i);
};
```

## Solution 2.

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // Using two pointer
  let len = nums.length;
  let pHead = 0,
    pTail = len - 1;
  let result = new Array(len);

  for (let i = len - 1; i >= 0; --i) {
    if (Math.abs(nums[pHead]) >= Math.abs(nums[pTail])) {
      result[i] = nums[pHead] * nums[pHead];
      pHead++;
    } else {
      result[i] = nums[pTail] * nums[pTail];
      pTail--;
    }
  }

  return result;
};
```
