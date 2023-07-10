const sumOfIntegersInString = s => {
  let newArr = s.split(/([^0-9])/g).map(el => parseInt(el) ).filter(Boolean)
  return newArr.reduce( (acc,el)=> acc+el,0 )

}
