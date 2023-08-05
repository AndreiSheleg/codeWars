const spinWords = sentence => {
  const sentenceArray = sentence.split(' ')
  let result = ''
  sentenceArray.map( (elem, index) => {
    if (elem.length >= 5){
      sentenceArray[index] = elem.split('').reverse().join('');
    } else {
      sentenceArray[index] = elem
    }
  result = sentenceArray.join(' ')
  })
  
return result
}
