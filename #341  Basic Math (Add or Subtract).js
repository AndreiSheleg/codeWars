const calculate = str => {
  let result = str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-')
  console.log(result)
  return  eval(result).toString()
}
