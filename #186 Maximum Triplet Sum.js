const maxTriSum = numbers => {
  let numbersSort = numbers.sort((a, b) => b - a)
  let newArr = [...new Set(numbersSort)]
  return newArr[0] + newArr[1] + newArr[2]
}
