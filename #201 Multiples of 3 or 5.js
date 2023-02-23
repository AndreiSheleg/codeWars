const solution = number => {
  let arr = []
  let multiple = []
  
  // push all num between 0 and the number to arr
  for (let i = 0; i < number; i++) {
    arr.push(i)
  }
  
  // if number in arr is a multiple or 3 or 5 push it to multiple
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i)
    }
  }
  
  // sum the total of the multiple array
  let sumTotal = 0
  for (let i = 0; i < multiple.length; i++) {
    sumTotal += multiple[i]
  }
  
  return sumTotal;
}
