/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
const triangleType = (a, b, c) => {
    const maxSide = Math.max(a, b, c)
    
    const conditionNotTriangle = a + b + c <= 2 * maxSide
    const conditionRightTriangle = 2 * maxSide * maxSide === a * a + b * b + c * c
    const conditionObtuseTriangle = 2 * maxSide * maxSide >  a * a + b * b + c * c
  
  if (conditionNotTriangle) {
    return 0
  }
  if (conditionRightTriangle) {
    return 2
    }
  if (conditionObtuseTriangle) {
    return 3
    }
  
  return 1
}
