function sumArray(array) {

if (array === null) {
  return 0
} else if (array.length < 2) {
  return 0;
};
  
  let resultArray = [...array];
  resultArray.sort((a,b) => a - b)
  
  let sumOfArray = 0
  for (let i = 1; i < resultArray.length - 1; ++i) {
    sumOfArray += resultArray[i]
  }

  return sumOfArray
}
