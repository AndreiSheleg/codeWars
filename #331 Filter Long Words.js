const filterLongWords = (sentence, n) => {
  let resultArr = sentence.split(' ').filter(el => el.length > n)
  return resultArr
}
