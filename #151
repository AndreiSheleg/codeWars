const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = []
  l1 = a1.map(str => str.length) 
  
  let l2 = []
  l2 = a2.map(str => str.length)
  
  let result1 = Math.max(...l1) - Math.min(...l2)
  let result2 = Math.max(...l2) - Math.min(...l1)
  
  return Math.max(result1, result2)
}
