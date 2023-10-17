const high = x => {
  const wordsArr = x.split(' ')

  let highestScore = 0
  let highestScoringWord = ''

  for (let i = 0; i < wordsArr.length; i++) {
    const currentWord = wordsArr[i]
    let currentScore = 0

    for (let j = 0; j < currentWord.length; j++) {
      // 'a' has value 97
      currentScore += currentWord.charCodeAt(j) - 96;
    }

    if (currentScore > highestScore) {
      highestScore = currentScore
      highestScoringWord = currentWord
    }
  }

  return highestScoringWord
}
