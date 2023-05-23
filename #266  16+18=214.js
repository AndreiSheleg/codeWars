const add = (num1, num2) => {
    let num1toArr = num1.toString().split('').reverse()
    let num2toArr = num2.toString().split('').reverse()
    let maxLength = Math.max(num1toArr.length, num2toArr.length)
    
    let resultArr = []
    
    for (let i = maxLength - 1; i >= 0 ; i--) {
      let currentNumber = Number(num1toArr[i] || 0) + Number(num2toArr[i] || 0)
      console.log(currentNumber)
      resultArr = [...resultArr, currentNumber]
    }
  
  return Number(resultArr.join(''))
}
