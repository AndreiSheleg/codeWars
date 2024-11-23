const outed = (meet, boss) => {
    let totalScore = 0
  
    let totalMembers = 0

    for (let member in meet) {
        totalScore += member === boss ? meet[member] * 2 : meet[member];
        totalMembers++
    }

    let averageScore = totalScore / totalMembers

    return averageScore <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
