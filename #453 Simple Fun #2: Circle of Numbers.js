const circleOfNumbers = (n, firstNumber) => {
  
    let oppositePosition = (firstNumber + n / 2) % n
    
    return oppositePosition;
}
