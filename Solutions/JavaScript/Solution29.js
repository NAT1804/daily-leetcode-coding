/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let st = []
  while (nums1.length > 0 && nums2.length > 0) {
      if (nums1[0] >= nums2[0]) {
          st.push(nums2[0])
          nums2.shift()
      } else {
          st.push(nums1[0])
          nums1.shift()
      }
  }
  if (nums1.length > 0) st = st.concat(nums1)
  if (nums2.length > 0) st = st.concat(nums2)
  let mid = Math.floor(st.length / 2)
  if (st.length % 2 == 1) {
      return st[mid]
  } else {
      return (st[mid] + st[mid -1]) / 2
  }
};