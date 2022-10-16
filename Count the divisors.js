function getDivisorsCnt(n){
    // todo
  let result = 0;
  
  for (i = n; i > 0; i-=1) {
    if (n % i === 0) {
      result +=1;
    };
  };
  return result;
}
