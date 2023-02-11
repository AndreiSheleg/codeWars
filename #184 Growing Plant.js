const growingPlant = (upSpeed, downSpeed, desiredHeight) => {

  if (downSpeed > upSpeed) {
    return -1
  }
  
  let height = downSpeed
  let days = 0
  do {
    days++
    height -= downSpeed
    height += upSpeed
  } while (height < desiredHeight)
  
  return days
}
