const quarterOf = (month) => {
  // Your code here
  let answer = 0;
  
  switch (month) {
      case 1:
      case 2:
      case 3:
      answer = 1
      break;
        case 4:
        case 5:
        case 6:
        answer = 2
        break;
      case 7:
      case 8:
      case 9:
      answer = 3
      break;
        case 10:
        case 11:
        case 12:
        answer = 4
        break;
  }
  
  return answer;
}
