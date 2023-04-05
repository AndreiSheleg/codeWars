const sumOfMinimums = arr => {
  let result = 0
  
  
  for (let i = 0; i < arr.length; i++) {
    let localMin = 1000000000000
        
    for (let j = 0; j < arr[i].length; j++) {
      
      if (localMin > arr[i][j]) {
        localMin = arr[i][j]
        
      }
      console.log('localMin = ' + localMin)
    }
    result += localMin
  }
  return result
}
