const dashatize = num => {
  
  let str = Math.abs(num).toString()
  let result = ''
  
  for ( let i = 0; i < str.length; i++ ) {
    str[i] % 2 === 1 ? result += `-${str[i]}-` : result += str[i];
  }
  
  if (result[0] === '-') {
    result = result.slice(1)
    }
  if (result[result.length - 1] === '-' ) {
    result = result.slice(0, result.length - 1)
}
  
  return result.replace(/--/g, '-');
}
