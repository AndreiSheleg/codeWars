const sumOfN = n => {
let result = [0]
for (let index = 1; index <= Math.abs(n); index++) {
  result = [...result, result[index - 1] + index * Math.sign(n) ]
}
  return result
};
