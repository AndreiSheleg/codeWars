const sumNoDuplicates = numList => {

    const numCount = {}

    numList.forEach(num => {
        numCount[num] = (numCount[num] || 0) + 1
    })
    

    const sum = numList.reduce((acc, num) => {
        if (numCount[num] === 1) {
            return acc + num
        }
        return acc
    }, 0)
    
    return sum
}
