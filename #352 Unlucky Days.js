const unluckyDays = year => {
  
  let countOfunluckyDays = 0
  const unluckuDayOfMonth = 13
  
  for (let month = 0; month < 12; month++) {
    countOfunluckyDays += new Date(year, month, unluckuDayOfMonth).getDay() === 5 ? 1 : 0;
  }
  return countOfunluckyDays
}
