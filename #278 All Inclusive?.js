const containAllRots = (strng, arr) => {
  for (let i = 0; i < strng.length; i++) {
    let condition = arr.indexOf(strng.slice(i) + strng.slice(0, i))
    if ( condition === -1) {
      return false
    }
  }
  return true
}
