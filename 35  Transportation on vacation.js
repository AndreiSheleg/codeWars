function rentalCarCost(d) {
  // Your solution here
  let rentPerDay = 40;
  let totalCheck = 0;
  if (d >= 7) {
    totalCheck = d * rentPerDay - 50;
  } else if (d >= 3){
    totalCheck = d * rentPerDay - 20;
  } else {
    totalCheck = d * rentPerDay;
  }
  return totalCheck;
}
