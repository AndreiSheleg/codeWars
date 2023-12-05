const bingo = (ticket, win) => {
  let miniWinsResult = 0

  for (let i = 0; i < ticket.length; i++) {
    const [str, num] = ticket[i]
    let found = false

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        found = true
        break
      }
    }

    if (found) {
      miniWinsResult++
    }
  }

  if (miniWinsResult >= win) {
    return 'Winner!'
  } else {
    return 'Loser!'
  }
}
