const areaOrPerimeter = function(l , w) {
  // Return your answer
  let result = 0;
  if ( l === w ) {
    result = l * w;
  } else {
    result = 2 * l + 2 * w;
  }
  return result;
};
