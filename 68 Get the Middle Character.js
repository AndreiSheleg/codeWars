function getMiddle(s)
{
  //Code goes here!
  let result = '';
  let middleNum = Math.floor(s.length / 2);
  
  if (s.length === 1) return s;
  
  if (s.length % 2 === 0) {
    result = s[middleNum - 1] + s[middleNum]
  } else {
    result = s[middleNum]
  }
  
  return result
}
