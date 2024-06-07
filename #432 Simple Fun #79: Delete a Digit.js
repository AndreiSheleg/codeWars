const deleteDigit = n  => {
  const digits = String(n)
  let maxNumber = -1000000000

  for (let i = 0; i < digits.length; i++) {
    let newNumber = Number(digits.substring(0, i) + digits.substring(i + 1))
    if (newNumber > maxNumber) {
      maxNumber = newNumber
    }
  }

  return maxNumber
}
