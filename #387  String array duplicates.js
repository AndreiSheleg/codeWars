const dup = arr => {
  return arr.map( str => {
                            let modifiedStr = '';
                            for (let i = 0; i < str.length; i++) {
                            if (str[i] !== str[i - 1] || i === 0) {
                            modifiedStr += str[i];
                                }
                            }
                          return modifiedStr
  })
}
