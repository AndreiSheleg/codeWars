const nbMonths = (startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) => {
  let months = 0
  let savings = 0
  let priceOld = startPriceOld
  let priceNew = startPriceNew

  while (savings + priceOld < priceNew) {
    months++
    savings += savingPerMonth;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5
    }
    priceOld -= (priceOld * percentLossByMonth) / 100
    priceNew -= (priceNew * percentLossByMonth) / 100
  }

  const remaining = savings + priceOld - priceNew
  
  return [months, Math.round(remaining)]
}
