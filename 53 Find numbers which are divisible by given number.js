function divisibleBy(numbers, divisor){
let result = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % divisor === 0) {
    result.push(numbers[i]);
  };
};

return result;
}
