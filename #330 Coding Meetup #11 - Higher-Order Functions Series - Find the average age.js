const getAverageAge = list => {
  let sum = 0
    for (let i = 0; i < list.length; i++) {
    sum += list[i]['age']
  }
  return Math.round( sum / list.length)
}
