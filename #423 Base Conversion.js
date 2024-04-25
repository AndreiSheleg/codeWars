const convert = (input, source, target) =>{
  if (input === '0') {
    return target[0]
  }

  const sourceBase = source.length
  const targetBase = target.length

  let decimalValue = 0
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    const charIndex = source.indexOf(char)
    decimalValue += charIndex * Math.pow(sourceBase, input.length - 1 - i)
  }

  let result = ''
  while (decimalValue > 0) {
    const remainder = decimalValue % targetBase
    result += target[remainder]
    decimalValue = Math.floor(decimalValue / targetBase)
  }

  return result.split('').reverse().join('')
}
