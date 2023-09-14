const numberJoy = n => {
    let digitSum = n.toString().split('')
    let sum = 0

    for (let i = 0; i < digitSum.length; i++) {
  sum += parseInt(digitSum[i])
    }
  
  let reversingSum = sum.toString().split('').reverse().join('')

  return sum * reversingSum === n
}
