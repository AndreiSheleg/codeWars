const solve = (a,b) => {
 let result = ''
 
 for (let i = 0; i < a.length; i++) {
   if ( !b.includes(a[i]) ) {
     result += a[i]
   }
 }
  
   for (let j = 0; j < b.length; j++) {
   if ( !a.includes(b[j]) ) {
     result += b[j]
   }
 }
  
  return result
}

// const solve = (a,b) => {
//  return (a+b).split("").filter(el => !a.includes(el) || !b.includes(el)).join('')
// } - short solution
