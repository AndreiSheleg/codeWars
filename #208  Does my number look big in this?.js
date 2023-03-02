const narcissistic = value => {

  let valArr = (value + '').split('')
  let sum = 0
  let num = valArr.map(el => sum += ( (+el) ** valArr.length) )
  
  return sum === value
}
