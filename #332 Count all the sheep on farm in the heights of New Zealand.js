const lostSheep = (friday,saturday,total) => {
  return total - friday.concat(saturday).reduce( (a, b) => a + b, 0)
}
