const solve = s => {
    let uppercaseCount = 0
    let lowercaseCount = 0
    let numberCount = 0
    let specialCount = 0

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (/[A-Z]/.test(char)) {
            uppercaseCount++
        } else if (/[a-z]/.test(char)) {
            lowercaseCount++
        } else if (/[0-9]/.test(char)) {
            numberCount++
        } else {
            specialCount++
        }
    }

    return [uppercaseCount, lowercaseCount, numberCount, specialCount]
}
