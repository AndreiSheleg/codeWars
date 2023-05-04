const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  console.log(new Date(expirationDate))
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
}
