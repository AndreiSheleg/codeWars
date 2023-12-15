const removeParentheses = str => {
  const stack = []
  let result = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      if (stack.length > 0) {
        stack.pop()
        continue // => пропускаю добавление ')' к строке результата
      }
    }

    if (stack.length === 0) {
      result += str[i]
    }
  }

  return result
}
