const solution = pairs => {
    return Object.entries(pairs)
        .map(([key, value]) => `${key} = ${value}`)
        .join(',')
}

// const solution = pairs => { 
//     let array = [] 
//     let keys = Object.keys(pairs)

//     for (let i = 0; i < keys.length; i++) { 
//         let pair = keys[i] 
//         array.push( (pair + ' = ' + pairs[pair]) )
//     } 

//     return array.join(',') 
// }
