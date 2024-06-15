const looseChange = cents => {

  if (cents <= 0) {
    return {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};
  }

  let centsRounDown = Math.floor(cents)
  //console.log('centsRounDown: ', centsRounDown)

   let quarters = Math.floor(centsRounDown / 25)
  centsRounDown %= 25


  let dimes = Math.floor(centsRounDown / 10)
  centsRounDown %= 10

  let nickels = Math.floor(centsRounDown / 5)
  centsRounDown %= 5

  let pennies = centsRounDown

  return {'Nickels': nickels, 'Pennies': pennies, 'Dimes': dimes, 'Quarters': quarters};
}
