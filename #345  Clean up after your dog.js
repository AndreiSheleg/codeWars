const crap = (x, bags, cap) => {
 let crap = 0
 let dog = 0
 let newArr = x.map(el1 => el1.map( el2 => el2 === '@' ? crap += 1 : el2 === 'D' ? dog += 1 : el2) )
  console.log('newArr: ', newArr)
  
 if ( dog > 0 ) {
   return "Dog!!"
   }
  
 return crap > (bags*cap) ? "Cr@p" : "Clean"
}
