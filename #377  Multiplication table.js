const multiplicationTable = size => {
  const tableResult = []
  
  for (let i = 1; i <= size; i++) {
    const row = []
    for (let j = 1; j <= size; j++) {
     row.push(i * j)
    }
    tableResult.push(row)
  }
  
  return tableResult
}
