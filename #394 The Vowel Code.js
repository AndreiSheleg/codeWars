const encode = string => {
  
  const vowelsPairs = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  
  let changedStr = string.split('')
                        .map(el => vowelsPairs[el] || el)
                        .join('')

  return changedStr
}

const decode = string => {
  
    const numbersPairs = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
    
    let decodedStr = string.split('')
                            .map(el => numbersPairs[el] || el )
                            .join('')
  return decodedStr
}
