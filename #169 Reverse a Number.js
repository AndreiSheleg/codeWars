reverseNumber = n => {
  let result = 0
  if (n > 0) {
    result =  Math.abs(n).toString().split('').reverse().join('')
    } else {
      result = -Math.abs(n).toString().split('').reverse().join('')
    }
  return +result
  }
