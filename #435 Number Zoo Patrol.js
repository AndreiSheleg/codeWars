// return the missing number!
const findNumber = array => {
  const n = array.length + 1
  
  const totalSum = (n * (n + 1)) / 2
  
  const arraySum = array.reduce( (acc, currentNum) => acc + currentNum, 0)
  
  return totalSum - arraySum
}
