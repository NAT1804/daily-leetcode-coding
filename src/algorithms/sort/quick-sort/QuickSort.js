export function quickSort(arr, cb) {
  let N = arr.length;
  if (N < 2) return arr;
  let indexPivot = N - 1;
  let pivot = arr[indexPivot],
    leftArr = [],
    rightArr = [];
  for (let i = 0; i < indexPivot; ++i) {
    if (cb(arr[i], pivot) > 0) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr, cb), pivot, ...quickSort(rightArr, cb)];
}

export function quickSortInPlace(
  arr,
  low,
  high,
  cb = (a, b) => a - b,
  initialCall = true
) {
  arr = initialCall ? [...arr] : arr;
  if (low < high) {
    let pivot = partitionArr(arr, low, high, cb);
    quickSortInPlace(arr, low, pivot - 1, cb, false);
    quickSortInPlace(arr, pivot + 1, high, cb, false);
  }
  return arr;
}

const partitionArr = (arr, low, high, cb) => {
  let pivot = arr[high];
  let index = low;
  for (let i = low; i < high; i++) {
    if (cb(arr[i], pivot) < 0) {
      let temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
      index++;
    }
  }
  let tmp = arr[high];
  arr[high] = arr[index];
  arr[index] = tmp;
  return index;
};
