const sortArray = array => {
  let oddArray = array.filter(el => el % 2 !== 0).sort((a,b) => a - b)
  
  return array.map(el => el % 2 !==0 ? oddArray.shift() : el)
}
