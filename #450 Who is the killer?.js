const killer = (suspectInfo, dead) => {
    const suspects = Object.keys(suspectInfo)
    
    for (let i = 0; i < suspects.length; i++) {
        const suspect = suspects[i]
        
        if (dead.every(el => suspectInfo[suspect].includes(el))) {
            return suspect
        }
    }
}

// const killer = (suspectInfo, dead) => {
//  return Object.keys(suspectInfo).find( el => dead.every( person => suspectInfo[el].includes(person) ) )
// } - short solution
