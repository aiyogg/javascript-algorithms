import Heap from './Heap'

export default class MaxHeap extends Heap {
  /**
   * 检查给定两个元素是否在正确的位置
   * @param {*} firstElement
   * @param {*} secondElement
   */
  pairIsInCorrectOrder (firstElement, secondElement) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement)
  }
}
