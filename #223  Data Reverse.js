const dataReverse = data => {
  
  if (data.length === 0) return []
  
  let arrayBytes = []
  let numberOfBlocks = data.length / 8
  
  for (let i = 0; i < numberOfBlocks; i++) {
    arrayBytes.push(data.splice(0,8))
      }
  
  return arrayBytes.reverse().join().split(',').map(el => el * 1 )
}
