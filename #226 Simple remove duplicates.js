const solve = arr => {
  
  let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
  
  for (let i = 0; i < newArr.length; i++){
    arr.splice(arr.indexOf(newArr[i]), 1)
  }
  return arr
}
