function filter_list(l) {
  // Return a new array with the strings filtered out
  let newArr = l.filter(currentValue => typeof currentValue === 'number');
  return newArr;
}
