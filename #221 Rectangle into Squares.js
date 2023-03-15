const sqInRect = (lng, wdth) => {
  
  let result = []
  
  if (lng === wdth) return null
  
  while(lng > 0 && wdth > 0) {
    
    if (lng > wdth) {
      result.push(wdth)
    } else {
      result.push(lng)
    }
    console.log (result)
    
    if (lng > wdth) {
      lng -= wdth
    } else {
      wdth -= lng
    }
  }
  return result
}
