const isValidIP = str => {
  
const grupsArr = str.split('.')
  
  if (grupsArr.length !== 4) {
    return false
  }
  
  for (let i = 0; i < grupsArr.length; i++) {
    const octet = grupsArr[i]
    
    if (!/^\d+$/.test(octet)) {
      return false
    }
    
    const octetValue = parseInt(octet, 10)
    if (octetValue < 0 || octetValue > 255) {
      return false
    }
    
    if (octet.length > 1 && octet[0] === '0') {
      return false
    }
  }
  
  return true
}
