const gimme = triplet => {
let sortArr = [...triplet];
  sortArr.sort((a,b) => a - b)
  return triplet.indexOf(sortArr[1])
}
