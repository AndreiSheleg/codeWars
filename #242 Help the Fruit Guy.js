const removeRotten = bagOfFruits => {

  let result = []
  
  if (bagOfFruits) {
    result = bagOfFruits.map( el => el.slice(0, 6) === 'rotten' ? el.slice(6).toLowerCase() : el )
  }
 
  return result
}
