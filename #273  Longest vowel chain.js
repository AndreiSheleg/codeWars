const solve = s => {
  let result = 1
  console.log('--> текущее s: ', s)
  
  for (let i = 0; i < s.length - 1; i++) {
    let count = 1
    let newArr = []
    console.log('текущий i: ', i)
    let condition1 = s[i] === 'a' ? 
    true : s[i] === 'e' ?
    true : s[i] === 'i' ?
    true : s[i] === 'o' ?
    true : s[i] === 'u' ?
    true : false
      
    console.log('s[i] = ', s[i], ' ; condition1 = ', condition1)
    
    let condition2 = s[i + 1] === 'a' ? 
    true : s[i + 1] === 'e' ?
    true : s[i + 1] === 'i' ?
    true : s[i + 1] === 'o' ?
    true : s[i + 1] === 'u' ?
    true : false
    
    console.log('s[i+1] = ', s[i+1], ' ; condition2 = ', condition2)
    
    if( condition1 && condition2 ) {
      result += 1
      console.log('---------------------result = ', result)
    }
  }
  
 return result
}
