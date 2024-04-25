const race = (v1, v2, g) => {
  if (v1 >= v2) {
    return null
  }

  const timeInSeconds = Math.floor( 3600 * g / (v2 - v1) )
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = Math.floor(timeInSeconds % 60)

  return [hours, minutes, seconds]
  
}
