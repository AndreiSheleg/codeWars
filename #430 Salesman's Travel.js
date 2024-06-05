const travel = (r, zipcode) => {
  let addresses = r.split(',')
  let streets = []
  let houseNumbers = []

  for (let i = 0; i < addresses.length; i++) {
    let address = addresses[i].trim()
    let components = address.split(' ')
    let addressZipcode = components.slice(-2).join(' ')

    if (addressZipcode === zipcode) {
      let streetTown = components.slice(1, -2).join(' ')
      streets.push(streetTown)
      houseNumbers.push(components[0])
    }
  }

  if (streets.length > 0 && houseNumbers.length > 0) {
    let result = zipcode + ':' + streets.join(',') + '/' + houseNumbers.join(',')
    return result
  } else {
    return zipcode + ':/'
  }
}
