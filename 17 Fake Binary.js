function fakeBin(x){
let result = "";
let newArr = x.split();

  for (let i = 0; i < newArr.length; i++ ) {
    if (newArr[i] < 5) {
      newArr[i] = 0;
    } else if (newArr[i] => 5) {
      newArr[i] = 1;
    };
    result = newArr.join('');
  };
  return result;
}
