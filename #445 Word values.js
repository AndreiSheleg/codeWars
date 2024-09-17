const wordValue = a => {
  
return a.map( (element, index) => {
        return element.replace(/\s/g, '')  // remove spaces
                  .split('')
                  .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0) * (index + 1);
    })
}
