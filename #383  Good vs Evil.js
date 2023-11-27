const goodVsEvil = (good, evil) => {
const goodArr = good.split(' ').map(el => parseInt(el))
const evilArr = evil.split(' ').map(el => parseInt(el))

  const goodArrSum = goodArr.reduce((acc, current) => acc + current, 0)

    const evilArrSum = evilArr.reduce((acc, current) => acc + current, 0)
  
  return (goodArrSum > evilArrSum 
          ? "Battle Result: Good triumphs over Evil" 
          : goodArrSum === evilArrSum 
          ? "Battle Result: No victor on this battle field"
         : "Battle Result: Evil eradicates all trace of Good")
}
