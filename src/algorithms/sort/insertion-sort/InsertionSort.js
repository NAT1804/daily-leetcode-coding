export function insertionSort(array, cb = (a, b) => a - b) {
  let arr = [...array];
  let N = arr.length,
    j;
  for (let i = 0; i < N; ++i) {
    let temp = arr[i];
    for (j = i - 1; j >= 0; --j) {
      if (cb(temp, arr[j]) > 0) {
        break;
      } else {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
}
