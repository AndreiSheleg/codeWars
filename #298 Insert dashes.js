const insertDash = num => {
  let result = ''
  let str = num.toString()
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result += '-'
    }
    result += str[i]
  }
  return result
}
