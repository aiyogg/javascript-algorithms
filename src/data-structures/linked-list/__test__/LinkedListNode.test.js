import LinkedListNode from '../LinkedListNode'

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1)

    expect(node.value).toBe(1)
    expect(node.next).toBeNull()
  })

  it('should create list node with object as value', () => {
    const nodeValue = { value: 1, key: 'test' }
    const node = new LinkedListNode(nodeValue)

    expect(node.value.value).toBe(1)
    expect(node.value.key).toBe('test')
    expect(node.next).toBeNull()
  })

  it('should convert node to string', () => {
    const node = new LinkedListNode(1)

    expect(node.toString()).toBe('1')
    node.value = 'test string'
    expect(node.toString()).toBe('test string')
  })

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = {value: 1, key: 'test'}
    const node = new LinkedListNode(nodeValue)
    const toStringCallback = value => `value: ${value.value}, key: ${value.key}`

    expect(node.toString(toStringCallback)).toBe('value: 1, key: test')
  })
})
