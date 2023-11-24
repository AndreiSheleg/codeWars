const solution = roman => {

  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0

for (let i = 0; i < roman.length; i++) {
    const currentSymbol = romanSymbols[ roman[i] ]
    const nextSymbol = romanSymbols[ roman[i + 1] ]

    if (nextSymbol && currentSymbol < nextSymbol) {
      result -= currentSymbol
    }

    else {
      result += currentSymbol
    }
  }

  return result
}
