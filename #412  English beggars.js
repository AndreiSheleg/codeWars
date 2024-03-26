const beggars = (values, n) => {
    const sums = Array(n).fill(0)

    for (let i = 0; i < values.length; i++) {
        sums[i % n] += values[i]
    }

    return sums
}
