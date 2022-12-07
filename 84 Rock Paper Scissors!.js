const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  let winNumber = 0;
  
  if (p1 === 'scissors' && p2 === 'paper') winNumber = 1;
  if (p1 === 'paper' && p2 === 'scissors') winNumber = 2;

  if (p1 === 'scissors' && p2 === 'rock') winNumber = 2;
  if (p1 === 'rock' && p2 === 'scissors') winNumber = 1;
  
  if (p1 === 'paper' && p2 === 'rock') winNumber = 1;
  if (p1 === 'rock' && p2 === 'paper') winNumber = 2;
  
  return `Player ${winNumber} won!`
};
