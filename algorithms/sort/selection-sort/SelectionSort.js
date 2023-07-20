export default class SelectionSort {
  sort(array, callback) {
    const cloneArray = [...array];
    const N = cloneArray.length;
    for (let i = 0; i < N - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < N; j++) {
        if (callback(cloneArray[minIndex], cloneArray[j]) > 0) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        let temp = cloneArray[minIndex];
        cloneArray[minIndex] = cloneArray[i];
        cloneArray[i] = temp;
      }
    }
    
    return cloneArray;
  }
}
