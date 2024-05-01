const isPrime = n => {
  if (n < 2) {
    return false
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const functionReverseNumber = n => {
  return parseInt(n.toString().split('').reverse().join(''))
}

const backwardsPrime = (start, end) => {
  const result = []
  
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      const reversedNum = functionReverseNumber(num)
      if (reversedNum !== num && isPrime(reversedNum)) {
        result.push(num)
      }
    }
  }
  return result
}
