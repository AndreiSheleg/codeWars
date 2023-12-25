function groupByCommas(n) {
  const numArr = String(n).split('')
  const result = []

  let count = 0
  
  for (let i = numArr.length - 1; i >= 0; i--) {
    result.unshift(numArr[i])
    count++

    if (count === 3 && i !== 0) {
      result.unshift(',')
      count = 0
    }
  }

  return result.join('')
}
