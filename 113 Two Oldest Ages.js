const twoOldestAges = ages => {
  let sortArr = [...ages]
  return sortArr.sort((a, b) => a - b).slice(-2)
}
