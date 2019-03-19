import MinHeap from '../MinHeap'
// import Comparator from '../../../utils/comparator/Comparator'

describe('MinHeap', () => {
  it('should create an empty min heap', () => {
    const minHeap = new MinHeap()

    expect(minHeap).toBeDefined()
    expect(minHeap.peak()).toBeNull()
    expect(minHeap.isEmpty()).toBe(true)
  })

  it('should add items to the heap and heapify it up', () => {
    const minHeap = new MinHeap()

    minHeap.add(5)
    expect(minHeap.isEmpty()).toBe(false)
    expect(minHeap.peak()).toBe(5)
    expect(minHeap.toString()).toBe('5')

    minHeap.add(3)
    expect(minHeap.peak()).toBe(3)
    expect(minHeap.toString()).toBe('3,5')

    minHeap.add(10)
    expect(minHeap.peak()).toBe(3)
    expect(minHeap.toString()).toBe('3,5,10')

    minHeap.add(1)
    expect(minHeap.peak()).toBe(1)
    expect(minHeap.toString()).toBe('1,3,10,5')

    minHeap.add(1)
    expect(minHeap.peak()).toBe(1)
    expect(minHeap.toString()).toBe('1,1,10,5,3')

    expect(minHeap.poll()).toBe(1)
    expect(minHeap.toString()).toBe('1,3,10,5')

    expect(minHeap.poll()).toBe(1)
    expect(minHeap.toString()).toBe('3,5,10')

    expect(minHeap.poll()).toBe(3)
    expect(minHeap.toString()).toBe('5,10')
  })

  it('should poll items from the heap and heapify it down', () => {
    const minHeap = new MinHeap()

    minHeap.add(5)
    minHeap.add(3)
    minHeap.add(10)
    minHeap.add(11)
    minHeap.add(1)

    expect(minHeap.toString()).toBe('1,3,10,11,5')

    expect(minHeap.poll()).toBe(1)
    expect(minHeap.toString()).toBe('3,5,10,11')

    expect(minHeap.poll()).toBe(3)
    expect(minHeap.toString()).toBe('5,11,10')

    expect(minHeap.poll()).toBe(5)
    expect(minHeap.toString()).toBe('10,11')

    expect(minHeap.poll()).toBe(10)
    expect(minHeap.toString()).toBe('11')

    expect(minHeap.poll()).toBe(11)
    expect(minHeap.toString()).toBe('')

    expect(minHeap.poll()).toBeNull()
    expect(minHeap.toString()).toBe('')
  })

  it('should be possible to find item indices in heap', () => {
    const minHeap = new MinHeap()

    minHeap.add(3)
    minHeap.add(12)
    minHeap.add(10)
    minHeap.add(11)
    minHeap.add(11)

    expect(minHeap.toString()).toBe('3,11,10,12,11')

    expect(minHeap.find(5)).toEqual([])
    expect(minHeap.find(3)).toEqual([0])
    expect(minHeap.find(11)).toEqual([1, 4])
  })
})
