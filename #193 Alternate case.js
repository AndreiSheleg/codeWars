const alternateCase = s => s.split('').filter(el => el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
