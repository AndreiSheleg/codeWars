const isDivisible = (n, ...args) => {
    if (args.length === 0) {
        return true
    }

    for (let i = 0; i < args.length; i++) {
        if (n % args[i] !== 0) {
            return false
        }
    }

    return true
}

// const isDivisible = (firstArg, ...restArgs) => {
//   return restArgs.every(el => firstArg % el === 0);
// }
