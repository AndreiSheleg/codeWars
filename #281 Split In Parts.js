const splitInParts = (s, partLength) => {
  let result = []
  
  for (let i = 0; i < s.length; i += partLength) {
    let addedEl = s.slice( i, i + partLength)
    result = [...result, addedEl]
  
  }
  return result.join(' ')
}
