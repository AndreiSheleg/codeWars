const toWeirdCase = string => {

  return string.split(' ')
                          .map( (word, index) => word.split('')
                          .map((char, j) => j % 2 === 0 ? char.toUpperCase() : 
                               char.toLowerCase() ).join(''))
                          .join(' ')
  
  
}
