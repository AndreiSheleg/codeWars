const isLucky = n => {
  let arr = n.toString().split('')
  let sumOfAllDigits = 0
  for (let i = 0; i < arr.length; i++) {
    sumOfAllDigits += parseInt(arr[i])
  }
  console.log('arr: ', arr)
  console.log('sumOfAllDigits: ', sumOfAllDigits)
  
   
  return sumOfAllDigits % 9 === 0 ? true : sumOfAllDigits === 0 ? true : false ;
}
