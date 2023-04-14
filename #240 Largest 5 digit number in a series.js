const solution = digits => {
  let result = 0
  
  for (let i = 0; i < digits.length; i++ ) {
    let currentString = ''
    for (let j = i; j < i + 5; j++) {
      currentString += digits[j]
    }
    if (Number(currentString) > result) {
      result = Number(currentString)
    }
  }
  return result
}
