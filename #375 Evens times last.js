const evenLast = numbers => {
  if (numbers.length === 0) {
    return 0
  }
  
  let sum = 0
  const lastIndex = numbers.length - 1
  
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i]
  }
  
  return sum * numbers[lastIndex]
}
