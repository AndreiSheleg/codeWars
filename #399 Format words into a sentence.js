function formatWords(words) {
  if (!words || words.length === 0) {
    return ''
  }

  const filteredWords = words.filter(word => word !== "");
  if (filteredWords.length === 0) {
    return ""
  }

  if (filteredWords.length === 1) {
    return filteredWords[0]
  }

  const lastWord = filteredWords.pop()
  return `${filteredWords.join(", ")} and ${lastWord}`
}
