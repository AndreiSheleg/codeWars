const comp = (array1, array2) => {
 if (!array1 || !array2 || array1.length !== array2.length) {
    return false
  }

  const array1Sorted = [...array1].slice().sort( (a, b) => a - b)
  const array2Sorted = [...array2].slice().sort( (a, b) => a - b)

  for (let i = 0; i < array1Sorted.length; i++) {
    if (array1Sorted[i] ** 2 !== array2Sorted[i]) {
      return false
    }
  }

  return true
}
