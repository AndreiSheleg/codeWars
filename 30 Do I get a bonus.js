function bonusTime(salary, bonus) {
// your code here
  let result = "";
  if (bonus === true) {
    result = 10 * salary;
  } else {
    result = salary
  };
  return "\u00A3" + result;
}
