const reverse = str => {
  let trimmedStr = str.trim()
  
  const arrWords = trimmedStr.split(/\s+/)
  
    for (let i = 1; i < arrWords.length; i += 2) {
      arrWords[i] = arrWords[i].split('').reverse().join('')
  }
  
  return arrWords.join(' ')
}
