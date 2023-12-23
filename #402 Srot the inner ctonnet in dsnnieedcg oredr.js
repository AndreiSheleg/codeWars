const sortTheInnerContent = words => {
  return words.split(' ').map(word => {
    if (word.length <= 2) {
      return word
    } else {
      const innerContent = word.slice(1, -1)
      const sortedInnerContent = innerContent.split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')
      return word[0] + sortedInnerContent + word[word.length - 1]
    }
  }).join(' ')
}
