const findEvenIndex = arr => {
  let sumOfArr = 0
  let leftSum = 0

  for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i]
  }

  for (let j = 0; j < arr.length; j++) {
    sumOfArr -= arr[j];

    if (leftSum === sumOfArr) return j
    
    leftSum += arr[j]
  }

  return -1
}
