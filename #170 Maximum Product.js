const adjacentElementsProduct = array => {
  let maxMultiplayArray = -100000000000
  array.map((element,i,arrNew) => arrNew[i] * arrNew[i + 1] > maxMultiplayArray ? maxMultiplayArray = arrNew[i] * arrNew[i + 1] : maxMultiplayArray)
  return maxMultiplayArray
} 
