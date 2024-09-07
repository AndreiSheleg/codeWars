const abbreviate = str => {
    return str.replace(/\w{4,}/g, (match) => {
        return match[0] + (match.length - 2) + match.slice(-1)
    })
}
