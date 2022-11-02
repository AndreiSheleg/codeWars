function getCount(str) {
  let countOfVowels = 0;
  
  for (let i = 0; i < str.length; i++ ) {
    switch (str[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        countOfVowels += 1;
        break;
    };
  };
  
  return countOfVowels;
}
