const ipToInt32 = ip => {

  let octets = ip.split('.')

  let binary = octets.map(el => {
    return parseInt(el, 10).toString(2).padStart(8, '0')
  })

let binaryString = binary.join('')

let decimal = parseInt(binaryString, 2)

  return decimal
}
