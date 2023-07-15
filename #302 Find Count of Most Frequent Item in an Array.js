const mostFrequentItemCount = collection => {
 if (collection.length === 0) {
   return 0
 }
  
  let result = 0
  
  result = Math.max( ...collection.map(elMap => collection.filter( elFilter => elFilter === elMap ).length ) )
  
  return result
}
