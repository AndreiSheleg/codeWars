const removeConsecutiveDuplicates = string => 
    string
        .split(" ")
        .filter(
            (word, index, splittedString) => word !== splittedString[index + 1]
        )
        .join(" ")
