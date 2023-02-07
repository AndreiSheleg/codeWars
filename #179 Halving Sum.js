const halvingSum = n => {
  let sum = n
  let divisor = 2
  console.log(typeof(n) + ' ' + n)
  
  
  for (let i = n; i >= 1 ; i--) {
        sum = Math.floor(sum + i / divisor)
    console.log('в цикле = ' + sum)
  divisor *= 2
  }
return sum
}
