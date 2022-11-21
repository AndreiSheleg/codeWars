function isPalindrome(x) {
  // your code here
  let reverseString = "";
  
  for (let i = x.length - 1; i >= 0; i--) {
    reverseString += x[i];
  };
  
  return x.toLowerCase() === reverseString.toLowerCase()
}
