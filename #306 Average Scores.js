const average = scores => {
  let sumOfArr = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  let average  = sumOfArr / scores.length
    
  return Math.round( average )
  }
