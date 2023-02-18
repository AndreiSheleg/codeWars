const getSumOfDigits = integer => {
  let sum = 0
  let newArr = integer.toString().split('')
  
  for (let i = 0; i < newArr.length; i++) {
    sum += +newArr[i]
  }
  
  return sum
}
