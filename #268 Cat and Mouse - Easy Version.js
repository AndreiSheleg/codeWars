const catMouse = x => {
  let indexOfCat = x.indexOf('C')
  let indexOfMouse = x.indexOf('m')
  //console.log('index C = ',x.indexOf('C'))
  //console.log('index m = ',x.indexOf('m'))
    return (indexOfMouse - indexOfCat) > 4 ? 'Escaped!' : 'Caught!'
}
