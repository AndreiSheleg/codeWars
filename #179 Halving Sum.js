const halvingSum = n => {
  let sum = n
  let divisor = 2
    
  for (let i = n; i >= 1 ; i--) {
  sum = Math.floor(sum + n / divisor)
  divisor *= 2
    
  }
  
  return sum
  
}
