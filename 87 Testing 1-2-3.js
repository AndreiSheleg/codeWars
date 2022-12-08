const number = array => {
  let result = []
  if (array.length === 0) return result;
  
  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`)
  }
  return result
}
