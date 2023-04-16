const tidyNumber = n => {
  
  let arr = n.toString().split('')
  
  for (let i = 0; i < arr.length - 1; i++) {
    
    if (arr[i] > arr[i + 1] ) {
      return false
    }

  }
  
  return true
}
