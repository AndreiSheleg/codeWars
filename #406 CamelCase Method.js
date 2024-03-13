String.prototype.camelCase = function() {
  const wordsArr = this.split(' ')

  const camelCaseWords = wordsArr.map((el, index) => {
    if (index === 0) {
      return el.charAt(0).toUpperCase() + el.slice(1)
    }
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  })

  return camelCaseWords.join('')
}
