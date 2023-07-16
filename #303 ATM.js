const solve = n => {
  let result = 0
  
  while (n >= 500) {
    result++
    n -= 500
  }
  
  while (n >= 200) {
    result++
    n -= 200
  }
  
  while ( n >= 100 ) {
    result++
    n -= 100
  }
  
  while (n >= 50) {
    result++
    n -= 50
  }
  
  while (n >= 20 ) {
    result++
    n -= 20 
  }
  
  while ( n >= 10 ) {
    result++
    n -= 10 
  }
  return n === 0 ? result : -1
}
