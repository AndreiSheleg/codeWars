function findNeedle(haystack) {
  // your code here
  let result = "";
  const needle = "needle";
  
  for (let i = 0; i < haystack.length; i++) {
    if ( haystack[i] === needle) {
      result = "found the needle at position " + i;
    };
  };
  return result;
}
