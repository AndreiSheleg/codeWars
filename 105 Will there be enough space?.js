const enough = (cap, on, wait) => {
  let result = on + wait - cap
  if (result < 0) return 0
  return result
}
