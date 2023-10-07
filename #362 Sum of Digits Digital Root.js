const digitalRoot = n => {
  if (n < 10) {
    return n
  }
 let sum =  n.toString().split('').reduce((acc, current) => parseInt(acc) + parseInt(current), 0)
 
  while (sum > 9 ) {
  sum =  sum.toString().split('').reduce((acc, current) => parseInt(acc) + parseInt(current), 0)
  }
return sum
}
