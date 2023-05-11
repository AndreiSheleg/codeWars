const maxRot = n => {
    let str = n.toString()
    let arr = [str]

    for (let i = 0; i <= str.length - 1 ; i++ ) {
        str = str.slice(0, i) + str.slice(i + 1) + str[i]
        arr.push(str.split().join())

    }
    return Math.max(...arr);
}
