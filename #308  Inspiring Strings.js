const longestWord = stringOfWords => {
  let newArr = stringOfWords.split(' ').sort( (a,b) => a.length - b.length )
  console.log(newArr[newArr.length - 1])
  return newArr[newArr.length - 1].toString()
}
