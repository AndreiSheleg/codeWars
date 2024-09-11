const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5
    
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6
    }
  
    return true
}

const minimumNumber = numbers => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
  
    let closestPrime = sum
    
    while (!isPrime(closestPrime)) {
        closestPrime++
    }
  
    return closestPrime - sum
}
