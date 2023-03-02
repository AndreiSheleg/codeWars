const narcissistic = value => {

  let valArr = (value + '').split('')
  let sum = 0
  let num = valArr.map(el => sum += ( (+el) ** valArr.length) )
  
  return sum === value
}


// const narcissistic = value => +(''+value).split('').reduce((s,n,_,a) => s + Math.pow(n,a.length),0) == value
