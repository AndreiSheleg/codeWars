
const parse = data => {
  let resultArr = []
  let currentValue = 0
  
  for (let j = 0; j < data.length - 1; j++) {
    switch (data[j]) {
      case 'i':
        currentValue++
        break
      case 'd':
        currentValue--
        break
      case 's': 
        currentValue = currentValue * currentValue      
        break
      case 'o':
        resultArr.push(currentValue)
        break
  }
}
  return resultArr
  }
