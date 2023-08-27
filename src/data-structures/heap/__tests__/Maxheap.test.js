import MaxHeap from '../MaxHeap.js'

describe('MaxHeap', () => {
  it('should be created an empty max heap', () => {
    const maxHeap = new MaxHeap(2)

    expect(maxHeap).toBeDefined()
  })

  it('should be added to the max heap', () => {
    const maxHeap = new MaxHeap()

    maxHeap.insert(5)
    maxHeap.insert(3)
    maxHeap.insert(10)
    maxHeap.insert(11)
    maxHeap.insert(1)
    expect(maxHeap.toString()).toEqual('11,10,5,3,1')
  })

  it('should be poll item from heap and heapify it down', () => {
    const maxHeap = new MaxHeap()

    maxHeap.insert(5)
    maxHeap.insert(3)
    maxHeap.insert(10)
    maxHeap.insert(11)
    maxHeap.insert(1)

    expect(maxHeap.poll()).toEqual(11)

    expect(maxHeap.toString()).toEqual('10,3,5,1')
  })

  it('should remove item specifically in heap', () => {
    const maxHeap = new MaxHeap()

    maxHeap.insert(5)
    maxHeap.insert(3)
    maxHeap.insert(10)
    maxHeap.insert(11)
    maxHeap.insert(1)

    maxHeap.remove(3)

    expect(maxHeap.toString()).toEqual('11,10,5,1')
  })

})