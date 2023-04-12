const partlist = arr => {
  let resultArr = arr.map((el, index) => [arr.slice(0, index).join(' '), arr.slice(index).join(' ')])
    
    return resultArr.slice(1)
}
