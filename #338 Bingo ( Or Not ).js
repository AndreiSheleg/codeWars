const bingo = array => 
([2, 7, 9, 14, 15].every(bingoValue => array.includes(bingoValue)) ? 'WIN' : 'LOSE')
