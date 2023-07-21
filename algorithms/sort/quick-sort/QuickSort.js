export default class QuickSort {
  /**
   *
   */
  sort(array, cb, low = 0, high = array.length - 1) {
    /**
     *
     */
    const partition = (low, high, cb) => {
      /**
       * firstIndex
       * secondIndex
       * return void
       */
      const swap = (firstIndex, secondIndex) => {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
      };

      let pivot = array[high];
      let idx = low;
      for (let i = low; i < high; i++) {
        if (cb(array[i], array[pivot]) > 0) {
          swap(idx, i);
          idx++;
        }
      }
      swap(idx, high);

      return idx;
    };

    if (low <= high) {
      let pivot = partition(low, high, cb);
      sort(array, cb, low, pivot - 1);
      sort(array, cb, pivot + 1, high);
    }
  }
}
