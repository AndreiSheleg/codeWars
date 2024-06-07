const solve = arr => {
  const frequencies = {}
  const arrCopy = [...arr]

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    frequencies[element] = (frequencies[element] || 0) + 1
  }

  arrCopy.sort((a, b) => {
    if (frequencies[a] !== frequencies[b]) {
      return frequencies[b] - frequencies[a]
    } else {
      return a - b
    }
  });

  return arrCopy
}
