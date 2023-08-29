var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if( count < 0) {
      return `${count}<0`
      } else if( count === 0 ) {
        return `${count}=0`
        }
    
    let arr = []
    
    for ( let i = 0; i <= count; i++) {
      arr = [...arr, i]
    }
    let sumOfNumbers = arr.reduce( (total, next) => total + next, 0)
    
    let arrWithPlus = arr.join('+')
    
    return `${arrWithPlus} = ${sumOfNumbers}`
  };

  return SequenceSum;

}) ();
