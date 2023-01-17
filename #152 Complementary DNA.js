const DNAStrand = dna => {
  const symbols = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  
 let result = ''
 let arrayDna = dna.split('')
 let newArr = arrayDna.map(x => symbols[x])
 
 result = newArr.join('')
 return result
