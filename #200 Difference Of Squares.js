const differenceOfSquares = n => {
  let squareOfSum = 0
  let sumOfSquares = 0
  
  for (let i = 1 ; i <= n; i++) {
    squareOfSum += i
    sumOfSquares += i ** 2
  }
  
  return squareOfSum ** 2 -  sumOfSquares
}
