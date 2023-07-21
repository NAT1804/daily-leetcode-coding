import QuickSort from "./QuickSort.js";

const quickSort = new QuickSort();

const unsortedArr = [6, 2, 4, 8, 9, 10, 7];

console.log(quickSort.sort(unsortedArr, (a, b) => a - b).toString());
