export default function fisherYates (originalArray) {
  const array = originalArray.slice(0)

  for (let i = (array.length - 1); i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]] // eslint-disable-line
  }

  return array
}
