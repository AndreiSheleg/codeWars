const capitalize = (s,arr) => {
  
  let result = []
  result = s.split('')
   
  for (let i = 0; i < arr.length; i++) {
    if( result[ arr[i] ] ) {
      result[ arr[i] ] = result[ arr[i] ].toUpperCase()
    }
  }
 
  return result.join('')
}
