import Heap from "./Heap.js";

export default class MinHeap extends Heap {
  compare(firstElement, secondElement) {
    return firstElement < secondElement
  }
}
