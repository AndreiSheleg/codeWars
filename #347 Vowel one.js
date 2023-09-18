const vowelOne = s => {
  let arrOfVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return s.split('').map(letter => (arrOfVowels.includes(letter)) ? 1 : 0 ).join('')
}
