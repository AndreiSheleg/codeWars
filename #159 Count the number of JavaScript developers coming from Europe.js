const countDevelopers = list => {
  
  let listEuropeJS = list.filter(developer => developer.continent === 'Europe' && developer.language === 'JavaScript' )
  return  listEuropeJS.length
  }
