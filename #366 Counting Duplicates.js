const duplicateCount = text => {
const textLowercase = text.toLowerCase();
  let count = 0;
  const charCount = {};

  for (let i = 0; i < textLowercase.length; i++) {
    const currentChar = textLowercase[i];
    
    charCount[currentChar] = (charCount[currentChar] || 0) + 1;
    
    if (charCount[currentChar] === 2) {
      count++;
    }
  }

  return count;
}
