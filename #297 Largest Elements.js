const largest = (n, array) => {
  let newArr = [...array].sort( (a,b) => a - b)
    return n < 1 ? [] : newArr.slice(-n)
}
