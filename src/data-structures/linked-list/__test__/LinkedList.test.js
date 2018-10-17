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
})
