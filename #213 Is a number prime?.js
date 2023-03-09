const isPrime = num => {
  if (num < 2) return false
  if (num === 2) return true
  
  let maxDividor = Math.sqrt(num) + 1
  
  for (let i = 2; i < maxDividor; i++) {
     if (num % i === 0) return false
  }
    return true
}
