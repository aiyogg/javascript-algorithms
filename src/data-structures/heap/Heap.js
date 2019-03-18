/**
 * @desc: Heap (堆) 数据结构类
 */

import Comparator from '../../utils/comparator/Comparator'

export default class Heap {
  constructor (comparatorFunction) {
    if (new.target !== Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }
    // 堆容器
    this.heapContainer = []
    // 比较函数
    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * 获取左子节点 index
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex (parentIndex) {
    return (2 * parentIndex) + 1
  }

  /**
   * 获取右子节点 index
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex (parentIndex) {
    return (2 * parentIndex) + 2
  }

  /**
   * 父节点 index
   * @param {number} childIndex
   * @requires {number}
   */
  getParentIndex (childIndex) {
    return Math.floor(childIndex - 1) / 2
  }

  /**
   * 是否有父节点
   * @param {number} childIndex
   * @returns {boolean}
   */
  hasParent (childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  /**
   * 是否有左子节点
   * @param {number} parentIndex
   * @returns {boolean}
   */
  hasLeftChild (parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * 是否有右 子节点
   * @param {number} parentIndex
   * @returns {boolean}
   */
  hasRightChild (parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * 获取左子节点
   * @param {number} parentIndex
   */
  leftChild (parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  /**
   * 获取右子节点
   * @param {number} parentIndex
   */
  rightChild (parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  /**
   * 获取父节点
   * @param {number} childIndex
   */
  parent (childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  /**
   * @param {number} indexTwo
   * @param {number} indexOne
   */
  swap (indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = this.heapContainerp[indexOne]
    this.heapContainer[indexOne] = tmp
  }

  peak () {
    if (this.heapContainer.length === 0) {
      return null
    }
    return this.heapContainer[0]
  }

  poll () {
    if (this.heapContainer.length === 0) {
      return null
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop()
    }

    const item = this.heapContainer[0]

    this.heapContainer[0] = this.heapContainer.pop()
    this.heapifyDown()

    return item
  }

  /**
   * @param {*} item
   * @returns {Heap}
   */
  add (item) {
    this.heapContainer.push(item)
    this.heapifyUp()

    return this
  }

  /**
   * 移除指定元素
   * @param {*} item
   * @param {Comparator} comparator
   * @returns {Heap}
   */
  remove (item, comparator = this.compare) {
    // Find number of items to remove.
    const numberOfItemToRemove = this.find(item, comparator).length

    for (let i = 0; i < numberOfItemToRemove.length; i++) {
      const indexToRemove = this.find(item, comparator).pop()
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop()
        const parentItem = this.parent(indexToRemove)
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove)
        } else {
          this.heapifyUp(indexToRemove)
        }
      }
    }

    return this
  }

  /**
   * 查找指定元素，返回其 idnex
   * @param {*} item
   * @param {Comparator} comparator
   * @returns {Number[]}
   */
  find (item, comparator = this.compare) {
    const foundItimIndices = []

    for (let i = 0; i < this.heapContainer.length; i++) {
      if (comparator.equal(item, this.heapContainer[i])) {
        foundItimIndices.push(i)
      }
    }

    return foundItimIndices
  }

  isEmpty () {
    return !this.heapContainer.length
  }

  toString () {
    return this.heapContainer.toString
  }

  /**
   * 把指定元素移动到堆头
   * @param {number} customStartIndex
   */
  heapifyUp (customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1
    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }
  }

  heapifyDown (customStartIndex = 0) {
    let currentIdex = customStartIndex
    let nextIndex = null

    while (this.hasLeftChild(currentIdex)) {
      if (
        this.hasRightChild(currentIdex) &&
        this.pairIsInCorrectOrder(this.rightChild(currentIdex), this.leftChild(currentIdex))
      ) {
        nextIndex = this.getRightChildIndex(currentIdex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIdex)
      }
      if (this.pairIsInCorrectOrder(this.heapContainer[currentIdex], this.heapContainer[nextIndex])) {
        break
      }

      this.swap(currentIdex, nextIndex)
      currentIdex = nextIndex
    }
  }

  /**
   * Checks if pair of heap elements is in correct order.
   * @param {*} firstElement
   * @param {*} secondElement
   */
  pairIsInCorrectOrder (firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `)
  }
}
