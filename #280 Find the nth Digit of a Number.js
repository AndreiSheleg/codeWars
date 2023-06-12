const findDigit = (num, nth) => {
    if (nth <= 0) {
      return -1
      }
    let result = '' + Math.abs(num)
    return +result.slice(result.length -nth,result.length-nth + 1 )
}
