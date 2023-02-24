const arrayDiff = (a, b) => {
  if (a.length === 0 || b.length === 0) return a
  
  let resutlArr = []
  
  for (let i = 0; i < a.length; i++) {
    if(b.indexOf(a[i]) === -1) resutlArr.push(a[i])
  }
    return resutlArr
}
