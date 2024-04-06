const titleCase = (title, minorWords) => {
  if (!title) return ''

  const minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : []
  const titleArray = title.toLowerCase().split(' ')

  const capitalizedTitle = titleArray.map( (word, index) => {
    if (index === 0 || !minorWordsArray.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    } else {
      return word
    }
  });

  return capitalizedTitle.join(' ')
}
