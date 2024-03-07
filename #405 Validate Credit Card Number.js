function validate(number){
  const digits = number.toString().replace(/\D/g, '')
  
  if (digits.length < 1 || digits.length > 16) {
    return false
  }

  let sum = 0
  let isDoubleDigits = false

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);

    if (isDoubleDigits) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit
    isDoubleDigits = !isDoubleDigits
  }

  return sum % 10 === 0
}
