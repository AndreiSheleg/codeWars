const sevenAte9 = str => {
  let resultStr = str[0]
    
  for (let i = 1; i < str.length - 1; i++) {
    resultStr += (str[i - 1] === '7' && str[i] === '9' && str[i + 1] === '7') ? '' : str[i]
  }
  
  resultStr += str[str.length - 1]
  
  return resultStr 
}
