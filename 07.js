function squareArea(A){
const radius = (A * 180) / (Math.PI * 90);
 let result = radius * radius;
 
  return Math.round(result * 100) / 100;
