const smaller = nums => {
 return nums.map( (el, i) => {
   return nums.slice(i).filter(rightEl => rightEl < el).length
 });
}
