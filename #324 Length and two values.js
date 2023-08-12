const alternate = (n, firstValue, secondValue) => {
  if (n <= 0) {
    return []
  }
  let result = []
  for (let i = 0; i < n; i++) {
    if(i % 2 === 0) {
      result = [...result, firstValue]
    } else {
      result = [...result, secondValue]
    }
  }
  return result
}
