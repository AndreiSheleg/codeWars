const countBits = n => {
  let arr = n.toString(2).split('')
  let bitCounting = 0
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '1') bitCounting += 1
  }
  return bitCounting
}
