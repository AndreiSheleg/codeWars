const createDict = (keys, values) => {
  let resultObj = {}
  for (let i = 0; i < keys.length; i++) {
    if (i < values.length) {
      resultObj[ keys[i] ] = values[i]
    } else {
      resultObj[ keys[i] ] = null
    }
  }
  return resultObj
}
