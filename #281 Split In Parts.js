const swap = string => {
  let result = []
  let arrString = string.split('')
  
  if(!string) return ''
  
  for (let i = 0; i < string.length; i++) {
    let condition = arrString[i] === 'a' ? 
    true : arrString[i] === 'e' ?
    true : arrString[i] === 'i' ?
    true : arrString[i] === 'o' ?
    true : arrString[i] === 'u' ?
    true : false
    
    if (condition) {
      result = [...result, arrString[i].toUpperCase()]
    } else {
      result = [...result, arrString[i]]
    }
    
  }
  return result.join('')
}
