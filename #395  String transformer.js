const stringTransformer = str => {
  const strArray = str.split(' ')
  const changedStr = strArray.map(word =>
    word.split('').map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() )
                        .join('')
                                  )

  return changedStr.reverse().join(' ')

}
