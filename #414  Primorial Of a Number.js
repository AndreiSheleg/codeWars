const numPrimorial = n => {
  const isPrime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return num > 1
  }

  let count = 0;
  let result = 1;
  let currentNum = 2;

  while (count < n) {
    if (isPrime(currentNum)) {
      result *= currentNum
      count++
    }
    currentNum++
  }

  return result
}
