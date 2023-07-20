const bandNameGenerator = str => {
  if ( str.slice(0,1) !== str.slice(-1) ) {
    return 'The ' + str.slice(0,1).toUpperCase() + str.slice(1) // "dolphin" -> "The Dolphin"
    } else {
    return str.slice(0,1).toUpperCase() + str.slice(1) + str.slice(1)  // "alaska" -> "Alaskalaska"
    }
}
