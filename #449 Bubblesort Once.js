const bubblesortOnce = a => {
  const arr = [...a]
  
  for (let i = 0; i < arr.length - 1; i++) {
    
    if (arr[i] > arr[i + 1]) {
      let currentElement = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = currentElement
    }
  }
  
  return arr
}

// const bubblesortOnce = a => {
// return [...a].map( (el, i, arr) => el > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = el, arr[i]) : el )
// } - short solution
