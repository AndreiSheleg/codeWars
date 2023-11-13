const parse = data => {
  let value = 0
  const output = []

  for (let i = 0; i < data.length; i++) {
    const currentCommand = data.charAt(i)

    if (currentCommand === 'i') {
      value++
    } else if (currentCommand === 'd') {
      value--
    } else if (currentCommand === 's') {
      value = value * value
    } else if (currentCommand === 'o') {
      output.push(value)
    }
  }

  return output
  }
