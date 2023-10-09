const toCamelCase = str => {
  let arrWords = str.split(/[-_]/)
  //console.log('arrWords: ', arrWords)
  let wordIntoCamelCase = arrWords[0].charAt(0) + arrWords[0].slice(1);

  for (let i = 1; i < arrWords.length; i++) {
    let capitalizedWord = arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1)
    wordIntoCamelCase += capitalizedWord
  }
//console.log('wordIntoCamelCase: ', wordIntoCamelCase)
  return wordIntoCamelCase
}
