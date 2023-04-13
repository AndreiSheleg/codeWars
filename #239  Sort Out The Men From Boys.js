const menFromBoys = arr => {
 let even = [];
 let odd = [];
   for (let i = 0; i < arr.length; i++) {
   if(arr[i] % 2 === 0) {
     if(!even.includes(arr[i]))
     even.push(arr[i])
     } else {
     if(!odd.includes(arr[i]))
     odd.push(arr[i])
     }
   }
 let x = (even.sort( (a,b) => a - b ) +"," + odd.sort( (a,b) => b-a) )
 return x.split(",").map(Number)
}
