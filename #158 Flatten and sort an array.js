const flattenAndSort = array => {
let result = []
  return result.concat(...array).sort( (a,b) => a - b)
}
