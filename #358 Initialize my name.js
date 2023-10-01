const initializeNames = name => {
  let arr = name.split(' ')
  
   for (let i = 1; i < arr.length - 1; i++) 
       arr[i] = `${arr[i].slice(0, 1)}.`
  //        arr[i] = arr[i].charAt(0) + '.'
   return arr.join(' ')
  }
