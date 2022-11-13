function removeEveryOther(arr){
  //your code here
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if ( (i + 1) % 2 === 1 ) {
      result.push(arr[i]);
    };
  }
  
  return result;
}
