const stray = numbers => {
  let newArr = [...numbers]
  let result = 0
  newArr.sort((a,b) => a - b)
  if (newArr[0] === newArr[1]) {
    result = newArr[newArr.length - 1]
  } else {
    result = newArr[0]
  }
  return result
}
