const factorial = n => {
  if (n < 0 || n > 12) {
    throw error
  } else if (n < 1) {
    return 1
  } else {
    return n * factorial(--n)
  }
}
