const findShort = (s) => {
  let result = [];
  result = s.split(' ').map(currentWord => currentWord.length).sort((a, b) => a - b);
  return result[0];
}
