const deepCount = array => {
  let count = 0
  const arrayCopy = [...array]
  
  while (arrayCopy.length > 0) {
    let currentElement = arrayCopy.pop()
    
    if(Array.isArray(currentElement)) {
      arrayCopy.push(...currentElement)
    }
    
      count++
  }
  
  return count
}
