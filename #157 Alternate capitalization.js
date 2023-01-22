const capitalize = s => {
  
  //проверка чётность и нечётность even || odd
  let word1 = s.split('').map( (x,i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase() ).join('')
  let word2 = s.split('').map( (x,i) => i % 2 !== 0 ? x.toUpperCase() : x.toLowerCase() ).join('')
   
  return [word1, word2];
};
