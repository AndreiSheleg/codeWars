const arithmeticSequenceElements = (a, d, n) => {
	let resultArr = []
  
  for (let i = 0; i < n; i++) {
    resultArr[i] = a + d * i
  }
  return resultArr.join(', ')
}
