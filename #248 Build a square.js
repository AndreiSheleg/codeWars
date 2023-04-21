const generateShape = integer => {
  let str = ''
   let arr = []
   for (let i = 0; i < integer; i++) {
    str += '+'
   }
   for (let i = 0; i < integer; i++) {
     arr.push(str)
   }
   return arr.join('\n')
 }
