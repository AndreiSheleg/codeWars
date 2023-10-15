const digPow = (n, p) => {
  const digits = String(n).split('')
  const sumOfDigitsSuccessivePowersOfP = 
  digits.reduce((accumulator, digit, index) => accumulator + Math.pow(Number(digit), p + index), 0)
  const k = sumOfDigitsSuccessivePowersOfP / n

  return Number.isInteger(k) ? k : -1
}
