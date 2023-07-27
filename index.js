import { insertionSort } from "./algorithms/sort/insertion-sort/InsertionSort.js";

(() => {
  const arr = [5, 4, 2, 6, 3, 9, 7];
  const sortedArr = insertionSort(arr);
  console.log("Ans", sortedArr);
})();
