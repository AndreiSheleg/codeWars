const getSum = ( a,b ) => {
   let maxNumber = Math.max(a, b);
   let minNumber = Math.min(a, b);  
  return (
  (maxNumber - minNumber  + 1) * (maxNumber + minNumber) / 2
  )
}
