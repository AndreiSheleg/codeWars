const countSmileys = arr => {
  if (arr.length === 0) return 0
  let count = 0
  
  let validSmileys = [':)',
                      ';)',
                      ':D',
                      ';D',
                      ':-D',
                      ':~D',
                      ':-)',
                      ':~)',
                      ';~)',
                      ';~D',
                      ';-D',
                      ';-)']
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < validSmileys.length; j++) {
      if (validSmileys[j] === arr[i]) count += 1
    }
  }
  return count
