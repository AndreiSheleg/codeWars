const solution = number => {
let sumTotal = 0

  for(let i = 1; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sumTotal += i
    }
  }
  
  return sumTotal
}
