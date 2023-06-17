const hydrate = s => {
  let result = 0
  let newArr = s.split('').filter( el => !isNaN(el) ? Number(el) : null)
  
  for (let i = 0; i < newArr.length; i++) {
    result += +newArr[i]
  }
  
  return result < 2 ? `${result} glass of water` : `${result} glasses of water`
 
}

