import MaxHeap from '../MaxHeap.js'

describe('MaxHeap', () => {
  it('Should be created an empty max heap', () => {
    const maxHeap = new MaxHeap(2)

    expect(maxHeap).toBeDefined()
  })

  it('Should be added to the max heap', () => {
    const maxHeap = new MaxHeap()

    maxHeap.insert(4)
    maxHeap.insert(5)

    expect(maxHeap.toString()).toEqual('5,4')
  })

})