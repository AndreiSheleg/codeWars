const expandedForm = num => {
  
  let numStr = num.toString()
  let result = []
  
  for (let i = 0; i <  numStr.length; i++) {
    let currentDigit = numStr.length - i - 1
    console.log('currentDigit = ' + currentDigit)
    
    let j = 0
    let subNum = numStr[i]
    console.log('subNum = ' + subNum)
    
    if (numStr[i] !== '0') {
      while (j < currentDigit) {
        subNum = subNum + '0'
        j++
      }
      result.push(subNum)
    }
  }
  return result.join(' + ')
}
