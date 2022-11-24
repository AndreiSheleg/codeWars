function index(array, n){
  //your code here
  let countElement = array[n];
  if (!countElement) return -1;
  return countElement ** n;
}
