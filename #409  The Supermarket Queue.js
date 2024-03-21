const queueTime = (customers, n) => {
  
    // Инициализируем массив длины n с нулевыми значениями
    const checkoutTills = new Array(n).fill(0)

    for (let i = 0; i < customers.length; i++) {
        const customerTime = customers[i]
        
        const minTimeTill = Math.min(...checkoutTills)

        const minIndex = checkoutTills.indexOf(minTimeTill)
        
        checkoutTills[minIndex] += customerTime
    }

    return Math.max(...checkoutTills)
}
