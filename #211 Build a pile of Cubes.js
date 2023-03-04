const findNb = m => {
    let count = 0
    let sum = 0
    
    while (sum < m) {
      count += 1
      sum += count ** 3
    }
  
  return sum === m ? count : -1
}
