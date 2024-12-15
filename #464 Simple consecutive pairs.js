conat pairs = ar => {
    let count = 0

    for (let i = 0; i < ar.length - 1; i += 2) {
        if (Math.abs(ar[i] - ar[i + 1]) === 1) {
            count++;
        }
    }

    return count
}

// function pairs(arr){
//   let count = 0
//   for (let i=0; i < arr.length;  i+= 2)
//     if (arr[i] - 1 == arr[i + 1] || arr[i] + 1 == arr[i + 1])
//       count++;
//   return count;
// };
