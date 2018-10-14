import LinkedList from '../LinkedList'

describe('LikedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
  })
})
