const count = string => {  

  let result = {}
  let strArr = string.split('')
  
  strArr.forEach(element => {
    result[element] = result[element] ? (result[element] + 1) : 1
    
  })
  console.log(result)
  return result
  
}
