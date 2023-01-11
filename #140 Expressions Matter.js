const expressionMatter = (a, b, c) => {
  let resultArr = []
  resultArr.push(a *(b + c));
  resultArr.push(a * b * c);
  resultArr.push(a + b * c);
  resultArr.push((a + b) * c);
  resultArr.push(a+b+c);
  return Math.max(...resultArr);
}
