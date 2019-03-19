import MaxHeap from '../MaxHeap'

describe('MaxHeap', () => {
  it('should create an empty min heap', () => {
    const maxHeap = new MaxHeap()

    expect(maxHeap).toBeDefined()
    expect(maxHeap.peak()).toBeNull()
    expect(maxHeap.isEmpty()).toBe(true)
  })

  it('should add items to the heap and heapify it up', () => {
    const maxHeap = new MaxHeap()

    maxHeap.add(5)
    expect(maxHeap.isEmpty()).toBe(false)
    expect(maxHeap.peak()).toBe(5)
    expect(maxHeap.toString()).toBe('5')

    maxHeap.add(3)
    expect(maxHeap.peak()).toBe(5)
    expect(maxHeap.toString()).toBe('5,3')

    maxHeap.add(10)
    expect(maxHeap.peak()).toBe(10)
    expect(maxHeap.toString()).toBe('10,3,5')

    maxHeap.add(1)
    expect(maxHeap.peak()).toBe(10)
    expect(maxHeap.toString()).toBe('10,3,5,1')

    maxHeap.add(1)
    expect(maxHeap.peak()).toBe(10)
    expect(maxHeap.toString()).toBe('10,3,5,1,1')

    expect(maxHeap.poll()).toBe(10)
    expect(maxHeap.toString()).toBe('5,3,1,1')

    expect(maxHeap.poll()).toBe(5)
    expect(maxHeap.toString()).toBe('3,1,1')

    expect(maxHeap.poll()).toBe(3)
    expect(maxHeap.toString()).toBe('1,1')
  })
})
