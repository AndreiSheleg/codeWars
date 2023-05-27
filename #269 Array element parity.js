const solve = arr => {
  
  let resultIndexOfArr = 0
  
  while (arr.includes(-arr[resultIndexOfArr])) {
    resultIndexOfArr++
  }
  
  return arr[resultIndexOfArr]
}
