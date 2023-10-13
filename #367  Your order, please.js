const order = words => {
 if (words === "") {
    return ""
  }

  const wordsArr = words.split(" ")

  const sortedWords = wordsArr.sort((a, b) => {
    const numA = parseInt(a.match(/\d/)[0]);
    const numB = parseInt(b.match(/\d/)[0]);
    return numA - numB;
  })

  return sortedWords.join(" ")
  }
