function getGrade (s1, s2, s3) {
  // Code here
  let result = (s1 + s2 + s3) / 3;
  
  if (result >= 90 ) {
    return "A";
  } else if (result >= 80 ) {
    return "B";
  } else if (result >= 70 ) {
    return "C";
  } else if (result >= 60 ) {
    return "D";
  } else {
    return  "F";
    };
};
