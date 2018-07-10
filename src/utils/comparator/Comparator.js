/**
 * 比较器
 */

export default class Comparator {
  /**
   * 构造器
   * @param {function(a, b)} [compareFunction] 比较函数
   */
  constructor (compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction
  }

  /**
   * 默认比较函数
   * @param {(String | Number)} a
   * @param {(String | Number)} b
   */
  static defaultCompareFunction (a, b) {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  equal (a, b) {
    return this.compare(a, b) === 0
  }

  lessThan (a, b) {
    return this.compare(a, b) < 0
  }

  greaterThan (a, b) {
    return this.compare(a, b) > 0
  }

  lessThanOrEqual (a, b) {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThanOrEqual (a, b) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  /**
   * 反转比较结果
   */
  reverse () {
    const compareOriginal = this.compare
    this.compare = (a, b) => compareOriginal(b, a)
  }
}
