const pattern = n => {
  if ( n < 1 ) {
    return ''
  }
 
  let result = []
  
  for (let i = 1; i <= n; i++) {
    let currentStr = String(i).repeat(i)
    result = [...result, currentStr]
  }
 

 return result.join('\n')
}
