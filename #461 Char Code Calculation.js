const calc = x => {

    let total1 = x.split('').map(char => char.charCodeAt(0)).join('')
    
    // replace 7 with 1 in the string
    let total2 = total1.replace(/7/g, '1')
    
    let sumTotal1 = total1.split('').reduce((acc, digit) => acc + parseInt(digit), 0)
    let sumTotal2 = total2.split('').reduce((acc, digit) => acc + parseInt(digit), 0)
    
    return sumTotal1 - sumTotal2
}
