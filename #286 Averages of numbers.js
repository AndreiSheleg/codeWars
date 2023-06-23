const averages = numbers => {
return  numbers
    ? numbers.map((element, index, newArray) => (element + newArray[index + 1]) / 2).slice(0, -1)
    : []
}
