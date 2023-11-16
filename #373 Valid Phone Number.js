const validPhoneNumber = phoneNumber => {

  if (phoneNumber.length !== 14) {
    return false
  }

  if (
    phoneNumber[0] !== '(' ||
    phoneNumber[4] !== ')' ||
    phoneNumber[5] !== ' ' ||
    phoneNumber[9] !== '-'
  ) {
    return false
  }

  for (let i = 1; i <= 3; i++) {
    const digit = parseInt(phoneNumber[i]);
    if (isNaN(digit) || digit < 0 || digit > 9) {
      return false
    }
  }

  for (let i = 6; i <= 8; i++) {
    const digit = parseInt(phoneNumber[i]);
    if (isNaN(digit) || digit < 0 || digit > 9) {
      return false
    }
  }

  // Check from position 10 to 13 is a valid digit
  for (let i = 10; i <= 13; i++) {
    const digit = parseInt(phoneNumber[i])
    if (isNaN(digit) || digit < 0 || digit > 9) {
      return false
    }
  }

  return true
}

// Example usage:
console.log(validPhoneNumber("(123) 456-7890"));  // Output: true
console.log(validPhoneNumber("(1111)555 2345"));  // Output: false
console.log(validPhoneNumber("(098) 123 4567"));  // Output: false
