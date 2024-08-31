const deleteNth = (arr, n) => {
    let counts = {}
    
    return arr.filter(num => {
        counts[num] = counts[num] ? 
                                    counts[num] + 1 
                                  : 1;
        return counts[num] <= n;
    });
}
