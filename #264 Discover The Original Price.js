const discoverOriginalPrice = (discountedPrice, salePercentage) => {
  
  let originalPrice = discountedPrice / (1 - 0.01 * salePercentage)
  
  return originalPrice % 1 === 0 ? originalPrice : originalPrice.toFixed(2) * 1
}
