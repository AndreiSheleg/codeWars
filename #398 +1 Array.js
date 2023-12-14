const upArray = arr => {

  if (arr.length === 0 || arr.some(num => num < 0 || num > 9)) {
    return null
  }
  
  const arrCopy = [...arr]

  let carry = 1
  
  for (let i = arrCopy.length - 1; i >= 0; i--) {
    let sum = arrCopy[i] + carry
    arrCopy[i] = sum % 10
    carry = Math.floor(sum / 10)
  }

  // If there's still a carry, add it as a new element at the beginning
  if (carry > 0) {
    arrCopy.unshift(carry)
  }

  return arrCopy
}
