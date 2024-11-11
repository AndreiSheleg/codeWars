const toLeetSpeak = str => {
  const leetAlphabet = {
  A : '@',  B : '8',  C : '(',  D : 'D',  E : '3',  F : 'F',  G : '6',  H : '#',  I : '!',  J : 'J',
  K : 'K',  L : '1',  M : 'M',  N : 'N',  O : '0',  P : 'P',  Q : 'Q',  R : 'R',  S : '$',  T : '7',
  U : 'U',  V : 'V',  W : 'W',  X : 'X',  Y : 'Y',  Z : '2'
}
  let result = ''
  
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]
    result += leetAlphabet[currentChar] || currentChar
  }
  
  return result
//   let worfsArr = str.split(' ')
//   console.log('worfsArr: ', worfsArr)

}

  // return str.split('').map(char => alpha[char] || char).join('') - short solution
