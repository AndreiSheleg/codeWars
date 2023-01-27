const triangular = n => {
  if (n <= 0) return 0
  let result = 0
  for (let i = 0; i <= n; i++) {
    result += i
  }
  return result
}
