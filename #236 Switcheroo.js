const switcheroo = x => {
  return x.split('').map( (el) => {
    if (el ==='b')return 'a';
    if (el === 'a') return 'b';
    if(el ==='c') return 'c'
  }).join('')
}
