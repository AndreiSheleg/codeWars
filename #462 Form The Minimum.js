const minValue = values => {
    // Удаляем дубликаты из массива
    let uniqueValues = values.filter((value, index) => values.indexOf(value) === index)
    
    // Сортируем уникальные значения по возрастанию
    uniqueValues.sort((a, b) => a - b)
    
    // Объединяем отсортированные значения и преобразуем их в число
    let result = parseInt( uniqueValues.join('') )
    
    return result
}
