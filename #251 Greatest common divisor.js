const mygcd = (x,y) => {
      
  let currentGreatestCommonDivisor
  let biggerY = y
  let biggerX = x
  
  while (biggerY > 0) {
    currentGreatestCommonDivisor = biggerY
    biggerY = biggerX % biggerY
    
    biggerX = currentGreatestCommonDivisor
  }
  return biggerX
}
