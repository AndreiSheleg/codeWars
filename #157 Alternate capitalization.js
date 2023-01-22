const capitalize = s => {
  
  //проверка чётность и нечётность
  let word1 = s.split('').map( (v,i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase() ).join('')
  let word2 = s.split('').map( (v,i) => i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase() ).join('')
   
  return [word1, word2];
};
