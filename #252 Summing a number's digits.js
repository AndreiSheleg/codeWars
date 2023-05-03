const sumDigits = number => {
    let result = 0
    let myArr = Math.abs(number).toString().split('')
    
  for (let i = 0; i < myArr.length; i++) {
    result += +myArr[i]
      }
  
  return result
}
