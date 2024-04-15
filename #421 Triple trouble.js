const tripledouble = (num1, num2) => {
  const str1 = String(num1);
  const str2 = String(num2);

  for (let i = 0; i < 10; i++) {
    const tripleNumber = String(i).repeat(3)
    const doubleNumber = String(i).repeat(2)

    if (str1.includes(tripleNumber) && str2.includes(doubleNumber)) {
      return 1
    }
  }

  return 0
}
