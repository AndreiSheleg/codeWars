function removeExclamationMarks(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
        result += "";
      } else {
    result += s[i];        
      };
  }
  return result;
}
