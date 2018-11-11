import LinkedList from '../linked-list/LinkedList'

const defaultHashTableSize = 32

export default class HashTable {
  /**
   * @param {number} hashTableSize size
   */
  constructor (hashTableSize = defaultHashTableSize) {
    // 初始化 buckets
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())
    // 存放 key
    this.keys = {}
  }

  /**
   * 简单的 hash 函数，通过 key 计算哈希
   * @param {string} key
   * @returns {number}
   */
  hash (key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0
    )

    // 减小哈希，使之适合哈希表 size
    return hash % this.buckets.length
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set (key, value) {
    const keyHash = this.hash(key)
    this.keys[key] = keyHash
    const bucketLinkedList = this.buckets[keyHash]
    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    })

    if (!node) {
      bucketLinkedList.append({
        key,
        value
      })
    } else {
      node.value.value = value
    }
  }

  /**
   * @param {string} key
   * @returns {*}
   */
  delete (key) {
    const keyHash = this.hash(key)
    delete this.keys[key]
    const bucketLinkedList = this.buckets[keyHash]
    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    })

    if (node) {
      return bucketLinkedList.delete(node.value)
    }
    return null
  }

  /**
   * @param {string} key
   * @returns {*}
   */
  get (key) {
    const bucketLinkedList = this.buckets[this.hash(key)]
    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    })

    return node ? node.value.value : undefined
  }

  /**
   * @param {string} key
   * @returns {boolean}
   */
  has (key) {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  /**
   * @returns {string[]}
   */
  getKeys () {
    return Object.keys(this.keys)
  }
}
