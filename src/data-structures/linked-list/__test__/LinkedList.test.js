import LinkedList from '../LinkedList'

describe('LikedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
  })

  it('should append node to linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()

    linkedList.append(1)
    linkedList.append(2)

    expect(linkedList.toString()).toBe('1,2')
    expect(linkedList.tail.next).toBeNull()
  })

  it('should preppend node to linked list', () => {
    const linkedList = new LinkedList()

    linkedList.prepend(2)

    expect(linkedList.head.toString()).toBe('2')
    expect(linkedList.tail.toString()).toBe('2')

    linkedList.append(1)
    linkedList.prepend(3)

    expect(linkedList.toString()).toBe('3,2,1')
  })

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.delete(4)).toBeNull()

    linkedList.append(1)
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(3)
    linkedList.append(4)

    expect(linkedList.head.toString()).toBe('1')
    expect(linkedList.tail.toString()).toBe('4')

    const deleteNode = linkedList.delete(1)
    expect(deleteNode.value).toBe(1)
    expect(linkedList.toString()).toBe('2,3,3,4')

    linkedList.delete(3)
    expect(linkedList.toString()).toBe('2,4')

    linkedList.delete(1)
    expect(linkedList.head.toString()).toBe('2')
    expect(linkedList.tail.toString()).toBe('4')

    linkedList.delete(4)
    expect(linkedList.head.toString()).toBe('2')
    expect(linkedList.tail.toString()).toBe('2')

    linkedList.delete(2)

    expect(linkedList.toString()).toBe('')
  })
})
