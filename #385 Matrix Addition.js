const matrixAddition = (arr1, arr2) => {
  const result = []
    const size = arr1.length

  for (let i = 0; i < size; i++) {
    const row = []

    for (let j = 0; j < size; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      row.push(sum)
    }

    result.push(row)
  }

  return result
}
