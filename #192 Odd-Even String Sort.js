const sortMyString = S => {
    let evenString = S.split('').filter((el, i) => i % 2 === 0).join('')
    let oddString = S.split('').filter((el,i) => i % 2 !== 0).join('')
    return evenString + ' ' + oddString
}
