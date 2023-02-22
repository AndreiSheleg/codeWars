const findDeletedNumber = (arr, mixArr) => {
  if (arr.length === mixArr.length) return 0
  
  let sortedMixArr = mixArr.sort((a, b) => a - b)
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedMixArr[i]) return arr[i]
      }
}
