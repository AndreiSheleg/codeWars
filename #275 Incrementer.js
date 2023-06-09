const incrementer = nums => { 
  if(!nums) return[]
  return nums.map((el,index) => (el + index + 1) % 10 )
}
