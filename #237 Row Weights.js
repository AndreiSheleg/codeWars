const rowWeights = array => {
  let sumOfOdd = 0
  let sumOfEven = 0
  
    for (let i = 0; i < array.length; i++) {
      if(i % 2 === 0){
      sumOfOdd += array[i]
      } else {
      sumOfEven += array[i]
      }
    }
    return [sumOfOdd, sumOfEven]
}
