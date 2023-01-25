const largestPairSum = numbers => numbers.sort( (a, b) => a - b ).slice(-2).reduce( (a,b) => a + b, 0)

// const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b);
