const nbYear = (p0, percent, aug, p) => {
let sumOfPopul = 0;
let years = 0;
  while( sumOfPopul < p) {
 sumOfPopul = Math.floor(p0 + p0 * (percent / 100) + aug)
  p0 =  sumOfPopul;
  years += 1;
}
  return years
  }
