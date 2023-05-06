const isSortedAndHow = array => {
  
  const arrSortedAscending = [...array].sort((a,b) => a - b)
  
  const arrSortedDescending = [...array].sort((a,b) => b - a)

  if( array.toString() === arrSortedAscending.toString() ) {
    return 'yes, ascending'
  } else if (array.toString() === arrSortedDescending.toString()  ) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}
