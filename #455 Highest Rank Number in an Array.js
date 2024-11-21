const highestRank = arr => {
    const count = {}
    
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1
    })

    let mostFrequent = 0
    let highestNum = 0
    
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i]
        
        if (count[currentNum] >= mostFrequent || (count[currentNum] === mostFrequent && currentNum > highestNum)) {
            mostFrequent = count[currentNum]
            highestNum = currentNum
        }
    }

    return parseInt(highestNum)
}
