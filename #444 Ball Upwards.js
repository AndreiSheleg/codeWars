function maxBall(v0) {

    let velocity = v0 * 1000 / 3600
    const g = 9.81

    let t = 0
    let maxHeight = 0
    let timeAtMaxHeight = 0

    for (let i = 0; i <= 100; i++) { 
        let height = (velocity * (i / 10)) - (0.5 * g * Math.pow((i / 10), 2))
        if (height > maxHeight) {
            maxHeight = height
            timeAtMaxHeight = i
        }
    }
    return timeAtMaxHeight
}
