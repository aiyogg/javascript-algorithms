import LinkedListNode from './LinkedListNode'
import Comparator from '../../utils/comparator/Comparator'

export default class LinkedList {
  /**
   * @param {Function} comparatorFunction
   */
  constructor (comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null
    /** @var LinkedListNode */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }
  /**
   * 从头部增加节点
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend (value) {
    // Make new node to be a head
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * 从尾部增加节点
   * @param {*} value
   * @returns {LinkedList}
   */
  append (value) {
    const newNode = new LinkedListNode(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * 删除节点
   * @param {*} value
   * @returns {LinkedListNode}
   */
  delete (value) {
    if (!this.head) {
      return null
    }

    let deleteNode = null

    // 如果必须删除头部，则将与头部不同的下一个节点作为新头。
    while (this.head && this.compare.equal(this.head.value, value)) {
      deleteNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      // 如果下一个节点需要被删除，则让下个节点指向下下个节点
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deleteNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // 确认是否删除尾部
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deleteNode
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {Function} findParams.callback
   * @return {LinkedListNode}
   */
  find ({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      // 如果指定了回调函数，则调用回调查找
      if (callback && callback(currentNode.value)) {
        return currentNode
      }

      // 比较当前节点的与被查找节点
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  /**
   * @return {LinkedListNode} 被删除的节点
   */
  deleteTail () {
    const deletedTail = this.tail;

    // 链表只有唯一一个节点
    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    // 如果有多个节点，回退到最后一个节点并删除最后一个节点之前的“下一个”链接
    let currentNode = this.head
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedTail
  }

  /**
   * 删除头部节点
   * @returns {LinkedListNode} 被删除的节点
   */
  deleteHead () {
    if (!this.head) {
      return null
    }

    const deleteHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deleteHead
  }

  /**
   * 数组转链表
   * @param {*[]} values - 需要转换成链表的数组
   * @returns {LinkedList}
   */
  fromArray (values) {
    values.forEach(value => this.append(value))

    return this
  }

  /**
   * 链表转数组
   * @returns {LinkedListNode[]}
   */
  toArray () {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * toString
   * @param {Function} [callback]
   * @returns {String}
   */
  toString (callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }

  reserve () {
    let currNode = this.head
    let prevNode = null
    let nextNode = null

    while (currNode) {
      nextNode = currNode.next
      currNode.next = prevNode

      // prevNode 与 currNode 向前移动一步
      prevNode = currNode
      currNode = nextNode
    }

    // 重置头和尾
    this.tail = this.head
    this.head = this.prevNode

    return this
  }
}
