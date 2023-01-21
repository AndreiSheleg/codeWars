const solve = s => {
    let numOfUpper = 0
    let numOfLower = 0
    
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() ) numOfUpper += 1
    if (s[i] === s[i].toLowerCase() ) numOfLower += 1
  }
    
  if (numOfUpper <= numOfLower) {
      return s.toLowerCase()
    } else {
      return s.toUpperCase()
    }
  }
