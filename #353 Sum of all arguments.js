const sum = (...array) => array.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
// функция sum использует спред-оператор ... для принятия неограниченного числа аргументов в виде массива
