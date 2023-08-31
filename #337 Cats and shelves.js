const solution = (start, finish) => {
  let result = 0
  let delta = finish - start
  
  for (let i = 0; delta > 0; i++) {
    if (delta > 2) {
      delta -= 3
      result++
    } else {
      delta -= 1
      result++
    }
  }
  return result
}
