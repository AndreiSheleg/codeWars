const findOdd = arr => {
let result = 0

for (let i = 0; i < arr.length; i++) {
  let currentNum = arr[i]
  result = result ^ currentNum
}
  return result
}
