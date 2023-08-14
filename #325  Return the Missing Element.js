const getMissingElement = superImportantArray => {
  let missingElement = 0
  let sortedArr = superImportantArray.sort( (a,b) => a - b )
  for (let i = 0; i <= sortedArr.length; i++ ) {
    if (i === sortedArr[i]) {
      missingElement++
    }
      
  }
  return missingElement
}
