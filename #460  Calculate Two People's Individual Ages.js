const getAges = (sum, difference) => {
    const age1 = (sum + difference) / 2
    const age2 = (sum - difference) / 2

    if (sum < 0 || difference < 0 || age1 < 0 || age2 < 0) {
        return null
    } else {
        return [Math.max(age1, age2), Math.min(age1, age2)]
    }
}
