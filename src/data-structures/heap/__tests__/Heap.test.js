import Heap from '../Heap.js'

describe("Heap", () => {
  it('Shoule not allow create instance of the Heap directly', () => {
    const instanctiateHeap = () => {
      const heap = new Heap(2)
      heap.insert(5)
    }

    expect(instanctiateHeap).toThrow()
  })
})