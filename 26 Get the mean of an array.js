function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let result = 0;
  let average = 0;
  for (let i = 0; i < marks.length; i++) {
    result += marks[i];
    average = result / marks.length;
  };
  
  return Math.floor(average);
}
