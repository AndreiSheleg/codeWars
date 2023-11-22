const towerBuilder = nFloors => {
  const result = []
  
  for (let i = 0; i < nFloors; i++) {
    const spaces = ' '.repeat(nFloors - i - 1)
    const towerBlocks = '*'.repeat(i * 2 + 1)
    
    const floor = spaces + towerBlocks + spaces
    
    result.push(floor)
  }
  
  return result
}
