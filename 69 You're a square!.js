var isSquare = function(n){
  if (n < 0) return false;

  return n ** 0.5 === Math.floor(n ** 0.5)
}
