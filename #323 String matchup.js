const solve = (a,b) => b.map( elem1 => a.filter(elem2 => elem2 === elem1).length )
