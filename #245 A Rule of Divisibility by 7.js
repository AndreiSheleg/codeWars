const seven = m => {
  let numberOfSteps = 0
  
  while ((''+m).length > 2) {
    numberOfSteps++
    m = Math.floor(m / 10) - (m % 10) * 2
  }
  return [m, numberOfSteps]
}
