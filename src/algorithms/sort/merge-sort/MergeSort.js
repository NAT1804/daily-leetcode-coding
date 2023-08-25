export function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  // Merge two sorted array into one
  return mergeTwoSortedArray(sortedLeftArr, sortedRightArr);
}

function mergeTwoSortedArray(sortedLArr, sortedRArr) {
  const sortedArr = [];
  let i, j;
  while (i < sortedLArr.length && j < sortedRArr.length) {
    if (sortedLArr[i] > sortedRArr[j]) {
      sortedArr.push(sortedRArr[j++]);
    } else {
      sortedArr.push(sortedLArr[i++]);
    }
  }

  // There will be elements remaining from either the left or the right
  // Concatenate the remaining elements into sorted array
  return sortedArr.concat(sortedLArr.slice(i)).concat(sortedRArr.slice(j));
}
