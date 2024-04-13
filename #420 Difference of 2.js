const twosDifference = input => {
  let copyInput = [...input].sort((a, b) => a - b)
  let result = []
  
  for (let i = 0; i < copyInput.length - 1; i++) {
    for (let j = i + 1; j < copyInput.length; j++) {
      
      if (copyInput[j] - copyInput[i] === 2) {
        result.push([ copyInput[i], copyInput[j] ])
        
      }
    }
  }
  
  return result
}
