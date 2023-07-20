import SelectionSort from "./SelectionSort.js";

const array = [5, 3, 8, 4, 1, 10, 9, 7];

const selectionSort = new SelectionSort();

const sortedArray = selectionSort.sort(array, (a, b) => b - a);

console.log(sortedArray.toString())