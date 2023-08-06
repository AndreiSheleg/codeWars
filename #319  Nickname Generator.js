const nicknameGenerator = name => {
  if (name.length < 4) {
    return 'Error: Name too short'
  }
  let result = ''
  name[2].match(/[aeuio]/) ? result = name.slice(0,4) : result = name.slice(0,3)
  return result
}
