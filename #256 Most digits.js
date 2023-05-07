const findLongest = array => {
  let result = []
  let newArr = array.map(el => el.toString().split(''))
  
  result = newArr.map(el => el.length) 
  
  let maxLength = Math.max(...result)

  return array[result.indexOf(maxLength)]
}
