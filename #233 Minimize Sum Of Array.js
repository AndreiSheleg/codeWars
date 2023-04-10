const minSum = arr => {
 let sortArr = arr.sort( (a,b) => a - b )
 let sum=0
 
 for (let i=0; i<arr.length/2; i++) {
 sum += sortArr[i] * sortArr[sortArr.length - 1 - i]
 }
  
 return sum
}
