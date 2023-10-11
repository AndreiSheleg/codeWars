const findUniq = arr => {
  let sortedArr = [...arr].sort()
  //console.log('sortedArr: ', sortedArr)
  return sortedArr[0] !== sortedArr[1] ? sortedArr[0] : sortedArr[sortedArr.length - 1]
}
