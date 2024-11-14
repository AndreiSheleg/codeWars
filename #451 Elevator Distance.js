const elevatorDistance = array => {
    let totalDistance = 0

    for (let i = 0; i < array.length - 1; i++) {
        totalDistance += Math.abs(array[i] - array[i + 1])
    }

    return totalDistance
}
