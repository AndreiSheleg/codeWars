const sumConsecutives = arr => {
const arrCopy = [...arr]
return arrCopy.reduce((acc, num, i) => {
  if(num === arrCopy[i - 1]) {
    acc[acc.length - 1] += num
  } else {
    acc.push(num)
  }
  return acc
  }, [])
}
