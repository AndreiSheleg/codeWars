const save = (sizes, hd) => {
let sum = 0
let count = 0

for (let i = 0; i < sizes.length; i++) {
  sum += sizes[i]
  if (sum <= hd) {
    count += 1
  }
}
   return count  
}
