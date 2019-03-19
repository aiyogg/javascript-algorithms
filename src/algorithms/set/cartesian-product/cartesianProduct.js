/**
 * 生成两个集合的笛卡儿积
 * @param {*[]} setA
 * @param {*[]} setB
 */
export default function cartesianProduct (setA, setB) {
  if (!setA || !setB || !setA.length || !setB.length) {
    return null
  }

  const product = []
  for (let indexA = 0; indexA < setA.length; indexA++) {
    for (let indexB = 0; indexB < setB.length; indexB++) {
      product.push(setA[indexA], setB[indexB])
    }
  }

  return product
}
