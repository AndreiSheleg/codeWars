function maps(x){
const doubleArr = [];
  for ( let i = 0; i < x.length; i++) {
    const currentNumber = x[i];
    const doubleNumber = currentNumber * 2;
    doubleArr.push(doubleNumber)
  };
  return doubleArr;
}
