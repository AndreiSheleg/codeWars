const printerError = s => {
    let result = 0
    for (let i = 1; i < s.length; i++) {
      if (s[i] > 'm') {
        result++
      }
    }
  return `${result}/${s.length}`
}
