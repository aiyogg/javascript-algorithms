import Comparator from '../../utils/comparator/Comparator'

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback
 * @property {function(a: *)} visitingCallback
 */

export default class Sort {
  constructor (originalCallbacks) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks)
    this.comparator = new Comparator(this.callbacks.compareCallback)
  }

  /**
   *
   * @param {SorterCallbacks} originalCallbacks
   */
  static initSortingCallbacks (originalCallbacks) {
    const callbacks = originalCallbacks || {}
    const stubCallback = () => {}

    callbacks.compareCallback = callbacks.compareCallback || undefined
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback

    return callbacks
  }

  sort () {
    throw new Error('sort method must be implemented')
  }
}
