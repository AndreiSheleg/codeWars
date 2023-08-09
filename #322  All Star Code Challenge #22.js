const toTime = seconds => {
  let hours = 0
  
  while (seconds >= 3600) {
    hours += 1
    seconds -= 3600
  }
  
  let minute = Math.trunc( seconds / 60 )
  return `${hours} hour(s) and ${minute} minute(s)`
}
