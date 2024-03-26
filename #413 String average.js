const averageString = str => {

    const wordToNumber = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    const wordsArr = str.split(' ')

    let sum = 0
    let count = 0

    for (let i = 0; i < wordsArr.length; i++) {
      let el = wordsArr[i]
        if (wordToNumber.hasOwnProperty(el)) {
            sum += wordToNumber[el]
            count++
        } else {
            return "n/a"
        }
    }

    const average = Math.floor(sum / count)

    const numberToWord = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];

    return numberToWord[average]
}
