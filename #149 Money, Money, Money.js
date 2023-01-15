const calculateYears = (principal, interest, tax, desired) => {
   let year = 0;
   while (principal < desired ) {
    year += 1
    principal += ( (principal * interest ) - ( principal * interest * tax ) )
   }
   return year
}
