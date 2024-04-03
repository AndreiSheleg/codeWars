const digPow = (n, p) => {
  const digitsToString = n.toString()
  const badResult = -1
  let sum = 0

  for (let i = 0; i < digitsToString.length; i++) {
    const digit = parseInt(digitsToString[i])
    sum += Math.pow(digit, p + i)
  }

  if (sum % n === 0) {
    return sum / n
  } else {
    return badResult
  }
}
