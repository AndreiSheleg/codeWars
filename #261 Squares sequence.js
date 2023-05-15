const squares = (x, n) => {
  

if (n <= 0 ) {
  return []
}
  
  let result = [x]

  for (let i = 0; i < n - 1; i++) {
    let squares = result[i]
    result = [...result, squares ** 2]
  }
return result
}
