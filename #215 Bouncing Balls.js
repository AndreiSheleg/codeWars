const bouncingBall = (h,  bounce,  window) => {
  
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
  
  let count = 1
  let hCurrent = h *  bounce
  
  while (hCurrent > window) {
    count += 2
    hCurrent *= bounce
  }
  return count
}
