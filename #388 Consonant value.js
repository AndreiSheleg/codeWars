const solve = str => {
  const consonants = "bcdfghjklmnpqrstvwxyz"
  let maxVal = 0
  let currentVal = 0

  for (let i = 0; i < str.length; i++) {
    if (consonants.includes( str[i] ) ) {
      currentVal += str.charCodeAt(i) - 96
    } else {
      if (currentVal > maxVal) {
        maxVal = currentVal
      }
      currentVal = 0
    }
  }

  if (currentVal > maxVal) {
    maxVal = currentVal
  }

  return maxVal
}
