const circleOfNumbers = (n, firstNumber) => {
  
    let oppositePosition = (firstNumber + n / 2) % n
    
    return oppositePosition;
}

// const circleOfNumbers = (n, firstNumber) => {  
//     if (n < 4 || n > 1000) {
//       console.log('n is invalid');
//     }
    
//     if ( firstNumber < 0 || firstNumber > (n - 1) ) {
//       console.log('firstNumber is invalid')
//     }
        
//     const half = ( n / 2 )
    //     return ( firstNumber < half ? ( half + firstNumber ) : ( firstNumber - half ))
    
// }
