import Heap from "../heap/Heap.js";

export default class PriorityQueue extends Heap {   
  constructor() {
    super()
    this.priorities = new Map()
  }

  add(item, priority = 0) {
    this.priorities.set(item, priority)
    super.insert(item)
    return this
  }

  remove(item) {
    super.remove(item)
    this.priorities.delete(item)
    return this
  }

  compare(a, b) {
    const priorA = this.priorities.get(a)
    const priorB = this.priorities.get(b)
    return priorA === priorB ? 0 : (priorA > priorB ? 1 : -1)
  }

}