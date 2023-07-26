const divisibleByThree = str => {

  // TRY TO AVOID USING THE % (MODULO) OPERATOR.

let resultingSum = str.split('').map(el => Number(el)).reduce((acc, current) => acc + current, 0)

let currentSum = resultingSum

while ( currentSum >= 3) {
  currentSum = currentSum - 3
  }
  
  return currentSum === 0
 
}
