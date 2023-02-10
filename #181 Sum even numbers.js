const sumEvenNumbers = input => {
  let sumOfEven = 0
  
  if (input == 0 || input == []) return 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0 && input[i] % 1 === 0) {
      sumOfEven += input[i]
    }
  }
  return sumOfEven
  }
