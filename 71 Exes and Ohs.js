const XO = (str) => {
    //code here
  let countX = 0;
  let countO = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      countX++
    } else if (str[i] === 'o' || str[i] === 'O') {
      countO++;
    };
  };
  return countX === countO;
}
