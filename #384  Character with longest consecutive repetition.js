function longestRepetition(s) {
  if (s === "") {
    return ["", 0];
  }

  let currentChar = s[0];
  let currentLength = 1;
  let longestChar = currentChar;
  let longestLength = currentLength;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentLength++;
    } else {
      currentChar = s[i];
      currentLength = 1;
    }

    if (currentLength > longestLength) {
      longestChar = currentChar;
      longestLength = currentLength;
    }
  }

  return [longestChar, longestLength];
}
