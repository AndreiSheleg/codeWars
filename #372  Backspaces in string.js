function cleanString (inputString) {
  const result = []

  for (let i = 0; i < inputString.length; i++) {
    inputString[i] === "#" ? result.pop() : result.push(inputString[i])

  }

  return result.join('')
}
