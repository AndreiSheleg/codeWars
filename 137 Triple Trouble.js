const tripleTrouble = (one, two, three) => {
  let result = ''
  for(let i = 0; i < one.length; i++ ) {
    result += one[i]
    result += two[i]
    result += three[i]
  }
  return result
}
