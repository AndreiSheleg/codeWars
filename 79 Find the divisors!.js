const divisors = integer => {
let arrDivisors = [];
  for (let i = 2; i < integer; i++)
    if (integer % i === 0) {
      arrDivisors.push(i)
    };
  if (arrDivisors.length === 0) {
    return integer + ' is prime';
  } else {
  return   arrDivisors  
  };
};
