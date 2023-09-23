const solve = s =>  Math.max(...s.split(/[^aoeiu]/i).map(element => element.length))
