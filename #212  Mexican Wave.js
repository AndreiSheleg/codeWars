const wave = str => {
  let waveArr = []
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]
    if (currentChar === ' ') {
      continue
    } else {
      waveArr.push(str.slice(0, i) + currentChar.toUpperCase() + str.slice(i + 1))
    } 
  }
  return waveArr
}


// const wave = str => Array.from({length:str.length}, (_,i) => str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1)).filter(x => x!=str);
