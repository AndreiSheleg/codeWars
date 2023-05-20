const orderedCount = text => {
  let result = []
  
  for (let i = 0; i < text.length; i++) {
    let count = 0
    
    for (let j = 0; j < result.length; j++) {
      if (result[j][0] === text[i]) {
        console.log(`result[${j}][0] = `, text[i])
        count++
      }
    }
    
    if (count === 0) {
      for (let j = i; j < text.length; j++) {
        if (text[j] === text[i]) {
          count++
        }
      }
      
      result.push([text[i], count])
    }
  }
  return result
}
