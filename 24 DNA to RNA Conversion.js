function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      result += "U";
    } else {
      result += dna[i];
    };
   };
  return result;
}
