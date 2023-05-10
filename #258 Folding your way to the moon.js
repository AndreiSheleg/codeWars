const foldTo = distance => {
  if (distance < 0) return null
  
  let howManyTimes = 0
  
  for (let i = 0.0001; i < distance; i *= 2) {
    howManyTimes += 1
  }
  return howManyTimes
}
