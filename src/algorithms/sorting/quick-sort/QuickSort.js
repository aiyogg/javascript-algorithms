import Sort from '../Sort'

export default class QuickSort extends Sort {
  /**
   * @param {*[]} originalArray
   */
  sort (originalArray) {
    // 克隆原数组，避免被修改
    const array = [...originalArray]

    if (array.length <= 1) {
      return array
    }

    // Init left and right arrays
    const leftArray = []
    const rightArray = []

    // Take the first element of array as pivot
    const pivotElement = array.shift()
    const centerArray = [pivotElement]

    while (array.length) {
      const currentElement = array.shift()

      // 调用一下 visiting callback
      this.callbacks.visitingCallback(currentElement)

      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement)
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement)
      } else {
        rightArray.push(currentElement)
      }
    }

    // Sort left and right arrays
    const leftArraySorted = this.sort(leftArray)
    const rightArraySorted = this.sort(rightArray)

    // Join all sorted array
    return leftArraySorted.concat(centerArray, rightArraySorted)
  }
}
