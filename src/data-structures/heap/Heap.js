export default class Heap {
  constructor(maxSize) {
    if (new.target === Heap) {
      throw new TypeError("Can't construct Heap instance directly");
    }

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

  /**
   * Check current node has parent
   * @param {number} childIndex 
   * @returns boolean
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * Check current node has left child
   * @param {number} parentIndex 
   * @returns 
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.container.length;
  }

  /**
   * Check current node has right child
   * @param {number} parentIndex 
   * @returns 
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.container.length;
  }

  /**
   * Get left child of current node
   * @param {number} parentIndex 
   * @returns 
   */
  leftChild(parentIndex) {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * Get right child of current node
   * @param {number} parentIndex 
   * @returns 
   */
  rightChild(parentIndex) {
    return this.container[this.getRightChildIndex(parentIndex)];
  }

  /**
   * Get parent of current node
   * @param {number} childIndex 
   * @returns 
   */
  parent(childIndex) {
    return this.container[this.getParentIndex(childIndex)];
  }

  /**
   * Get string of heap
   * @returns string
   */
  toString() {
    return this.container.toString();
  }

  /**
   * Check heap is empty or not
   * return boolean
   */
  isEmpty() {
    return !this.heapSize;
  }

  /**
   * Swap two item in heap
   * return void
   */
  swap(index1, index2) {
    let temp = this.container[index1];
    this.container[index1] = this.container[index2];
    this.container[index2] = temp;
  }

  /**
   * Get first item of the Heap
   * return item
   */
  peek() {
    if (this.heapSize === 0) return null;
    return this.container[0];
  }

  /**
   * Get first item of the heap and remove it from heap's container
   */
  poll() {
    if (this.heapSize === 0) return null;
    if (this.heapSize === 1) {
      this.heapSize--;
      return this.container.pop();
    }

    const item = this.container[0];
    this.heapSize--;
    // Move last item from the end to to the head
    this.container[0] = this.container.pop();
    this.heapifyDown();
    return item;
  }

  /**
   * Insert item to last of heap
   * {item}
   * return this heap
   */
  insert(item) {
    if (this.maxSize && this.heapSize === this.maxSize) {
      throw new TypeError("Overflow: Could not insert item to heap");
    }
    this.container.push(item);
    this.heapSize++;
    this.heapifyUp();
    return this;
  }

  remove() {
    let lastNode = this.container[this.heapSize - 1]
    this.heapSize--
    this.container.unshift(this.container.pop())

    this.heapifyDown()

    return lastNode
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapSize - 1;

    while (
      this.hasParent(currentIndex) &&
      this.parent(currentIndex) < this.container[currentIndex]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex) {
    let currentIndex = customStartIndex || 0;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex)) {
        if (this.rightChild(currentIndex) > this.leftChild(currentIndex)) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }
      }

      if (this.container[currentIndex] > this.container[nextIndex]) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  compare(firstElement, secondElement) {
    throw new TypeError(`
      You have to implement heap pair comparision method 
      for ${firstElement} and ${secondElement} values.
    `); 
  }

}
