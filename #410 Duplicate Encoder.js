const duplicateEncode= word => {
  let wordToLowerCase = word.toLowerCase()
  let charCount = {}
  
  for (let i = 0; i < wordToLowerCase.length; i++) {
    let char = wordToLowerCase[i]
    
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }
  
  let result = ''
  
  for (let i = 0; i < wordToLowerCase.length; i++) {
    let char = wordToLowerCase[i]
    
    if (charCount[char] > 1) {
      result += ')'
    } else {
      result += '('
    }
  }
  
  return result
}
