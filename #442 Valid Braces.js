const validBraces = braces => {
    const matchingBraces = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const result = []

    for (let i = 0; i < braces.length; i++) {
        const brace = braces[i]
        if (matchingBraces.hasOwnProperty(brace)) {
            result.push(brace)
        } else {
            const lastOpened = result.pop()
            if (matchingBraces[lastOpened] !== brace) {
                return false
            }
        }
    }

    return result.length === 0
}
