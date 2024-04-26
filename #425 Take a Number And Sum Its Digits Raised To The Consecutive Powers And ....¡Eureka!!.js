const sumDigPow = (a, b) => {
  let result = []

  for (let num = a; num <= b; num++) {
    let sum = 0;
    let digits = num.toString().split('')

    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow( parseInt( digits[i] ), i + 1 )
    }

    if (sum === num) {
      result.push(num)
    }
  }

  return result
}
