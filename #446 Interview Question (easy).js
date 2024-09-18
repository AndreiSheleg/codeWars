const getStrings = city => {

    let cityLowerCase = city.toLowerCase().replace(/[^a-z]/g, '')

    const letterCounts = {}
    
    let result = ''

    for (let i = 0; i < cityLowerCase.length; i++) {
        let letter = cityLowerCase[i]
        if (letterCounts[letter]) {
            letterCounts[letter]++
        } else {
            letterCounts[letter] = 1
        }
    }


    const letters = Object.keys(letterCounts)
    
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i]
        result += `${letter}:${'*'.repeat(letterCounts[letter])},`;
    }

    return result.slice(0, -1)     // Удаляем завершающую запятую
}
