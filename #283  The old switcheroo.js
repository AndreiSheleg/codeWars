const vowel2index = (str) => {
     
   let fitredStr = str.split('').map( (el,i) => {
     
     let condition = el.toLowerCase() === 'a' ? 
              true : el.toLowerCase() === 'e' ?
              true : el.toLowerCase() === 'i' ?
              true : el.toLowerCase() === 'o' ?
              true : el.toLowerCase() === 'u' ?
              true : false
     
     if (condition) {
       return (i + 1)
     } else {
       return el
     }
   } )
   
   return fitredStr.join('')
}
