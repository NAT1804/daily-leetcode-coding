import Heap from "./Heap.js";

export default class MaxHeap extends Heap {
  compare(firstElement, secondElement) {
    return firstElement > secondElement
  }
}