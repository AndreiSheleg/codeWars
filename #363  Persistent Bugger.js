const persistence = num => {
   if (num <= 10) {
     return 0
   }
  let count = 1
  let multiplyNumbers = num.toString().split('').reduce((acc, current) => parseInt(acc) * parseInt(current))

  
  while (multiplyNumbers >= 10) {
    count++
    multiplyNumbers = multiplyNumbers.toString().split('').reduce((acc, current) => parseInt(acc) * parseInt(current))

  }
  return count
}
