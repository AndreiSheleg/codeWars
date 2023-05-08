const isPowerOfTwo = n => {
  let result  = Math.log2(n)
    return result % 1 === 0
  // метод Number.isInteger возвращает true | false
  //return Number.isInteger(result)
}
