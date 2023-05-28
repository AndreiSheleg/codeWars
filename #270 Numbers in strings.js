const solve = s => {
let myRgx = /\d+/g
let result = s.match(myRgx)
console.log(result)
  return Math.max(...result)
}
