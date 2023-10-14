const findMissingLetter = array => {
  let firstLetterCharCode = array[0].charCodeAt()
  //console.log('array[0]: ', array[0],'   firstLetterCharCode: ', firstLetterCharCode)
  for (let i = 0; i < array.length; i++) {
    if( firstLetterCharCode + i !== array[i].charCodeAt() ) {
      // returns missing letter
      return String.fromCharCode(firstLetterCharCode + i)
    }
  }
}
