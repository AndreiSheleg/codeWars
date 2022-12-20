const squareOrSquareRoot = array => array.map(elem => Math.sqrt(elem) % 1 === 0 ? Math.sqrt(elem) : elem * elem)
