const numberOfPairs = gloves => {

  let glovesObj = gloves.reduce( (acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})

  let result = 0

  for(color in glovesObj){
    result += Math.floor(glovesObj[color] / 2)
  }

  return result
}
