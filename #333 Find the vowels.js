const vowelIndices = word => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let indexArr = []
    
  let result = word.toLowerCase().split('').filter((letter, index) => {
      if( vowels.includes(letter) ) {
      indexArr = [...indexArr, Number(index + 1)]
       }
  })
  return indexArr
  
}
