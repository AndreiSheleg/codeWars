const nthSmallest = (arr, pos) => {
  let sortedArr = arr.sort((a, b) => a - b)
  //console.log('sortedArr: ', sortedArr)
  
  return sortedArr[pos - 1]
}
