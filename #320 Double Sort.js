const dbSort = a => {
  let stringsArr = a.filter (el => typeof el === 'string').sort()
  
  let numbersArr = a.filter(el => typeof el === 'number').sort( (a,b) => a - b)
  
  return [...numbersArr, ...stringsArr]
}
