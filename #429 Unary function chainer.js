function chained(functions) {
  return function (input) {
    return functions.reduce(function (result, func) {
      return func(result);
    }, input);
  };
}