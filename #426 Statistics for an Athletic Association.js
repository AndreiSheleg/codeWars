const stat = str => {
  if (str === '') {
    return ''
  }

  const raceTimes = str.split(', ').map(convertToSeconds)
  
  const range = formatTime(Math.max(...raceTimes) - Math.min(...raceTimes))
  
  const average = formatTime(calculateAverage(raceTimes))
  
  const median = formatTime(calculateMedian(raceTimes))
  

  return `Range: ${range} Average: ${average} Median: ${median}`
}

const convertToSeconds = timeStr => {
  const [hours, minutes, seconds] = timeStr.split('|').map(Number)
  return hours * 3600 + minutes * 60 + seconds
}

const formatTime = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = timeInSeconds % 60

  return `${padWithZero(hours)}|${padWithZero(minutes)}|${padWithZero(seconds)}`
}

const padWithZero = number => {
  return number.toString().padStart(2, '0')
}

const calculateAverage = numbers => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0)
  return Math.floor(sum / numbers.length)
}

const calculateMedian = numbers => {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)
  const middleIndex = Math.floor(sortedNumbers.length / 2)

  if (sortedNumbers.length % 2 === 0) {
    const median = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    return Math.floor(median)
  } else {
    return sortedNumbers[middleIndex]
  }
}
