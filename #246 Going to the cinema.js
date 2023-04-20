const movie = (card, ticket, perc) => {
    let priceOfSystemA = 0
    let priceOfSystemB = card
    let result = 0
    
    while (Math.ceil(priceOfSystemB) >= priceOfSystemA) {
        priceOfSystemA += ticket
        result++
        priceOfSystemB += ticket * Math.pow(perc,result)
    }
    return result
}
