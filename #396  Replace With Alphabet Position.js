const alphabetPosition = text => {
  const onlyLettersArr = [...text.replace(/[^a-z]/gi,'').toLowerCase()]

  const positionNumbersArr = onlyLettersArr.map(el => el.charCodeAt() - 96)
  
  return positionNumbersArr.join(' ')

}
