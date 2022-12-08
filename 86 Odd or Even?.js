const oddOrEven = array => {
   let sumOfArray = 0;
  for (let i = 0; i < array.length; ++i) {
    sumOfArray += array[i];
    }
  return (sumOfArray % 2 === 0 ? 'even' : 'odd')
}
