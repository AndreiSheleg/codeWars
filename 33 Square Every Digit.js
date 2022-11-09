function squareDigits(num){
  let result = 0;
  let numStr = num.toString();
 // warning - .split ('')
  let numArr = numStr.split('');
  let numArrResult = [];
  
  for (let i = 0; i < numArr.length; i++) {
    let currentEl = +numArr[i];
    let currentSquare = currentEl ** 2;
    numArrResult.push(currentSquare);
  };
  
  result = numArrResult.join('');
  return +result;
}
