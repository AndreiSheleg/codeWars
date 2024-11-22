const validateWord = s => {

    let sLowerCase = s.toLowerCase()

    let charCount = {}

    // Count occurrences of each character in the input string
    [...sLowerCase].forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1
    })

    let counts = Object.values(charCount)

    return counts.every(count => count === counts[0])
}

//const validateWord = s => {
//   s = s.toLowerCase().split("")
//   let arr = []

//   for (let i = 0; i < s.length; i++) {
//     let current = s.filter(el => el === el[i]).length
//     if(arr.includes(current)) continue; // Если условие if истинно (то есть элемент уже есть в массиве), оператор continue прерывает текущую итерацию цикла и переходит к следующей итерации  
//        arr.push(current);
//   }
//   return arr.length === 1
// }
