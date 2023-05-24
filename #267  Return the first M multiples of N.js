const multiples = (m, n) => {
  let resultArr = []
  
  for (let i = 1; i <= m; i++) {
    resultArr = [...resultArr, (n * i)]
  }
  return resultArr
}
