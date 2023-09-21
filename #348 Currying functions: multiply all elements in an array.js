const multiplyAll = array => {
  return function(multiplier) {
    return array.map(element => element * multiplier)
  }
}
