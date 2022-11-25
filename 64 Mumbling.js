function accum(s) {
	// your code
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i < s.length - 1 ? '-' : '');    
  }
  return result;
}
