const twoDecimalPlaces = number => {

let arrFromNumber = number.toString().split('.');
  
  if (arrFromNumber.length > 1) {
    arrFromNumber[1] = arrFromNumber[1].slice(0, 2);
  }
  
  return parseFloat(arrFromNumber.join('.'))
}
