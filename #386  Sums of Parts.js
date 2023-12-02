const partsSums = ls => {
  let result = []
  let totalSum = ls.reduce((acc, curr) => acc + curr, 0)
  let currentSum = 0

  for (let i = 0; i <= ls.length; i++) {
    result = [...result, totalSum - currentSum]
    //result.push(totalSum - currentSum);
    currentSum += ls[i] || 0
  }

  return result
}
