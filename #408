const isValidWalk = walk => {
  if (walk.length !== 10) {
    return false
  }

  let x = 0
  let y = 0

  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i]

    if (direction === 'n') {
      y++
    } else if (direction === 's') {
      y--
    } else if (direction === 'e') {
      x++
    } else if (direction === 'w') {
      x--
    }
  }

  return x === 0 && y === 0
}
