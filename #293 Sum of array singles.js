const repeats = arr => {

let sum = 0
let copyArr = [...arr].sort( (a, b) => a - b)

for (let i = 0; i < copyArr.length; i += 2) {
  if ( copyArr[i] !== copyArr[i + 1]) {
    sum += copyArr[i]
    i -= 1
  }
}
   return sum
}
