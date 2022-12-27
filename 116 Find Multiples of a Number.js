const findMultiples = (integer, limit) => {
  let resultArr = []
  let j = integer
  let ddU = integer
  
  while (j <= limit) {
    resultArr.push(j)
    j = j + ddU
  }
  return resultArr
}
