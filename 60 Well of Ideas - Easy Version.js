function well(x){

  let countOfGood = 0;
  
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      countOfGood += 1;
    };
  };
  
  if (countOfGood === 0) return 'Fail!';
    if (countOfGood >= 1 && countOfGood <= 2) return 'Publish!';
    if (countOfGood > 2) return 'I smell a series!';

}
