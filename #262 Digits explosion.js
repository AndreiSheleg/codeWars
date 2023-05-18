const explode = s => {
  let sToArr = s.split('')
  let result = ''
  
  for (let i = 0; i < sToArr.length; i++) {
    result += s[i].repeat(+s[i])
  }
  
  return result
}
