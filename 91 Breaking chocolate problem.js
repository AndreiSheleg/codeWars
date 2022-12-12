const breakChocolate = (n,m) => {
  if (n <= 0 || m <= 0) return 0
  return n * m - 1
  }

//OR const breakChocolate = (n,m) => n < 1 || m < 1 ? 0 : n * m - 1

