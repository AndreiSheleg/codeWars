const shiftedDiff = (first, second) => {
  if (first.length !== second.length) {
    return -1
  }

  const concatenated = second + second
  for (let i = 0; i < concatenated.length; i++) {
    const rotated = concatenated.slice(i, i + first.length)
    if (rotated === first) {
      return i
    }
  }

  return -1
}
