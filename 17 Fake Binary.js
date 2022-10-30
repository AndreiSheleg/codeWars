function fakeBin(x){
let result = [];
let newArr = x.split("");

  for (let i = 0; i < newArr.length; i++ ) {
    if (newArr[i] < 5) {
      result.push(0);
    } else {
      result.push(1);
    };
    };
  return result.join("");
}
