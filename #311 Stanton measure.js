/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/
const stantonMeasure = array => {
  let result = array.filter(el => el === array.filter(el2 => el2 === 1).length)
  return result.length
}
