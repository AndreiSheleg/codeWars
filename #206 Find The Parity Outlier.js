const findOutlier = integers => {
  let oddArr = []
  let evenArr = []
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 !== 0) {
      oddArr.push(integers[i])
    } else {
      evenArr.push(integers[i])
    } 
  }
  return oddArr.length == 1 ? oddArr[0] : evenArr[0]
}
