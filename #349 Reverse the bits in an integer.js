const reverseBits = n => {
  const binary = n.toString(2)
  const reverse = binary.split('').reverse('').join('')
  return parseInt(reverse, 2)
}
