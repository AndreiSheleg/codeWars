const spacey = array => {
  let currentString = ''
  let result = []

  for (let i = 0; i < array.length; i++) {
    currentString += array[i].replace(/\s/g, '')
    array[i] = currentString
    result[i] = currentString
  }

  return result
}

// const spacey = array => {
// 	let currentString = ''
// 	return array.map( el => currentString += el )
// }
