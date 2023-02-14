const getFirstPython = list => {
  let result = list.filter(el => el.language === 'Python')
  if (result.length === 0) return 'There will be no Python developers'
  return `${result[0].firstName}, ${result[0].country}`
} 
