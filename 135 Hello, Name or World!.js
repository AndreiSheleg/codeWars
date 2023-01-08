const hello = name => {
  if (name == undefined || name.length == 0 ) return "Hello, World!"
  return "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!"
}
