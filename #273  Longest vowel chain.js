const solve = s => {
  let result = 1
  
  for (let i = 0; i < s.length - 1; i++) {
    let senten1 = s[i] === 'a' ? 
    true : s[i] === 'e' ?
    true : s[i] === 'i' ?
    true : s[i] === 'o' ?
    true : s[i] === 'u' ?
    false : false
      
    console.log('s[i] = ', s[i], ' ; senten1 = ', senten1)
    
    let senten2 = s[i + 1] === 'a' ? 
    true : s[i + 1] === 'e' ?
    true : s[i + 1] === 'i' ?
    true : s[i + 1] === 'o' ?
    true : s[i + 1] === 'u' ?
    false : false
    
    console.log('s[i+1] = ', s[i+1], ' ; senten2 = ', senten2)
    
    if( senten1 && senten2) {
      result += 1
      console.log('result = ', result)
    }
  }
  
 return result
}
