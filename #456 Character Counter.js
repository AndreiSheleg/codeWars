const validateWord = s => {

    let sLowerCase = s.toLowerCase()

    let charCount = {};


    // Count occurrences of each character in the input string
    [...sLowerCase].forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1
    })

    let counts = Object.values(charCount)

    return counts.every(count => count === counts[0]);
}
