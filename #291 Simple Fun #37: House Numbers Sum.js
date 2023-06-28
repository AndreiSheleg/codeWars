const houseNumbersSum = inputArray => inputArray.slice(0, inputArray.indexOf(0)).reduce((sum, current) => sum + current, 0)
