const points = games => {
  let resultScore = 0
  for (let i = 0; i < games.length; i++) {
    // games[i] = [1:0]
    if(games[i][0] > games[i][2]) resultScore += 3
    if(games[i][0] == games[i][2]) resultScore += 1
  }
    return resultScore
}
