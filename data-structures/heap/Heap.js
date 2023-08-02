export class Heap {
  constructor(maxSize) {
    // if (new.target) {
    //   throw new TypeError("Can't construct Heap instance directly");
    // }

    // Representation of the heap
    this.container = [];

    // Max size of heap
    this.maxSize = maxSize;

    // Current size of heap
    this.heapSize = 0;
  }

  // Get left child index
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  // Get right child index
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  // Get parent index
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.container.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.container.length;
  }

  leftChild(parentIndex) {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.container[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.container[this.getParentIndex(childIndex)];
  }

  currentItem(currentIndex) {
    return this.container[currentIndex];
  }

  toString() {
    return this.container.toString();
  }

  isEmpty() {
    return !this.heapSize;
  }

  swap(index1, index2) {
    let temp = this.container[index1];
    this.container[index1] = this.container[index2];
    this.container[index2] = temp;
  }

  insert(item) {
    if (this.maxSize && this.heapSize === this.maxSize) {
      throw new TypeError("Overflow: Could not insert item to heap");
    }
    this.container.push(item);
    this.heapSize++;
    this.heapifyUp();
    return this;
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapSize;

    while (
      this.hasParent(currentIndex) &&
      this.parent(currentIndex) > this.currentItem(currentIndex)
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
}

const maxHeap = new Heap();

maxHeap.insert(3);
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(6);
maxHeap.insert(7);
maxHeap.insert(4);
maxHeap.insert(6);
maxHeap.insert(8);
maxHeap.insert(2);
maxHeap.insert(1);

console.log(maxHeap.toString());
